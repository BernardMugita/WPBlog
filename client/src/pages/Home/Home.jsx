import React, { useEffect, useState } from 'react'
import '../Home/Home.scss'
import image from '../../Resoources/image.jpg'
import Blogpost from '../../component/BlogPost/Blogpost'
import Sidebar from '../../component/Sidebar/Sidebar'
import axios from 'axios'
import styled from 'styled-components'

const Posts = styled.div`
  flex: 3;
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
`

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/api/posts")
      setPosts(res.data.sort((a, b) => (a.data < b.data) ? -1 : 1))
    }
    fetchPosts()
  }, [])

  return (
    <div className='Home'>
      <div className="banner-image">
        <p>Blog</p>
      </div>
      <div className="body-component">
        <Posts posts={posts}>
          {posts.map((p) => (
            <Blogpost post={p}>

            </Blogpost>
          ))}
        </Posts>
        <div className="sidebar">
          <Sidebar />
        </div>
      </div>
    </div>
  )
}

export default Home



