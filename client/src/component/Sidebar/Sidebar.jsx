import React from 'react'
import '../Sidebar/Sidebar.scss'
import { MdOutlineSearch } from 'react-icons/md'
import image from '../../Resoources/image.jpg'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'


const Sidebar = () => {
    const [cats, setCats] = useState([])

    useEffect(() => {
        const fetchCats = async () => {
            const res = await axios.get("/api/categories")
            setCats(res.data.sort((a, b) => (a.data > b.data) ? 1 : -1))
        }
        fetchCats();
    })

    return (
        <div className='Sidebar'>
            <div className="mid-sidebar">
                {/* <div className="search">
                    <input type="text" />
                    <MdOutlineSearch id='sea' />
                </div> */}
            </div>
            <div className="bottom-sidebar">
                <div className="title">Featured Categories</div>
                <div className="categories">
                    {cats.map((c) => (
                        <Link to={`/categories/${c.name}/?cat=${c.name}`}>{c.name}</Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Sidebar;