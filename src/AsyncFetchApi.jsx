// import axios from 'axios';
// import React, { useEffect, useState } from 'react'

// const AsyncFetchApi = () => {
//     const [state , setState] = useState([]);
//     console.log(state);
//     useEffect( ()=>{
//     //     return async ()=>{
//     //     const res = await axios.get("https://api.github.com/users");
//     //     // console.log(res.data);
//     //     setState(res.data);
//     // }
//     axios({
//         url:"https://api.github.com/users",
//         method:"GET",

//     }).then(res=>setState(res.data))
//     .catch(err=>console.log(err))
//     },[])
//   return (
//     <div>AsyncFetchApi

//         {state.map(val=>{
//             return  <li>{val.login}</li>
//         })}
//     </div>
//   )
// }

// export default AsyncFetchApi


