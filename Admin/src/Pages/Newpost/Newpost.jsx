import React, { useEffect } from 'react'
import '../Newpost/Newpost.scss'
import postimg from '../../images/no-image.jpg'
import Navbar from '../../Components/Navbar/Navbar'
import Sidebar from '../../Components/Sidebar/Sidebar'
import { MdOutlineUpload } from 'react-icons/md'
import { useState } from 'react'
import axios from 'axios'
import { useContext } from 'react'
import { Context } from '../../context/Context'

const Newpost = () => {

    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")
    const [file, setFile] = useState("");
    const { user } = useContext(Context)
    const [cats, setCats] = useState([{}]);
    const [category, setCategory] = useState();
    const [name, setName] = useState({})
    const [error, setError] = useState(false)


    useEffect(() => {
        const fetchCats = async () => {
            const res = await axios.get("/api/categories")
            setCats(res.data)
        }
        fetchCats()
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newPost = {
            username: user.username,
            title,
            desc,
            category,
        };
        if (file) {
            const data = new FormData();
            const filename = Date.now() + file.name;
            data.append("name", filename);
            data.append("file", file);
            newPost.photo = filename;
            try {
                await axios.post("/api/upload", data)
            } catch (err) { }
        }
        try {
            const res = await axios.post("/api/posts", newPost)
            window.location.replace("/blogposts/" + res.data._id);

        } catch (error) {

        }
    }

    const handleCreate = async (e) => {
        try {
            const res = await axios.post("/api/categories", {
                name,
            })
            setName(res.data)
       } catch (err) {
       }
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
                <form className="create-post" onSubmit={handleSubmit}>
                    <div className="type-post">
                        <div className="image-container">
                            {file && (
                                <img src={file
                                    ? URL.createObjectURL(file)
                                    : postimg} alt="" />
                            )}
                        </div>
                        <div className="title-container">
                            <input type="text" name="" placeholder="Title" onChange={e => setTitle(e.target.value)} />
                            <label id="file">
                                <MdOutlineUpload id='file' className='file' />
                                <input type="file" id='file' onChange={e => setFile(e.target.files[0])} style={{ fontSize: "0.9rem", display: "none" }} />
                            </label>
                        </div>
                        <div className="post-body">
                            <textarea name="" id="" cols="30" rows="10" placeholder='Share your thoughts...' onChange={e => setDesc(e.target.value)}></textarea>
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
                                <button className="save-draft">Save Draft</button>
                                <button className="publish" type='submit'>Publish Post</button>
                                <button className="discard">Discard</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default Newpost