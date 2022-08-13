import React from 'react'
import { useState, useEffect } from 'react'
import '../userComponent/userComponent.scss'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { MdOutlineMoreVert } from 'react-icons/md'

const UserComponent = ({ user }) => {


    return (
        <div className='userComponent'>
            <MdOutlineMoreVert id='vert' />
            <div className="user-details">
                <div className="user-display-picture">
                    <img src={user.profilePic} alt="" />
                </div>
                <div className="user-id">
                    <p>{user._id}</p>
                </div>
                <div className="user-name">
                    <p>{user.username}</p>
                </div>
                <div className="user-email">
                    <p>{user.email}</p>
                </div>
                {/* <div className="user-status">
                <span className='status Active'>Active</span>
            </div> */}
            </div>
            <div className="user-actions">
                <button className="view">
                    <Link to={`/users/${user._id}`}>View</Link>
                </button>
                <button className="delete">Delete</button>
            </div>
        </div>
    )
}

export default UserComponent