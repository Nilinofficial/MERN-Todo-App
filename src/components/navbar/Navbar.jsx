import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import "./Navbar.css"
import { signOut } from '../../store/actions/authActions'
function Navbar() {
  let navigate = useNavigate();
  const dispatch = useDispatch()
  const auth = useSelector((state) => state.auth)

  const logOut = () => {
    dispatch(signOut())
   navigate("../signin", { replace: true });
    

  }
  const signIn = () => {
    navigate("../signin", { replace: true });

 }
 const signUp = () => {
  navigate("../signup", { replace: true });

}



  return (
    <div className='navbar'>
       
     <div className="navbar_left">
       Todo App
     </div>
     <div className="navbar_middle">
       Logged in as Nilin
     </div>
 
       

     <div className="navbar_right">
     {
          auth.id? 
          (<button
           onClick={() => logOut()}>
             
            Sign Out
            </button>) :

           (   <div className='navbar__login'>
          <button onClick={() => signIn()}>Sign In</button>
          <button onClick={() => signUp()}>Sign Up</button>
          </div>)
        }
        
     </div>
 
    </div>
  )
}

export default Navbar