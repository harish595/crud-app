import React from 'react'
import { useParams, useSearchParams } from 'react-router-dom'

const Users = () => {
    const {userId} = useParams();
    const [searchParams,setSearchParams] =useSearchParams();
  const showActiveUsers = searchParams.get('filter')==='active'
    return (
    <div>
        <h1>user1</h1>
        <h1>user2</h1>
        <h1>user3</h1>
<h1>{userId}</h1>

<button onClick={()=>setSearchParams({filter:'active'})}>Active users</button>
<button onClick={()=>setSearchParams({})}>Reset filter</button>
    {showActiveUsers?(<h2>Showing active users</h2>):(<h2>Showing all users</h2>)}
    </div>
  )
}

export default Users