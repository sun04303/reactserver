import React from 'react'
import ContentListCard from '../components/ContentListCard'
import PageLayout from '../components/PageLayout'

function Home() {
    return(
        <PageLayout hasExtra = {true}>
            <ContentListCard />
        </PageLayout>
    )
}

export default Home