import React, { useState } from 'react'
import { useAuth } from './auth';
import { useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
    const[user,setUser]=useState('');
    const auth= useAuth();
    const location = useLocation();
    let redirectPath= location.state?.path || '/' 
    let navigate =useNavigate();
    let handleLogin=()=>{
        auth.login(user);
        navigate(redirectPath)
    }
  return (
    <div>
       Username :  <input type="text" onChange={(e)=>setUser(e.target.value)}/>
    <button onClick={handleLogin}>Login</button>
    </div>
  )
}

export default Login