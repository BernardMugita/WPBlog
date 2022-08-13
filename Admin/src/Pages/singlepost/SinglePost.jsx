import React from 'react'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Navbar from '../../Components/Navbar/Navbar'
import '../singlepost/SinglePost.scss'
import image from '../../images/postimg.jpg'
import Chart from '../../Components/chart/Chart'
import List from '../../Components/Table/Table';
import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import axios from 'axios'
import { useContext } from 'react'
import { Context } from '../../context/Context'
import { Link } from 'react-router-dom'


const Single = () => {

  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState({});
  const { user } = useContext(Context);
  const PF = "/images/"


  useEffect(() => {
    const fetchPost = async () => {
      const res = await axios.get("/api/posts/" + path)
      setPost(res.data)
    }
    fetchPost()
  }, [path])

  const handleDelete = async () => {
    try {
      await axios.delete(`/api/posts/${post._id}`, { data: { username: user.username } })
      window.location.replace("/blogposts");
    } catch (err) { }
  }

  return (
    <div className='Singlepost'>
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="singlepost-component">
        <div className="navbar">
          <Navbar />
        </div>
        <div className="top">
          <div className="left">
            {post.username === user?.username && (
              <div className="delete" onClick={handleDelete}>Delete</div>
            )}

            {post.username === user?.username && (
              <Link to={`/blogposts/updatepost/${post._id}`} className="update">Update</Link>
            )}
            <div className="label">
              <h1>Blog post details</h1>
              <img src={PF + post.photo} alt="" />
            </div>
            <div className="details">
              <h2>{post.title}</h2>
              <div className="detail-item">
                <span className='itemKey'>Author:</span>
                <span className='itemValue'>{post.username}</span>
              </div>
              <div className="detail-item">
                <span className='itemKey'>Date published:</span>
                <span className='itemValue'>{new Date(post.createdAt).toDateString()}</span>
              </div>
              <div className="detail-item">
                <span className='itemKey'>Category:</span>
                <span className='itemValue'>{post.category}</span>
              </div>
              <div className="detail-item">
                <span className='itemKey'>Views:</span>
                <span className='itemValue'>88</span>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={2 / 1} title="Post interaction for last 6 months" />
          </div>
        </div>
        <div className="bottom">
          <div className="stats">
            <List />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Single