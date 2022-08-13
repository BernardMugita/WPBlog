import React from 'react'
import '../blogposts/Blogposts.scss'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Navbar from '../../Components/Navbar/Navbar'
import Datatable from '../../Components/Datatable/Datatable'
import { Link } from 'react-router-dom'
import Blogpost from '../../Components/BlogPost/Blogpost'
import { useState, useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { useContext } from 'react'
import { Context } from '../../context/Context'

const Posts = styled.div`
  padding: 1rem;
  display: flex;
  gap: 1rem;
  flex-direction: column;
`

const BlogPosts = () => {
  const [posts, setPosts] = useState([{}])

  const { user } = useContext(Context)

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/api/posts")
      setPosts(res.data.sort((a, b) => (a.data < b.data) ? -1 : 1))
    }
    fetchPosts()
  })

  return (
    <div className='BlogPosts'>
      <div className="sidebar">
        <Sidebar />
      </div>

      <div className="blogpost-component">
        <div className="navbar">
          <Navbar />
        </div>
        <div className="data-table">
          <div className="datatableTitle">
            Add New Post
            <Link to="/blogposts/newpost" style={{ textDecoration: "none" }}>
              Add New
            </Link>
          </div>
          <Posts posts={posts}>
            {posts.map((p) => (
              <Blogpost post={p} />
            ))}
          </Posts>
        </div>
      </div>
    </div>
  )
}

export default BlogPosts;