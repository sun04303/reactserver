import { Button, Form, Input } from 'antd';
import FormItem from 'antd/lib/form/FormItem';
import React from 'react';
import PageLayout from './PageLayout';

const InputStyles = {
  fontSize: 20,
  borderBottom: '1px solid #d5d5d5'
}
function ContentWrite() {
  const handleSubmit = (value) => {
    console.log(value)
  }
  return (
    <PageLayout>
      <Form onFinish={handleSubmit}>
        <FormItem
          name="title"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input
            bordered={false}
            style={InputStyles}
            placeholder="Title을 입력하세요."
          />
        </FormItem>
        <FormItem
          name="content"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input.TextArea
            showCount
            maxLength={100}
            autoSize={{ minRows: 15 }}
            style={{ height: 300 }}
            placeholder="내용을 입력하세요."
          />
        </FormItem>
        <Button htmlType="submit">등록하기</Button>
      </Form>
    </PageLayout>
  )
}

export default ContentWrite
