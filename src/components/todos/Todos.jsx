import React,{useEffect,useState} from 'react'
import AddTodo from './AddTodo'
import ListTodos from './ListTodos'
import {useDispatch,useSelector} from 'react-redux'
import { getTodos } from '../../store/actions/todoActions';
import { useNavigate } from 'react-router-dom';

function Todos() {
 
  let navigate = useNavigate()
  const auth = useSelector((state) => state.auth)

  useEffect(() => {
  if(!auth.id)  return navigate("../signup", { replace: true });
  },[])

  const [todoData,setTodoData] =  useState ({
    name :"",
    isComplete : false
})



  const dispatch =  useDispatch()
  const todos = useSelector((state) => state.todos)
   
  
  useEffect(() => {
    dispatch(getTodos())
  },[dispatch])
  
  

  return (
    <div>
        <AddTodo todoData={todoData} setTodoData={setTodoData}/>


        {
          todos.map((todo) => {
            return(
              <ListTodos 
              todo={todo} 
              key={todo._id}
             setTodoData= {setTodoData}
              />
            )
          })
        }
       

    </div>
  )
}

export default Todos