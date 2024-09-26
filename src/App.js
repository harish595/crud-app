import React from 'react'
import {BrowserRouter , Routes , Route} from "react-router-dom"
import Home from './crud/Home'
import Create from './crud/Create'
import Update from './crud/Update'
import Read from './crud/Read'
// import About from './components/About'
// import Navbar from './components/Navbar'
// import OrderSummary from './components/OrderSummary'
// import NoMatch from './components/NoMatch'
// import Products from './components/Products'
// import FeatureProducts from './components/FeatureProducts'
// import NewProducts from './components/NewProducts'
// import Users from './components/Users'
// import Profile from './components/Profile'
// import { AuthProvider } from './components/auth'
// import Login from './components/Login'
// import RequireAuth from './components/RequireAuth'
// import FormValidate from './formvalidat/FormValidate'
// import AsyncFetchApi from './AsyncFetchApi'
// const LazyAbout = React.lazy(()=>import("./components/About"));

const App = () => {
  return (
  //   <BrowserRouter>
  //  <AuthProvider>
  //  <Navbar/>
  //   <Routes>
  //     <Route path='/' element={<Home/>}/>
  //     {/* <Route path='about' element={<About/>}/> */}
  //     <Route path='about' element={<React.Suspense fallback={<div>Loading...</div>}><LazyAbout/></React.Suspense>}/>
  //     <Route path='order-summary' element={<OrderSummary/>}/>
  //     <Route path='products' element={<Products/>}>
  //     <Route index element={<FeatureProducts/>}/>
  //     <Route path='feature-products' element={<FeatureProducts/>}/>
  //     <Route path='new-products' element={<NewProducts/>}/>
  //     </Route>
  //     <Route path='users/:userId' element={<Users/>}/>
  //     <Route path='profile' element={<RequireAuth><Profile/></RequireAuth>}/>
  //     <Route path='login' element={<Login/>}/>
  //     <Route path='*' element={<NoMatch/>}/>
  //   </Routes>

  //  </AuthProvider>
  //   </BrowserRouter>
  // <div>
    // {/* <FormValidate/> */}
    // {/* <AsyncFetchApi/> */}
  // </div>
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/create' element={<Create/>}/>
    <Route path='/update/:id' element={<Update/>}/>
    <Route path='/read/:id' element={<Read/>}/>

  </Routes>
  </BrowserRouter>
  )
}

export default App


// What is Route
// installation
// imports browserrouter , routes , route
//Link , Outlet , path , element
