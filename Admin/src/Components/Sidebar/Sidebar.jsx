import '../Sidebar/Sidebar.scss'
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { MdOutlineDashboard, MdEmail, MdLogout, MdSettingsSystemDaydream, MdSettings } from 'react-icons/md'
import { BsFilePost, BsBroadcastPin } from 'react-icons/bs'
import { IoStatsChartSharp } from 'react-icons/io5'
import { TbCalendarStats } from 'react-icons/tb'
import { RiNotification2Fill } from 'react-icons/ri'
import { FaUser } from 'react-icons/fa'
import { CgProfile } from 'react-icons/cg'
import { BiCategory } from 'react-icons/bi'
import { useContext } from "react";
import { Context } from "../../context/Context";

const activeTab = { borderColor: "#6262ff", borderWidth: "1px", borderStyle: "solid", color: "white" }

export default function Sidebar() {

    const [active, setActive] = useState(activeTab)
    const {user, dispatch} = useContext(Context);

    const handleLogout = () => {
        dispatch({type: "LOGOUT"})
        window.location.replace("/login");
    }

    return (
        <div className="Sidebar">
            <div className="heading">
                <h1>WordPortraits</h1>
            </div>
            <p className="tag">MAIN</p>
            <div className="tab">
                <MdOutlineDashboard className="resize" />
                <Link to="/">  Dashboard </Link>
            </div>
            <p>LISTS</p>
            <div className="tab">
                <FaUser className="resize" />
                <Link to="/users"> Users</Link>
            </div>
            <div className="tab">
                <BsFilePost className="resize" />
                <Link to="/blogposts"> Blog Posts</Link>
            </div>
            <div className="tab">
                <BiCategory className="resize" />
                <Link to="/categories"> Categories</Link>
            </div>
            <p>USEFUL</p>
            <div className="tab">
                <IoStatsChartSharp className="resize" />
                <Link to="/"> Stats</Link>
            </div>
            <div className="tab">
                <RiNotification2Fill className="resize" />
                <Link to="/"> Notifications</Link>
            </div>
            <p>SERVICE</p>
            <div className="tab">
                <MdSettingsSystemDaydream className="resize" />
                <Link to="/"> System Health</Link>
            </div>
            <div className="tab">
                <TbCalendarStats className="resize" />
                <Link to="/"> Logs</Link>
            </div>
            <div className="tab">
                <MdSettings className="resize" />
                <Link to="/">Settings</Link>
            </div>
            <p>USER</p>
            <div className="tab">
                <CgProfile className="resize" />
                <Link to="/">Profile</Link>
            </div>
            <div className="tab">
                <MdLogout className="resize" />
                <li onClick={handleLogout}>{user && "LOGOUT"}</li>
            </div>
        </div>
    )
}
