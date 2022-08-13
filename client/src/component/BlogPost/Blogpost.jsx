import React from 'react'
import '../BlogPost/Blogpost.scss'
import postimg from '../../Resoources/postimg.jpg'
import { Link } from 'react-router-dom'

const Blogpost = ({ post }) => {
    const PF = "/images/"

    return (
        <div className='Blogpost'>
            <div className="featured-image">
                <img src={PF + post.photo} alt="" />
            </div>

            <div className="blog-post">
                <div className="category-container">
                    <p>{post.category}</p>
                </div>
                <div className="title-container">
                    <h1>{post.title}</h1>
                </div>
                <div className="post-container">
                    <p>
                        {post.desc}
                    </p>
                </div>
                <Link to={`/categories/:category/${post._id}`}>...continue reading</Link>
                <div className="meta-tags">
                    <div className="tags">
                        <div className="date">{new Date(post.createdAt).toDateString()}</div>
                        |
                        <div className="author">{post.username}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blogpost