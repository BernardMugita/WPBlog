import React from 'react'
import '../BlogPost/Blogpost.scss'
import postimg from '../../Resoources/postimg.jpg'
import { Link } from 'react-router-dom'

const Blogpost = () => {
  return (
    <div className='Blogpost'>
        <div className="featured-image">
            <img src={postimg} alt="" />
        </div>

        <div className="blog-post">
            <div className="category-container">
                <p>The Character Series</p>
            </div>
            <div className="title-container">
                <h1>Trip</h1>
            </div>
            <div className="post-container">
                <p>
                Don't you think that its kinda funny how everything 
                you were told as a child like a warning, directive or 
                opinion ended up coming true? No matter how unbelievable 
                it might have sounded the first time it was said to you. 
                There is nothing new under the sun apparently. I let out 
                a labored cough trying to gain bearing of where I am or at
                <Link to="/category/categoryname/:id">Continue reading</Link>
                </p>
            </div>
            <div className="meta-tags">
                <div className="date">July 21,2022</div>
                |
                <div className="author">Bernard Mugita</div>
            </div>
        </div>
    </div>
  )
}

export default Blogpost