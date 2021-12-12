import React from 'react'
import { Link } from 'react-router-dom'
import { Space, PageHeader, Button } from 'antd'

const pageLayoutWrapperStyles = {
    width: '100vw',
    
}

const pageLayoutStyle = {
    width:'80%',
    margin:'0 auto',
}

function PageLayout({ children, hasExtra = false }) {
    return(
        <Space direction='vertical' style={pageLayoutWrapperStyles}>
            <PageHeader 
                title="수정고 블로그"
                subTitle="수정고에서 리엑트 수업시간에 만든 블로그입니다"
                extra={
                    hasExtra && (
                        <Space>
                            <Link to="/write">
                                <Button>기록하러 가기</Button>
                            </Link>
                        </Space>
                    )
                }
            />
            <div style={pageLayoutStyle}>
                {children}
            </div>
        </Space>
    )
}

export default PageLayout