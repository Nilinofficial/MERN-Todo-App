import React from 'react';
import "./ListTodo.css";
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { deleteTodo } from '../../store/actions/todoActions';

function ListTodos({todo,setTodoData}) {


const dispatch = useDispatch()

const handleUpdate = () => {
  
setTodoData(todo)
window.scrollTo({
  top:0,
  bottom:0,
  behavior:'smooth'
})
}

const handleDelete = () => {
  const id = todo._id
  dispatch(deleteTodo(id))
}


  return (
    <div className='todos'>
    
        

        <div className="todo">
       
              <div  key={todo.name} className="todo_details">
              <p>Todo : {todo.name}</p>
               <p>Author :{todo.author} </p>
                <p>Added : {moment(todo.date).fromNow()} </p>
              </div>
            
         
          

            <div className="todo_options">

                 {/* {todo.isComplete ?<button style={{backgroundColor:"green",color:'white'}}>done</button> : 
                 <button style={{backgroundColor : "red",color:'white'}}>done</button> } */}

            
                <button onClick={() =>  handleUpdate()}>edit</button>
                <button  onClick= { () => handleDelete()}>delete</button>
              
            </div>
          
        </div>
        
        </div>
  )
}

export default ListTodos