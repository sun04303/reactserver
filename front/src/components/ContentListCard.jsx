import {React} from 'react'
import useSWR from 'swr'
import axios from 'axios'
import dayjs from 'dayjs'
import { Link } from 'react-router-dom'
import {Alert, List, Card, Space, Button, Popconfirm, message} from 'antd'
import { DeleteOutlined } from '@ant-design/icons'
import { SERVER_URL } from '../Constants/serverURL'

function ContentListCard() {
    const fetcher = url => axios.get(url).then(res => res.data)
    const {data, error} = useSWR(`${SERVER_URL}/blogs`, fetcher)
    
    const handleDelete = async deleteTarget => {
        try {
            await axios.delete(`${SERVER_URL}/blogs/${deleteTarget}`)
        } catch (error) {
            console.error(error)
        }

        message.success('삭제가 완료되었습니다')
    }

    return (
        <>
            {
                error ? (
                    <Alert
                        message="문제가 발생했습니다."
                        type="error"
                        closeable
                    />
                ) : (
                    <List
                        grid={{gutter:24, column:4}}
                        dataSource={data}
                        loading={!data}
                        renderItem={item => (
                            <List.Item>
                                <Card
                                    title={item.title}
                                    extra={
                                        <Space>
                                            <Link to={`/update/${item.id}`}>자세히 보기</Link>
                                            <Popconfirm
                                                placement='top'
                                                title="삭제 하시겠습니끼?"
                                                onConfirm={() => handleDelete(item.id)}
                                                okText="예"
                                                cancelText="아니요"
                                            >
                                                <Button type='danger' icon={<DeleteOutlined />} />
                                            </Popconfirm>
                                        </Space>
                                    }
                                >
                                    최종 수정일 : {dayjs(item.updated_at).format('YYYY-MM-DD')}
                                </Card>
                            </List.Item>
                        )}
                    />
                )
            }
        </>
    )
}

export default ContentListCard