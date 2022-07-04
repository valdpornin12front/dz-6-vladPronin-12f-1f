import React from "react";
import { useDispatch, useSelector } from "react-redux";
import UsersList from "../../components/userssList/UsersList";
import { addUser, handlelName , clearUser} from "../../store/usersSlice";

function UsersPage(props) {

    const dispatch = useDispatch();
    const name =useSelector(state => state.usersReducer.name)
    const users =useSelector(state => state.usersReducer.users)

    const handlelNameFunc =(e) => {
        dispatch(handlelName(e.target.value))


    }

    const addUserFunc =() =>{
        dispatch(addUser(name))

        
    }
    const clearUserFunc =() =>{
        dispatch(clearUser())

        
    }


    return(
        <div>
        <div>
        <input 
            type="text"
            onChange={handlelNameFunc}
            value={name}
        />

        <button onClick={addUserFunc}>create User</button>
        <button onClick={clearUserFunc}>clear User</button>

           </div>
           <UsersList users={users}/> 

        </div>

    )
}

export default UsersPage;