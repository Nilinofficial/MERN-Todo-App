import React from 'react';
import { useDispatch } from 'react-redux';
import { addTodo,updateTodo} from '../../store/actions/todoActions';
import "./AddTodo.css";




function AddTodo({todoData,setTodoData}) {
    const dispatch =  useDispatch()
  
     const handleSubmit = (e) => {
          e.preventDefault()

          if(todoData._id){

             const id= todoData._id

             const updatedTodo = {
               name:todoData.name,
               isComplete:todoData.isComplete,
               date:todoData.date,
               author :todoData.author,
               uid:todoData.uid
             }
            dispatch(updateTodo(updatedTodo,id))
          }
          else{
             const newTodoData = {
               ...todoData,
               date: new Date()
             }
            dispatch(addTodo(newTodoData))   
          }

         
          setTodoData({
              name:"",
              isComplete:false
          })
     }

        


  return (
    <form className='addtodo' onSubmit={handleSubmit}>
    <input type="text" 
    placeholder='Enter the todo...'
    value={todoData.name}
    onChange={(e) => setTodoData({...todoData,name:e.target.value})}
    />
    <button type='submit'>Add Todo</button>
    </form>
  )
}

export default AddTodo