import React from 'react'
import '../Categories/Categories.scss'
import { Link } from 'react-router-dom'
import Categorycomponent from '../../component/CategoryComponet/Categorycomponent'
 
const Categories = () => {
  return (
    <div className='Categories'>
        <div className="routes">
            <Link to="/"><p>Home</p></Link>
            <p>/</p>
            <Link to="/categories"><p>Categories</p></Link>
        </div>

        <div className="title">Categories</div>
        <div className="category-body">
            <Categorycomponent/>
            <Categorycomponent/>
            <Categorycomponent/>
            <Categorycomponent/>
            <Categorycomponent/>
            <Categorycomponent/>
        </div>

    </div>
  )
}

export default Categories