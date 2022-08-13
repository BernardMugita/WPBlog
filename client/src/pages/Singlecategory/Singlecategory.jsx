import React from 'react'
import '../Singlecategory/Singlecategory.scss'
import { Link } from 'react-router-dom'
import Blogpost from '../../component/BlogPost/Blogpost'
import Sidebar from '../../component/Sidebar/Sidebar'
import { useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

const Singlecategory = ({ category }) => {
  const [posts, setPosts] = useState([])
  const [catName, setCatName] = useState();
  const { search } = useLocation()

  const location = window.location.pathname.split("/")[2]
  const title = location.replaceAll("%20", " ")


  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/api/posts" + search)
      setPosts(res.data)
    }
    fetchPosts();
  }, [search])

  useEffect(() => {

  })

  return (
    <div className='Single-category'>
      <div className="title">{title}</div>
      <div className="single-category-body">
        <div className="single-body" posts={posts}>
          {posts.map((p) => (
            <Blogpost post={p} />
          ))}
        </div>
        <div className="sidebar">
          <Sidebar />
        </div>
      </div>

    </div>
  )
}

export default Singlecategory;