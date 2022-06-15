import React, {  useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { signUp } from '../../store/actions/authActions'
import "./Signup.css"
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';



function Signup() {


  let navigate = useNavigate();
  const dispatch = useDispatch()
  const auth = useSelector((state) => state.auth)

  useEffect(() => {
    console.log(auth.id);
    if(auth.id)
      return navigate("../", { replace: true });

  },[auth,navigate])

  const createUser = (e) => {
    e.preventDefault()

    dispatch(signUp(user))
    setUser({
    name: "",
    email: "",
    password :""
  })
  }



  const [user,setUser] =  useState({
    name: "",
    email: "",
    password :""
  })



  return (
    <div className='signup'>
        
    <form onSubmit={createUser} className='signup__form'>
    Sign Up
        <input value={user.name} onChange= {(e) => setUser({...user,name:e.target.value}) } placeholder='enter the username' type="text" />
        <input value={user.email} onChange={(e) =>setUser({...user,email:e.target.value}) }  placeholder='enter the email' type="email" />
        <input value={user.password} onChange={(e) => setUser({...user,password:e.target.value}) } placeholder='enter the password' type="password" />
        <button
       type='submit'
        >sign up</button>
   
    </form>
    
    </div>
  )
}

export default Signup