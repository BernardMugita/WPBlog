import React from 'react'
import { MdArrowUpward, MdPersonOutline, MdOutlineAccountBalanceWallet, MdRemoveRedEye, MdOutlineMonetizationOn } from 'react-icons/md'
import { BsFilePost, BsHeartFill } from 'react-icons/bs'
import { TbUserPlus } from 'react-icons/tb'
import '../Widget/Widget.scss'

const Widget = ({ type }) => {
    let data;

    const amount = 25;
    const diff = 20;

    switch (type) {
        case "users":
            data = {
                title: "POSTS",
                isMoney: false,
                link: "See all blog posts",
                icon: <BsFilePost className='icon' style={{color:"blue", backgroundColor:"#0011ff3d", borderRadius:"5px", padding:"0.3rem"}}/>,
            };
            break;

        case "orders":
            data = {
                title: "SUBSCRIBERS",
                isMoney: false,
                link: "View all followers",
                icon: <TbUserPlus className='icon' style={{color:"blue", backgroundColor:"#0011ff3d", borderRadius:"5px", padding:"0.3rem"}}/>,
            };
            break;

        case "earnings":
            data = {
                title: "VISITORS",
                isMoney: false,
                link: "View all likes",
                icon: <BsHeartFill className='icon' style={{color:"blue", backgroundColor:"#0011ff3d", borderRadius:"5px", padding:"0.3rem"}}/>,
            };
            break;

        case "balance":
            data = {
                title: "VIEWS",
                isMoney: false,
                link: "Browse views",
                icon: <MdRemoveRedEye className='icon' style={{color:"blue", backgroundColor:"#0011ff3d", borderRadius:"5px", padding:"0.3rem"}}/>,
            };
            break;
        default:
            break;
    }

    return (
        <div className='Widget'>
            <div className="left">
                <span className="title">{data.title}</span>
                <span className="id">{data.id}</span>
                <span className="counter">{data.isMoney && "$"} {amount}</span>
                <span className="link">{data.link}</span>
            </div>
            <div className="right">                
                {data.icon}
            </div>
        </div>
    )
}

export default Widget