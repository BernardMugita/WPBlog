import React from 'react'
import '../Singlecategory/Singlecategory.scss'
import { Link } from 'react-router-dom'
import Blogpost from '../../component/BlogPost/Blogpost'

const Singlecategory = () => {
  return (
    <div className='Single-category'>
        <div className="routes">
            <Link to="/"><p>Home</p></Link>
            <p>/</p>
            <Link to="/categories"><p>Categories</p></Link>
            <p>/</p>
            <Link to="/categories/categoryname"><p>The Character Series</p></Link>
        </div>

        <div className="title">The Character Series</div>
        <div className="single-category-body">
            <Blogpost />
            <Blogpost />
        </div>

    </div>
  )
}

export default Singlecategory;