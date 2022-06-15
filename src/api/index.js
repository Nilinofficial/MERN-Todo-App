export const url = "https://nilin-node-todo.herokuapp.com/api";

export const setHeaders = () => {
    const header = {
        headers :{
            "x-auth-token" : localStorage.getItem("token")
        }
    }

    return header
}

