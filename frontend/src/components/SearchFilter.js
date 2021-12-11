import React from 'react';
import { Input, Space } from 'antd';

function SearchFilter() {
  return (
    <Space className="w-100">
      <Input.Search placeholder="제목으로 검색해보세요!" enterButton />
    </Space>
  )
}

export default SearchFilter
