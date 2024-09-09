import React from 'react'
import { Link } from 'react-router-dom'
const Login = () => {
  return (
    <div className='form_container'>
    <div className="container">
        <h1>Login</h1>
    <form action="">
        
        <div className="form-content">
        <label>Email</label>
        <input type="email" name='email' autoFocus placeholder='enter your email' />
        </div>
        <div className="form-content">
        <label>Password</label>
        <input type="password" name='password' autoFocus placeholder='enter your password' />
        </div>
        <button type='submit'>Login</button>
    </form>
        <p>Don't have an account?
            <Link to="/signup" >Signup</Link>
        </p>
    </div>
  
</div>
  )
}

export default Login
