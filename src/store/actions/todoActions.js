 import axios from "axios";
 import {url,setHeaders} from "../../api"
import { toast } from "react-toastify";

 export const getTodos = () => {
     return (dispatch) => {
        axios.get(`${url}/todos`,setHeaders())
        .then(todos => {
             dispatch({
                 type:"GET_TODOS",
                 todos
             })
            }).catch(err => {
                console.log(err.response);
                // toast.error(err.response?.data,{position:toast.POSITION.BOTTOM_RIGHT})
        })
     }
 }


 export const addTodo = (todo) => {
      return (dispatch,getState) => {
        const author  = getState().auth.name 
        const uid = getState().auth.id

        axios.post(`${url}/todos`,{...todo,author,uid},setHeaders())
        .then(todo => {
            dispatch({
                type:"ADD_TODO",
                todo
            })
        }).catch(err => {
            console.log(err.message);
            toast.error(err.response?.data,{position:toast.POSITION.BOTTOM_RIGHT})
        })
      }
 }

 export const updateTodo = (updatedTodo,id) => {
     return (dispatch) => {
          axios.put(`${url}/todos/${id}`,updatedTodo,setHeaders())
          .then((todo) => {
               dispatch({
                   type : "UPDATE_TODO",
                   todo
               })
          }).catch(err =>{
            console.log(err.message);
            toast.error(err.response?.data,{position:toast.POSITION.BOTTOM_RIGHT})
       }) 
     }
 }

 export const deleteTodo = (id) => {
   return (dispatch) => {
        axios.delete(`${url}/todos/${id}`,setHeaders())
        .then((todo) =>
        dispatch({
            type:"DELETE_TODO",
            id
        })).catch((err) => {
            console.log(err.message);
            toast.error(err.response?.data,{position:toast.POSITION.BOTTOM_RIGHT})
        })
   }
 }