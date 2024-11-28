import React, { useEffect, useState } from "react";
import "../styles/sidenav.css"
import logo from "../media/logo.png"
import instllation from "../media/install_icon.png"
import troubleshoot from "../media/troubleshoot.png"
import { Link } from "react-router-dom";

export default function Sidenav(){
    const [url, defineUrl] = useState("ubuntri_ai_asistant");
    function changeLocation(e){
        document.getElementById(url).classList.remove("navactive")
        defineUrl(e)
    }

    useEffect(()=>{
        document.getElementById(url).classList.add("navactive")
    },[url])

    return(
        <div className="side_content" id="side_content">
            <div className="navigation-div" id="navigation_div">
                <div className="navigator ubuntri_ai_asistant navactive" id="ubuntri_ai_asistant" >
                    <Link to="/" onClick={()=>changeLocation("ubuntri_ai_asistant")}>
                        <div className="iconwrapper">
                            <img src={logo} id="assistanticon" className="clickicon"  alt="logoicon"/>
                            <p>Ubuntri Asistant</p>
                        </div>
                    </Link>
                </div>
                <div className="navigator installation" id="installationnav">
                    <Link to="/installation" onClick={()=>changeLocation("installationnav")}>
                        <div className="iconwrapper">
                            <img src={instllation} id="installationicon" className="clickicon" alt="instllation" />
                            <p>Installation Guide</p>
                        </div>
                    </Link>
                </div>
                <div className="navigator troubleshoot" id="troubleshootnav">
                    <Link to="/troubleshoot" onClick={()=>changeLocation("troubleshootnav")}>
                        <div className="iconwrapper">
                            <img src={troubleshoot} id="troubleshooticon" className="clickicon" alt="troubleshoot" />
                            <p>Troubleshoot</p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>

    )
}