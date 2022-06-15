import { BrowserRouter as Router, Route,Routes } from "react-router-dom";
import './App.css';
import Signin from "./components/auth/Signin";
import Signup from "./components/auth/Signup";
import Navbar from "./components/navbar/Navbar"
import Todos from "./components/todos/Todos"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadUser } from "./store/actions/authActions";

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
   dispatch(loadUser())
  },[dispatch])

  return (
    <div className="app">

      <Router>
        <ToastContainer/>
     <Navbar/>
     <Routes>
     
        <Route path="/" element={<Todos />} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/signin" element={<Signin/>} />
      </Routes>
      </Router>
    </div>
  );
}

export default App;
