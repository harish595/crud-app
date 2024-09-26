import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Create = () => {
    const navigate = useNavigate();
    const[values,setValues]=useState({
        name:'',
        email:'',
        phone:''
    })
    // console.log(values);
    let handleSubmit =e=>{
        e.preventDefault();
        axios.post("http://localhost:8000/users",values)
        .then(res=>{
            console.log(res);
            navigate("/")
        })
        .catch(err=>console.log(err))
    }

  return (
    <form  onSubmit={handleSubmit}>
    <h1>Login Form</h1>
    <div className="">
        <div className="field">
            <label>Name</label>
            <input
                type="text"
                name="name"
                placeholder="Username"
              value={values.name}
              onChange={e=>setValues({...values,name:e.target.value})}
            />
        </div>

        <div className="field">
            <label>Email</label>
            <input
                type="text"
                name="email"
                placeholder="Email"
                value={values.email}
                onChange={e=>setValues({...values,email:e.target.value})}
            />
        </div>

        <div className="field">
            <label>Phone</label>
            <input
                type="text"
                name="phone"
                placeholder="phone"
                value={values.phone}
                onChange={e=>setValues({...values,phone:e.target.value})}
            />
           
        </div>
        
       <input type="submit"/>
       <Link to='/'>Back</Link>
    </div>
</form>
  )
}

export default Create