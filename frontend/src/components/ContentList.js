import React from 'react';
import { Alert, Card, List } from 'antd';
import axios from 'axios';
import useSWR from 'swr';
import dayjs from 'dayjs'

function ContentList() {
  const fetcher = url => axios.get(url).then(res => res.data);
  const { data, error } = useSWR('http://localhost:1337/blogs', fetcher);
  return (
    <>
      {
        error ? (
          <Alert
            message="문제가 발생했습니다"
            type="error"
            closable
          />
        ): (
          <List
            grid={{ gutter: 24, column: 4 }}
            dataSource={data}
            loading={!data}
            renderItem={item => (
              <List.Item>
                <Card title={item.title} style={{ width: 300 }} extra="자세히 보기">
                  최종 수정일: {dayjs(item.updated_at).format('YYYY-MM-DD')}
                </Card>
              </List.Item>
            )}
          />
        )
      }
    </>
  )
}

export default ContentList;
