import React from "react";
import {useDispatch} from "react-redux";
import authServices from "../../AppWrite/auth";
import {logout} from "../../store/authSlice"; 

function LogoutBtn() { 
    const dispatch = useDispatch(); 
    const handleLogout = async () => {
        await authServices.logout();
        dispatch(logout());
    }
    return (
        <div>
        <h1>Header</h1>
        <button>Logout</button>
        </div>
    );
    } 

export default LogoutBtn;  