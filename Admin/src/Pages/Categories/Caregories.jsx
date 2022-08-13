import '../Categories/Categories.scss'
import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Categorycomponent from '../../Components/CategoryComponet/Categorycomponent'
import { useState, useEffect } from 'react'
import axios from 'axios'

const Caregories = () => {
    const [cats, setCats] = useState([{}]);

    useEffect(()=> {
        const getCats = async() => {
            const res = await axios.get("/api/categories")
            setCats(res.data)
        }
        getCats();
    }, [])
    
  return (
    <div className='Categories'>
        <div className="sidebar">
            <Sidebar />
        </div>
        <div className="category-component">
            <div className="navbar">
                <Navbar />
            </div>
            <div className="category-body" cats={cats}>
                {cats.map((c) => (
                <Categorycomponent cat={c}/>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Caregories