import React, { useState, useEffect } from 'react'
import axios from 'axios'
import '../Table/Table.scss'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const List = () => {
  
    const [posts, setPosts] = useState([{}]);
    const PF = "/images/"

    useEffect(() => {
        const getPosts = async () => {
            const res = await axios.get("/api/posts/")
            setPosts(res.data)
        }
        getPosts();
    }, [])

    return (
        <TableContainer component={Paper} className="Table">
            <div className="listTitle">Blog Posts Stats</div>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead className='head'>
                    <TableRow>
                        <TableCell className="tableCell">Post Id</TableCell>
                        <TableCell className="tableCell">Title</TableCell>
                        <TableCell className="tableCell">Author</TableCell>
                        <TableCell className="tableCell">Date Created</TableCell>
                        <TableCell className="tableCell">Views</TableCell>
                        <TableCell className="tableCell">Likes</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {posts.map((p) => (
                        <TableRow key={p._id} className="table-row">
                            <TableCell className="tableCell">{p._id}</TableCell>
                            <TableCell className="tableCell">
                                    <div className="cellWrapper">
                                        <img src={PF + p.photo} alt="" className="image"/>
                                        {p.title}
                                    </div>
                                </TableCell>
                            <TableCell className="tableCell">{p.username}</TableCell>
                            <TableCell className="tableCell">{new Date(p.createdAt).toDateString()}</TableCell>

                            <TableCell className="tableCell">
                                
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default List