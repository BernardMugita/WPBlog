import React from 'react'
import '../Categories/Categories.scss'
import { Link } from 'react-router-dom'
import Categorycomponent from '../../component/CategoryComponet/Categorycomponent'
import Sidebar from '../../component/Sidebar/Sidebar'
import { useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components'

const Components = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0.5rem;
  flex: 3;
`

const Categories = () => {

  const [categories, setCategories] = useState([{}])

  useEffect(() => {
    const fetchCategories = async () => {
      const res = await axios.get("/api/categories")
      setCategories(res.data.sort((a, b) => (a.data < b.data) ? 1 : -1))
    }
    fetchCategories()
  }, [])

  return (
    <div className='Categories'>
      <div className="title">Categories</div>
      <div className="category-body">
        <Components categories={categories}>
          {categories.map((c) => (
            <Categorycomponent category={c} />
          ))}
        </Components>
      </div>

    </div>
  )
}

export default Categories