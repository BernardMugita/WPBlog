import React from 'react'
import '../Home/Home.scss'
import image from '../../Resoources/banner.jpg'
import Blogpost from '../../component/BlogPost/Blogpost'

const Home = () => {
  return (
    <div className='Home'>
      <div className="banner-image">
        <p>Blog</p>
      </div>
      <div className="blog-posts">
          <Blogpost/>
          <Blogpost/>
          <Blogpost/>
          <Blogpost/>
      </div>

    </div>
  )
}

export default Home