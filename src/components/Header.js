import "../styles/header.css";
import React, { useEffect, useRef, useState } from "react";

export default function Header(){
    const [isloggedin, setLogin] = useState(true)
    const [isnotification, setNotification] = useState(true);
    const [user,setUser] = useState("");
    const [password, setPassword] = useState("");
    const notificationdiv = useRef(null);
    const logindiv = useRef(null)
    const [activenav, setNavState] = useState("hamburger");
    const [notifications, setNotificatoins] = useState([]);

    function closeSideNav(){
        document.getElementById("hamburger").classList.add("inactive");
        document.getElementById("burger_right").classList.remove("inactive");
        document.getElementById("side_content").classList.add("new_side_content");
    }

    function openSideNav(){
        document.getElementById("burger_right").classList.add("inactive")
        document.getElementById("hamburger").classList.remove("inactive")
        document.getElementById("side_content").classList.remove("new_side_content");
        
    }

    function openNotification(){
        notificationdiv.current.classList.toggle("notificationInactive");
    }

    function openLogin(){
        logindiv.current.classList.toggle("loginContainernew")
    }

    function login(){
        setLogin(true)
    }

    function logout(){
        setLogin(false)
    }
    
    return(
        <div className="content_header">
            <div className="header">
                <div className="hamburger" id="hamburger" onClick={closeSideNav}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-arrow-left-square-fill" viewBox="0 0 16 16">
                        <path d="M16 14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2zm-4.5-6.5H5.707l2.147-2.146a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708-.708L5.707 8.5H11.5a.5.5 0 0 0 0-1"/>
                    </svg>
                </div>
                <div className=" hamburger_right inactive" id="burger_right" onClick={openSideNav}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-arrow-right-square-fill" viewBox="0 0 16 16">
                        <path d="M0 14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2zm4.5-6.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5a.5.5 0 0 1 0-1"/>
                    </svg>
                </div>
                <div className="introName">
                    <h3 className="mb-0">Ubuntri</h3>
                </div>
            </div>
        
            <div className="profile_icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16" onClick={openLogin}>
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
                    <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
                </svg>
                <div className="position-relative">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-bell-fill" viewBox="0 0 16 16" onClick={openNotification}>
                        <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2m.995-14.901a1 1 0 1 0-1.99 0A5 5 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901"/>
                    </svg>
                    {isnotification &&
                        <div className="position-absolute top-0 end-0 bg-danger w-50 h-50 rounded-circle">
                        </div>
                    }
                </div>

                <div className="notificationContainer notificationInactive" ref={notificationdiv} id="notificationContainer">
                    <div className="notification">
                        <p>Failure Detected</p>
                    </div>
                    <div className="notification">
                        <p>Failure Detected</p>
                    </div>
                    <div className="notification">
                        <p>Failure Detected</p>
                    </div>
                    <div className="notification">
                        <p>Failure Detected</p>
                    </div>
                    <div className="notification">
                        <p>Failure Detected</p>
                    </div>
                </div>

                {!isloggedin &&
                    <div className="loginContainer loginContainernew" ref={logindiv}>
                        <form>
                            <label htmlFor="username">Username:</label>
                            <input 
                                id="username" 
                                type="text" 
                                className="username" 
                                value={user} 
                                onChange={(e) => setUser(e.target.value)} 
                            />
                            <label htmlFor="password">Password:</label>
                            <input 
                                id="password" 
                                type="password" 
                                className="password" 
                                value={password} 
                                onChange={(e) => setPassword(e.target.value)} 
                            />
                            <button type="submit" onClick={login}>Login</button>
                        </form>
                    </div>
                    
                }
                {
                    isloggedin && 
                    <div className="loginContainer loginContainernew" ref={logindiv}>
                        <h3>Anuj</h3>
                        <button onClick={logout}>Logout</button>
                    </div>
                }
            </div>
       
        </div>
    
    )
}