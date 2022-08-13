import React from 'react'
import '../CategoryComponet/Categorycomponent.scss'
import { Link } from 'react-router-dom'
import { MdOutlineMoreVert } from 'react-icons/md'

const Categorycomponent = ({ cat }) => {
  return (
    <div className='Categorycomponent'>
      <div className="category-details">
        <MdOutlineMoreVert id='vert' />
        <div className="categoryname">{cat.name}</div>
        <div className="no-of-posts">5 posts</div>
        <div className="date">{new Date(cat.createdAt).toDateString()}</div>
      </div>
    </div>
  )
}

export default Categorycomponent