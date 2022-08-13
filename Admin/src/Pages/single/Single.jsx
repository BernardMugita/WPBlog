import React from 'react'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Navbar from '../../Components/Navbar/Navbar'
import '../single/Single.scss'
import image from '../../images/index.jpeg'
import Chart from '../../Components/chart/Chart'
import List from '../../Components/Table/Table';
import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import axios from 'axios'


const Single = () => {

  const location = useLocation()
  const path = location.pathname.split("/")[2]

  const [user, setUser] = useState({})

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get("/api/users/" + path)
      setUser(res.data)
    }
    fetchUser()
  }, [path])

  return (
    <div className='Single'>
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="single-component">
        <div className="navbar">
          <Navbar />
        </div>
        <div className="top">
          <div className="left">
            <div className="edit-button">Edit</div>
            <div className="label">
              <h1>User Details</h1>
              <img src={user.photo} alt="" />
            </div>
            <div className="details">
              <h2>{user.username}</h2>
              <div className="detail-item">
                <span className='itemKey'>Email:</span>
                <span className='itemValue'>{user.email}</span>
              </div>
              <div className="detail-item">
                <span className='itemKey'>Phone:</span>
                <span className='itemValue'>+254724567890</span>
              </div>
              <div className="detail-item">
                <span className='itemKey'>Address:</span>
                <span className='itemValue'>BOX 247 Eastleigh</span>
              </div>
              <div className="detail-item">
                <span className='itemKey'>Country:</span>
                <span className='itemValue'>Kenya</span>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={2 / 1} title="Revenue for last 6 months" />
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