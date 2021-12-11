import React from 'react';
import { Link } from 'react-router-dom';
import { Button, PageHeader, Space } from 'antd';
import SearchFilter from './SearchFilter';

const pageLayoutWrapperStyles = {
  width: '100vw',
}

const pageLayoutStyles = {
  width: 600,
  margin:'0 auto'
}
function PageLayout({ children, hasExtra=false }) {
  return (
    <Space direction="vertical" style={pageLayoutWrapperStyles}>
      <PageHeader
        title="STRAPILOG"
        className="site-page-header"
        subTitle="우리의 이야기를 담아요"
        extra={ hasExtra && (
          <Space>
            <SearchFilter />
            <Link to="/write">
              <Button> 기록하러 가기</Button>
            </Link>
          </Space>
          )
        }
      />
      <div style={pageLayoutStyles}>
        {children}
      </div>
    </Space>
  )
}

export default PageLayout
