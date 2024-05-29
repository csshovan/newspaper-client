import React from 'react'
import { Helmet } from 'react-helmet'
import ArticleSlider from '../../components/Main/ArticleSlider'



const Home = () => {
  return (
    <div>
      <Helmet>
        <title>E-Shop | Home</title>
      </Helmet>
     <ArticleSlider></ArticleSlider>
    </div>
  )
}

export default Home
