import { useEffect } from "react";
import { useState } from "react";

import { useCookies } from "react-cookie"



export default function LoginComponent() {
    const [cookies, setCookie, removeCookie] = useCookies(['username']);
    const [userdetails, setUserdetails] = useState({ userName: '', Password: '' });

    function HandleUderName(e) {
        setUserdetails({
            userName: e.target.value,
            Password: userdetails.Password
        })
    }
    function HandlePassword(e) {
        setUserdetails({
            userName: userdetails.userName,
            Password: e.target.value
        })
    }
    function HandleLogin(e) {
        setCookie('username', userdetails.userName, { path: '/',expires:new Date("2023-05-11") });
        alert('Cookie Created')
    }
    useEffect(() => {
        if (cookies.username == undefined) {
            //logic for redirection to login page

        } else {
            //logic for redirection to success page.
            // location.href = "http://www.amazon.in";
        }
    }, []);
    function HandleSignout() {
        removeCookie('username');
    }
    return (
        <div className="container-fluid">
            <h2>User Login -  {cookies.username} - 
                <button className="" onClick={HandleSignout}>Sign-Out</button></h2>
            <dl>
                <dt>User Name</dt>
                <dd><input type="text" onChange={HandleUderName}></input></dd>
                <dt>Password</dt>
                <dd><input type="password" onChange={HandlePassword} /></dd>
            </dl>
            <button className="btn btn-primary" onClick={HandleLogin}>Login</button>

        </div>
    )
}
