import React, { useState } from 'react'
import axios from 'axios'
import PageLayout from '../components/PageLayout'
import ContentWrite from '../components/ContentWrite'
import { useNavigate } from 'react-router-dom'
import { SERVER_URL } from '../Constants/serverURL'
import { message } from 'antd'

function Create() {
    const [loading, setLoading] = useState(false)
    const navigation = useNavigate()

    const handleSubmit = async values => {
        setLoading(true)
        try {
            await axios.post(`${SERVER_URL}/blogs`, {
                title : values.title,
                content : values.content
            })
        } catch (error) {
            console.error(error)
        }

        setLoading(false)
        message.success('등록이 완료되었습니다!')
        navigation('/')
    }

    return(
        <PageLayout>
            <ContentWrite onSubmit={handleSubmit} loading={loading} />
        </PageLayout>
    )
}

export default Create