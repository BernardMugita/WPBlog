import React from 'react'
import '../SinglePost/Singlepost.scss'
import { Link } from 'react-router-dom'
import postimg from '../../Resoources/postimg.jpg'
import Sidebar from '../../component/Sidebar/Sidebar'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { useLocation } from 'react-router-dom'
import LikeButton from '../../component/LikeButton/LikeButton'

const Singlepost = () => {
    const location = useLocation();
    const path = location.pathname.split("/")[3]
    const [post, setPost] = useState({});
    const PF = "/images/"

    useEffect(() => {
        const getPosts = async () => {
            const res = await axios.get("/api/posts/" + path)
            setPost(res.data)
        }
        getPosts();
    }, [path])


    return (
        <div className='Singlepost'>
            <div className="postBody">
                <div className="blog-post">

                    <div className="featured-image">
                        <img src={PF + post.photo} alt="" />
                    </div>
                    <div className="blog-title">
                        <h1>{post.title}</h1>
                        <p>{post.category}</p>
                    </div>
                    <div className="blog-body">
                        <p>
                            {post.desc}
                        </p>
                    </div>
                    <div className="meta-tags">
                        <div className="tags">
                            <div className="author">
                                {post.username}
                            </div>
                            <div className="date">
                                {new Date(post.createdAt).toDateString()}
                            </div>
                        </div>
                        <div className="like">
                            <LikeButton />
                        </div>
                    </div>
                </div>
                <div className="sidebar">
                    <Sidebar />
                </div>
            </div>
        </div>
    )
}

export default Singlepost;