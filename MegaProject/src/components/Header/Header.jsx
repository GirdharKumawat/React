import React from "react";
import {Container,LogoutBtn, Logo} from "../index";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Header() { 
    const authStatus  = useSelector((state)=>{state.auth.status});
    const navigate = useNavigate();
    const navItems = [
        {
            name: "Home",
            slug : "/",
            active: true
        },
        {
            name: "Login",
            slug : "/login",
            active: !authStatus
        },
        {
            name: "Signup",
            slug : "/signup",
            active: authStatus
        },
        {
            name : "All Post",
            slug : "/post",
            active:authStatus

        },
        {
            name:"Add Post",
            slug:"/add-post",
            active:authStatus
        },

    ]
    return (
       <header>
        <Container>
            <nav className="flex justify-between items-center py-4">
                <div className="flex items-center">
                    <Link to='/'>
                    <Logo/>
                    </Link>
                </div>
                <ul className="flex items-center">
                    {navItems.map((item,index)=>(
                        item.active ? 
                        <li key={item.name}>
                            <button
                            onClick={()=>navigate(item.slug)} 
                            >{item.name}</button>
                        </li>:
                        null
                           
                    ) )}

                    {authStatus && (
                        <li>
                            <LogoutBtn/>
                        </li>
                    )}
                </ul>
            </nav>
        </Container>
       </header>
    );
    } 
export default Header;  