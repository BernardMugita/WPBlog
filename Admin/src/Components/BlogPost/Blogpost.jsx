import React from 'react'
import '../BlogPost/Blogpost.scss'
import { Link, useLocation } from 'react-router-dom'
import { MdOutlineMoreVert } from 'react-icons/md'
import { useContext } from 'react'
import { Context } from '../../context/Context'
import axios from 'axios'


const Blogpost = ({ post }) => {
    const { user } = useContext(Context);
    return (
        <div className='Blogpost'>
            {post.username === user?.username && (
                <div className="blog-post">
                    <MdOutlineMoreVert />

                    <div className="title-container">
                        <h1>{post.title}</h1>
                    </div>
                    <div className="category-container">{post.category}</div>
                    <div className="meta-tags">
                        <div className="date">{new Date(post.createdAt).toDateString()}</div>
                        |
                        <div className="author">{post.username}</div>
                    </div>
                    <div className="user-actions">
                        <button className="view">
                            <Link to={`/blogposts/${post._id}`}>View</Link>
                        </button>
                        
                    </div>
                </div>
            )}
        </div>
    )
}

export default Blogpost