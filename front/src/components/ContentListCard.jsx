import {React} from 'react'
import useSWR from 'swr'
import axios from 'axios'
import dayjs from 'dayjs'
import {Alert, List, Card} from 'antd'

function ContentListCard() {
    const fetcher = url => axios.get(url).then(res => res.data)
    const {data, error} = useSWR('http://localhost:1337/blogs', fetcher)
    
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
                        dataSource={data}
                        loading={!data}
                        renderItem={item => (
                            <List.Item>
                                <Card title={item.title}>
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