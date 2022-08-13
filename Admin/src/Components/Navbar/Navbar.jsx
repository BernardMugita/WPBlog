import styled from "styled-components";
import './Navbar.scss'
import React from 'react'
import image from '../../images/index.jpeg'
import { MdOutlineLanguage, MdOutlineFullscreen, MdOutlineNotificationsActive, MdOutlineChatBubble, MdOutlineList, MdOutlineSearch, MdReorder, MdOutlineClose } from 'react-icons/md'
import { useContext } from "react";
import { Context } from "../../context/Context";
import Sidebar from "../Sidebar/Sidebar";
import { useState } from "react";


const Navbar = () => {
    const {user} = useContext(Context);
    const [show, setShow ] = useState(false);
    return (
        <div className="container">
            <div className="site-search">
                <input type="text" placeholder="Search..." />
                <MdOutlineSearch id="search" />
            </div>
            <div className="side-bar">
                <MdReorder onClick={() => setShow(!show)}/>
                {
                    show ?
                    <div className="side">
                        <MdOutlineClose id="close" onClick={() => setShow(false)}/>
                        <Sidebar id="side"/>
                    </div>: null
                }
            </div>
            <div className="site-items">
                <div className="item">
                    <div className="items">
                        <MdOutlineLanguage />
                        <h3>English</h3>
                    </div>
                    <div className="items">
                        <MdOutlineFullscreen />
                    </div>
                    <div className="items">
                        <MdOutlineNotificationsActive />
                        <div className="counter">1</div>
                    </div>
                    <div className="items">
                        <MdOutlineChatBubble />
                        <div className="counter">2</div>
                    </div>
                    <div className="items">
                        <MdOutlineList />
                    </div>
                    <div className="items">
                        <img src={user.profilePic} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;