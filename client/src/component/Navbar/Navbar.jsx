import React from 'react';
import { Link } from 'react-router-dom';
import "../../component/Navbar/Navbar.scss";
import { MdOutlineReorder, MdOutlineClose } from 'react-icons/md'
import { useState } from 'react';
import { GrFacebook, GrTwitter, GrInstagram, GrLinkedin } from 'react-icons/gr'

const Navbar = () => {
  const [show, setShow] = useState(false);

  setTimeout(() => {
      setShow(false)
  }, 4000)

  return (
    <div className='Navbar'>
      <div className="phone-bar">
        <h1>WordPortraits</h1>
        <MdOutlineReorder id="reorder" onClick={() => setShow(!show)} />
        {
          show ? <div className="drop">
            <div className="close">
              <MdOutlineClose id="close" onClick={() => setShow(false)} />
            </div>
            <Link to="/">Home</Link>
            <Link to="/categories">Categories</Link>
            <Link to="/contacts">Contact</Link>

            <div className="socials">
              <GrFacebook id='soc' />
              <GrTwitter id='soc' />
              <GrInstagram id='soc' />
              <GrLinkedin id='soc' />
            </div>
            <h1>WordPortraits</h1>
          </div> : null
        }
      </div>
      <div className="screen-bar">
        <div className="screen-links">
          <Link to="/">Home</Link>
          <Link to="/categories">Categories</Link>
          <Link to="/contacts">Contact</Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar;