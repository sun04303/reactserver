import React from 'react';
import ContentList from './ContentList';
import PageLayout from './PageLayout';

function ContentListCard() {
  return (
    <PageLayout hasExtra={true}>
      <ContentList />
    </PageLayout>
  )
}

export default ContentListCard
