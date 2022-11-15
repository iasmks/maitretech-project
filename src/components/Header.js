import { BsFillCartCheckFill  } from "react-icons/bs";
import { ImSpoonKnife } from 'react-icons/im'
import { Link, NavLink } from "react-router-dom";
import React,{useEffect} from 'react'
import { useState } from 'react';

const Header = ({cartItems}) =>{
    const [data, setData] = useState([])
    console.log(data)
    useEffect(() => {
        setData(JSON.parse(localStorage.getItem('signup')))
    },[])
    return(
        <>
           <header className="header_container">
                <div className="logo">
                    <NavLink to="/"><ImSpoonKnife/></NavLink>
                    <NavLink to="/"> Food's Restaurant</NavLink>
                </div>
                <div className="cart_png">
                    <Link className="link" to="/login">{`${data?.fullname !== undefined ? data?.fullname : "Log in"}`}</Link>
                    <NavLink to="/checkout"><BsFillCartCheckFill style={{color: 'white',fontSize: '24px'}}/> </NavLink>
                    {cartItems.length>0 && (<span>{cartItems.length}</span>)}
                </div>
           </header>
        </>
    )
}

export default Header