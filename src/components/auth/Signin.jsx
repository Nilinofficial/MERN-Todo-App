import React, { useEffect, useState  } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { signIn } from '../../store/actions/authActions'
import "./Signin.css"
import { useNavigate } from "react-router-dom";

function Signin() {
  let navigate = useNavigate();
  const dispatch = useDispatch()
  const auth = useSelector((state) => state.auth)

  useEffect(() => {
    console.log(auth.id);
    if(auth.id)
      return navigate("../", { replace: true });

  },[auth,navigate])

const loginUser = (e) => {
  e.preventDefault()
   dispatch(signIn(creds))
   setCreds({
    email: "",
    password :""
  })
  
}  

const [creds,setCreds] = useState({
  email:"",
  password: ""
})
  

  return (
    <div className='signin'>
    <form 
     onSubmit= {loginUser}
    className='signin__form'>
    Sign In
       
        <input 
        value={creds.email}
        onChange={(e) => setCreds({...creds,email:e.target.value})}
        placeholder='enter the email' type="email" />
        <input 
         value={creds.password}
         onChange={(e) => setCreds({...creds,password:e.target.value})}
        placeholder='enter the password' type="password" />
        <button type='submit'>sign in</button>
    </form>
    
    </div>
  )
}

export default Signin