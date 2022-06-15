import { toast } from "react-toastify";
import jwtDecode from 'jwt-decode';

const initialState = {
    token :localStorage.getItem("token"),
    name:null,
    email:null,
    _id:null

}

const authReducer = (state=initialState,action) => {
switch (action.type) {
    case "SIGN_IN" : 
    case "SIGN_UP":
        toast.success("Welcome User",{position:toast.POSITION.BOTTOM_RIGHT})
       const user = jwtDecode(action.token) 
        return {
            ...state,
        token:action.token,
        name:user.name,
        email:user.email,
        id:user._id
        }
 
        case "USER_LOADED" : 
        const existingUser = jwtDecode(action.token) 
        return {
            ...state,
        token:action.token,
        name:existingUser.name,
        email:existingUser.email,
        id:existingUser._id
        }
        case "SIGN_OUT" :
            localStorage.removeItem("token")
            toast("successfully logouted",{position:toast.POSITION.BOTTOM_RIGHT})
            return {
                token :null,
                name:null,
                email:null,
                _id:null
            }

    default:
       return state;
}
}


export default authReducer