import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Home = () => {
    const [users,setUsers]=useState([]);
    const navigate = useNavigate();
    // console.log(users);
useEffect(()=>{
    axios.get("http://localhost:8000/users")
    .then(res=>setUsers(res.data))
    .catch(err=>console.log(err))
},[]);

//!delete
const handleDelete=id=>{
    const confirm = window.confirm("are you sure you want to delete");
    if(confirm){
        axios.delete("http://localhost:8000/users/"+id)
        .then(res=>{
            window.location.reload();
            navigate('/')
        }).catch(err=>console.log(err))
    }
}
  return (
    <div>
        <h1>List of users</h1>
        <div>
            <Link to='/create'>Add +</Link>
        </div>
        <table border="2">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map((user,i)=>{
                        return(
                            <tr key={i}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.phone}</td>
                                <td>
                                    <Link to={`/read/${user.id}`}>Read</Link>
                                    <Link to={`/update/${user.id}`}>Edit</Link>
                                    <button onClick={e=>handleDelete(user.id)}>Delete</button>
                                </td>

                            </tr>
                        )
                    })
                }
            </tbody>
        </table>

    </div>
  )
}

export default Home