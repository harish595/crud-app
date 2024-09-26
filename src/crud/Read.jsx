import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

const Read = () => {
    const [users,setUsers]=useState([]);
    console.log(users);
    const {id}=useParams();
useEffect(()=>{
    axios.get("http://localhost:8000/users/"+id)
    .then(res=>setUsers(res.data))
    .catch(err=>console.log(err))
},[])
  return (
    <div>
        {
           <>
            <h1>{users.name}</h1>
            <h3>{users.email}</h3>
            <h3>{users.phone}</h3>
            <Link to='/'>Back</Link>
        <Link to={`/update/${users.id}`}>Update</Link>
           </>
        }
        
    </div>
  )
}

export default Read