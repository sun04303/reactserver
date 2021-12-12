import React from 'react'
import { Form, Input, Button, Space, Popconfirm } from 'antd'
import { useNavigate } from 'react-router-dom'

const InputStyle = {
    fontSize: 20,
    borderBottom:'1px solid #d5d5d5'
}

const DefaultValue = {
    title : '',
    content : ''
}

function ContentWrite({ onSubmit, data = { ...DefaultValue }, loading = false}) {
    const navigation = useNavigate()

    const goBack = () => {
        navigation(-1)
    }

    return (
        <Form
            onFinish={onSubmit}
            initialValues={data}
        >
            <Form.Item
                name='title'
            >
                <Input
                    bordered={false}
                    style={InputStyle}
                    placeholder='제목을 입력해주세요.'
                />
            </Form.Item>

            <Form.Item
                name='content'
            >
                <Input.TextArea
                    showCount
                    placeholder='내용을 입력해주세요.'
                    autoSize={{minRows:15}}
                />
            </Form.Item>

            <Space>
                <Button htmlType='submit' type='primary' loading={loading}>등록하기</Button>
                <Popconfirm
                    placement='top'
                    title="취소 하시겠습니끼?"
                    onConfirm={goBack}
                    okText="예"
                    cancelText="아니요"
                >
                    <Button type='danger'>취소하기</Button>
                </Popconfirm>
            </Space>
        </Form>
    )
}

export default ContentWrite