import React from 'react'
import '../CategoryComponet/Categorycomponent.scss'
import character from '../../Resoources/character.jpg'
import { Link } from 'react-router-dom'
import { MdOutlineCategory } from 'react-icons/md'

const Categorycomponent = ({category}) => {
  return (
    <div className='Categorycomponent'>
        <div className="featured-image">
              <MdOutlineCategory id='cat'/>
        </div>
        <div className="category-details">
            <div className="categoryname"><Link to={`/categories/${category.name}/?cat=${category.name}`}>{category.name}</Link></div>
            <div className="author">{new Date(category.createdAt).toDateString()}</div>
            <div className="no-of-posts"></div>
        </div>
    </div>
  )
}

export default Categorycomponent