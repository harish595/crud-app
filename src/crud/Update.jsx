import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';

const Update = () => {
    //!update
    const[values,setValues]=useState({
        name:'',
        email:'',
        phone:''
    })
    //! read first on form
    // const [users,setUsers]=useState([]);
    const {id}=useParams();
    const navigate = useNavigate();
useEffect(()=>{
    axios.get("http://localhost:8000/users/"+id)
    .then(res=>setValues(res.data))
    .catch(err=>console.log(err))
},[]);

//!update

let handleSubmit=e=>{
    e.preventDefault();
    axios.put("http://localhost:8000/users/"+id,values)
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
        
       <input type="submit" value="Update"/>
       <Link to='/'>Back</Link>
    </div>
</form>
  )
}

export default Update