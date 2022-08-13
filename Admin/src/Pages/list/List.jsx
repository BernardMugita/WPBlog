import React from 'react'
import '../list/List.scss'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Navbar from '../../Components/Navbar/Navbar'
import Datatable from '../../Components/Datatable/Datatable'
import { Link } from 'react-router-dom'
import UserComponent from '../../Components/userComponent/userComponent'
import { useState, useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components'

const Users = styled.div`
  
`

const List = () => {
  const [users, setUsers] = useState([{}])

  useEffect(() => {
    const getUsers = async () => {
      const res = await axios.get("/api/users")
      setUsers(res.data)
    }
    getUsers()
  }, [])

  return (
    <div className='List'>
      <div className="sidebar">
        <Sidebar />
      </div>

      <div className="list-component">
        <div className="navbar">
          <Navbar />
        </div>
        <div className="data-table">
          <div className="datatableTitle">
            Manage Users
          </div>
          <div users={users}>
            {users.map((u) => (
              <UserComponent user={u} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default List;