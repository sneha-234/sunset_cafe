// eslint-disable-next-line no-unused-vars
import React from 'react'
import Home from './home'
import Menu from './menu'
import ContactUs from './contactUs'
import Blog from './blog'
import SignIn from './signin'
import Login from './login'
import {BrowserRouter, Routes ,Route} from "react-router-dom"
import Footer from './compnents/footer'
import ForgetPassword from './forgetpassword'


function App() {
  return (
    <div >
     <BrowserRouter>
   
     <Routes>
        <Route path="/" element ={<Home/>} />
        <Route path="/menu" element ={<Menu/>} />
        <Route path="/contactus" element ={<ContactUs/>} />
        <Route path="/blog" element ={<Blog/>} />
        <Route path="/signIn" element ={<SignIn/>} />
        <Route path="/login" element ={<Login/>} />
        <Route path="/forgetpassword" element={<ForgetPassword/>} />

      </Routes>
      <Footer/>
      </BrowserRouter>

    </div>
  )
}

export default App
