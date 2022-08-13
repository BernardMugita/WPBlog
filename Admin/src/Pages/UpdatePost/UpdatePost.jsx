import React, { useEffect } from 'react'
import '../Newpost/Newpost.scss'
import postimg from '../../images/no-image.jpg'
import Navbar from '../../Components/Navbar/Navbar'
import Sidebar from '../../Components/Sidebar/Sidebar'
import { MdOutlineUpload } from 'react-icons/md'
import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import axios from 'axios'
import { useContext } from 'react'
import { Context } from '../../context/Context'

const UpdatePost = () => {

    const [file, setFile] = useState("");
    const { user } = useContext(Context)
    const [cats, setCats] = useState([{}]);
    const [category, setCategory] = useState();
    const [name, setName] = useState({})
    const [error, setError] = useState(false)
    const location = useLocation();
    const path = location.pathname.split("/")[3]
    const [post, setPost] = useState({});
    const [desc, setDesc ] = useState("")
    const [title, setTitle ] = useState("")
    const PF = "/images/"

    useEffect(() => {
        const fetchCats = async () => {
            const res = await axios.get("/api/categories")
            setCats(res.data)
        }
        fetchCats()
    });


    useEffect(() => {
        const getPosts = async () => {
            const res = await axios.get("/api/posts/" + path)
            setPost(res.data)
            setTitle(res.data.title)
            setDesc(res.data.desc)
        }
        getPosts();
    }, [path])

    const handleCreate = async (e) => {
        try {
            const res = await axios.post("/api/categories", {
                name,
            })
            setName(res.data)
        } catch (err) {
        }
    }

    const handleUpdate = async (e) => {
        try {
            await axios.put(`/api/posts/${post._id}`, {
              username: user.username,
              title,
              desc,
            });
            window.location.replace(`/blogposts/${post._id}`)
          } catch (err) {}
    }

    return (
        <div className='Newpost'>
            <div className="sidebar">
                <Sidebar />
            </div>
            <div className="newpost-component">
                <div className="navbar">
                    <Navbar />
                </div>
                <div className="create-post">
                    <div className="type-post">
                        <div className="image-container">
                            {post && (
                                <img src={PF + post.photo} alt=""/>
                            )}
                        </div>
                        <div className="title-container">
                            <input
                                type="text"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </div>
                        <div className="post-body">
                            <textarea
                                name=""
                                id=""
                                cols="30"
                                rows="10"
                                value={desc}
                                onChange={(e) => setDesc(e.target.value)}
                            ></textarea>
                        </div>
                    </div>
                    <div className="tool-box">
                        <div className="middle">
                            <div className="title">
                                <h2>Select category</h2>
                            </div>
                            <select value={category} onChange={e => setCategory(e.target.value)} id="" cats={cats}>
                                {cats.map((c) => (
                                    <option>{c.name}</option>
                                ))}
                            </select>
                            <div className="create-category">
                                <h2>Create new category</h2>
                                <div className="submit">
                                    <input type="text" placeholder='Add New' onChange={e => setName(e.target.value)} />
                                    <button className="add" type='send' onClick={handleCreate}>Create</button>
                                </div>
                            </div>
                        </div>
                        <div className="bottom">
                            <h2>Publish your post</h2>
                            <div className="publish-btns">
                                <button className="save-draft" onClick={handleUpdate}>Update</button>
                                <button className="publish" type='submit'>Publish Post</button>
                                <button className="discard">Discard</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default UpdatePost