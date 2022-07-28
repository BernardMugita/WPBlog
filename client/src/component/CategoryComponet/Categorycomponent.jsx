import React from 'react'
import '../CategoryComponet/Categorycomponent.scss'
import character from '../../Resoources/character.jpg'
import { Link } from 'react-router-dom'

const Categorycomponent = () => {
  return (
    <div className='Categorycomponent'>
        <div className="featured-image">
            <img src={character} alt="" />
        </div>
        <div className="category-details">
            <div className="categoryname"><Link to="/categories/categoryname">The Character Series</Link></div>
            <div className="author">Bernard Mugita</div>
            <div className="no-of-posts">5 posts</div>
        </div>
        <div className="overlay">
            
        </div>
    </div>
  )
}

export default Categorycomponent