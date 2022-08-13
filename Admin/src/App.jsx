import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import { useState } from 'react';
import styled from 'styled-components';
import Single from './Pages/single/Single';
import Login from './Pages/login/Login';
import List from './Pages/list/List'
import Home from './Pages/home/Home'
import Categories from './Pages/Categories/Caregories'
import Newpost from './Pages/Newpost/Newpost';
import BlogPosts from './Pages/blogposts/Blogposts';
import SinglePost from './Pages/singlepost/SinglePost'
import Register from './Pages/Register/Register';
import { useContext } from 'react';
import { Context } from './context/Context';
import UpdatePost from './Pages/UpdatePost/UpdatePost'


const Portal = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`

function App() {
  const {user} = useContext(Context);
  const [active, setActive] = useState("Dashboard");
  return (
    <Portal>
      <BrowserRouter>
        <Routes>
          <Route path='/'>
            <Route index element={user ? <Home /> : <Navigate to="/login" />}/>
            <Route path='login'>
                <Route index element={user ? <Home/> : <Login />} />
              </Route> 
            <Route exact path='users'>
              <Route index element={<List />} />
              <Route path=':userId' element={<Single />} />
            </Route>
            <Route exact path='blogposts'>
              <Route index element={<BlogPosts />} />
              <Route path=':userId' element={<SinglePost />} />
              <Route path='newpost' element={<Newpost />} title="Add New Product"/>
              <Route path='updatepost/:id' element={<UpdatePost />} title="Add New Product"/>
            </Route>
            <Route path='categories'>
              <Route index element={<Categories />} />
            </Route>
            <Route path='register'>
              <Route index element={user ? < Home/> : <Register />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </Portal>
  );
}

export default App;
