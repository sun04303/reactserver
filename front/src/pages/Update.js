import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import useSWR from 'swr'
import axios from 'axios'
import ContentWrite from '../components/ContentWrite'
import PageLayout from '../components/PageLayout'
import { SERVER_URL } from '../Constants/serverURL'
import { Alert, message, Spin } from 'antd'

function Update() {
    const [loading, setLoading] = useState(false)

    const params = useParams()

    const navigation = useNavigate()

    const fetcher = url => axios.get(url).then(res => res.data)
    const { data, error, mutate } = useSWR(`${SERVER_URL}/blogs/${params.id}`, fetcher);

    const handleSubmit = async values => {
        setLoading(true)
        try {
            await axios.put(`${SERVER_URL}/blogs/${params.id}`, {
                title : values.title,
                content : values.content
            })
            mutate(`${SERVER_URL}/blogs/${params.id}`)
        } catch (error) {
            console.error(error)
        }

        setLoading(false)
        message.success('수정이 완료되었습니다!')
        navigation('/')
    }

    return(
        <PageLayout>
            {
                error ? (
                    <Alert
                        message='문제가 발생했습니다'
                        type='error'
                        closable
                    />
                ) : data ? (
                    <ContentWrite data={data} onSubmit={handleSubmit} loading={loading} />
                ) : <Spin />
            }
        </PageLayout>
    )
}

export default Update