import React from "react"
import Header from "./components/Header"
import Sidenav from "./components/Sidenav"
import Installation from "./components/Installation" 
import Troubleshoot from "./components/Troubleshoot"
import Assistant from "./components/Assistant"
import { Route,Routes,Navigate } from "react-router-dom"
import "./app.css"

export default function App(){
    return(
        <>
            <Header />
            <Sidenav />
            <div className="routingContent">
                <Routes>
                    <Route path="/" Component={Assistant} />
                    <Route path="/installation" Component={Installation} />
                    <Route path="/troubleshoot" Component={Troubleshoot} />
                    <Route path="/main_window" Component={Assistant} />
                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>
            </div>
        </>
    )
}