import React from 'react'
import { useRef } from 'react'
import '../login/Login.scss'
import axios from 'axios'
import { useContext } from 'react'
import { Context } from '../../context/Context'

const Login = () => {

  const userRef = useRef();
  const passwordRef = useRef();
  const { dispatch, isFetching } = useContext(Context)

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/api/auth/login", {
        username: userRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE" });
    }
  }


  return (
    <div className='Login'>
      <div className="login-form">
        <div className="form-title">
          <h1>User Login</h1>
        </div>
        <div className="form-body">
          <form onSubmit={handleSubmit}>
            <div className="form-item">
              <label htmlFor="">Username</label>
              <input type="text" placeholder='Enter your Username' ref={userRef} />
            </div>
            <div className="form-item">
              <label htmlFor="">Password</label>
              <input type="password" placeholder='Enter your Password' ref={passwordRef} />
            </div>
            <button type='submit' disabled={isFetching}>Login</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login