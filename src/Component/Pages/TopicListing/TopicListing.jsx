import React from 'react'
import Breadcrumb from './Breadcrumb'
import PopularTopics from './PopularTopics'
import TrendingTopics from './TrendingTopics'

const TopicListing = () => {
  return (
    <>
    <Breadcrumb/>
    <PopularTopics/>
    <TrendingTopics/>
    </>
  )
}

export default TopicListing