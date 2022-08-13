import React from 'react'
import '../Register/Register.scss'
import { MdOutlineUpload } from 'react-icons/md'
import { useState } from 'react'
import profimg from '../../images/prof.jpeg'
import axios from 'axios'

const Register = () => {
    const [file, setFile] = useState("")

    const [profilePic, setProfilePic] = useState("")
    const [fullname, setFullName] = useState("");
    const [username, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [telephone, setTelephone] = useState("");
    const [country, setCountry] = useState("");
    const [password, setPassword] = useState("");

    const [error, setError] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("/api/auth/register", {
                profilePic, fullname, username, email, address, telephone, country, password,
            });
            res.data && window.location.replace("/login")
        } catch (err) {

        }
    }


    return (
        <div className='Register'>
            <div className="register-form">
                <div className="form-title">
                    <h1>Register User</h1>
                </div>
                <div className="form-body">
                    <form onSubmit={handleSubmit}>
                        <div className="form-item">
                            <img src={file
                                ? URL.createObjectURL(file)
                                : profimg} alt="" 
                                onChange={e => setProfilePic(e.target.value)}
                                />
                        </div>
                        <div className="form-item">
                            <label htmlFor="">Profile Picture</label>
                            <label id="file">
                                <MdOutlineUpload id='file' className='file'/>
                                <input type="file" id='file' 
                                    onChange={e => setFile(e.target.files[0])} 
                                    style={{ fontSize: "0.9rem", display: "none" }} />
                            </label>
                        </div>
                        <div className="form-item">
                            <label htmlFor="fullname">Full Name</label>
                            <input type="text" onChange={e => setFullName(e.target.value)}/>
                        </div>
                        <div className="form-item">
                            <label htmlFor="username">Username</label>
                            <input type="text" onChange={e => setUserName(e.target.value)}/>
                        </div>
                        <div className="form-item">
                            <label htmlFor="email">Email</label>
                            <input type="text" onChange={e => setEmail(e.target.value)}/>
                        </div>
                        <div className="form-item">
                            <label htmlFor="">Address</label>
                            <input type="text" onChange={e => setAddress(e.target.value)}/>
                        </div>
                        <div className="form-item">
                            <label htmlFor="">Telephone</label>
                            <input type="text" onChange={e => setTelephone(e.target.value)}/>
                        </div>
                        <div className="form-item">
                            <label htmlFor="">Country</label>
                            <input type="text" onChange={e => setCountry(e.target.value)}/>
                        </div>
                        <div className="form-item">
                            <label htmlFor="">Password</label>
                            <input type="password" onChange={e => setPassword(e.target.value)}/>
                        </div>
                        <button type='submit'>Register</button>
                        {error && <span style={{color:"red", marginTop:"2rem"}}>Something went Wrong</span>}
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register