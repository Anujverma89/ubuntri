import React, { useRef, useState } from "react";
import "../styles/installation.css"

export default function Installation(){
    const searchResult = useRef(null);
    const [divs, setDivs] = useState([]);
    const [currentValue, setCurrentValue] = useState("Install MySQL");
    const [searchStatus, setSearchStatus] = useState("");
    function findPackage(){
        setDivs([...divs,<div key={divs.length} className="packageCard">{currentValue}</div>])
        setSearchStatus(currentValue);
        searchResult.current.classList.remove("inactive");
        
    }

    function abortInstallation(){
        searchResult.current.classList.add("inactive");
    }
    return(
        <div className="installationcandidate" id="installation">
            
            <div className="previousSearch">
                <div className="IntroPreviousSearch">
                    <h3>Previous Searches</h3>
                </div>
                <div className="packageCardConatiner" id="packageCardConatiner">
                    {divs}
                </div>
            </div>
            
            <div className="SearchResult inactive" id="searchResult" ref={searchResult}>
                <div className="abortInstallation" onClick={abortInstallation}>
                    <p>x</p>
                </div>
                <div className="IntroPreviousSearch">
                    <h3>Search Status</h3>
                </div>
                <div className="packageCardConatiner">
                    {searchStatus}
                </div>
            </div>
    
            <div className="searchForm">
                <div className="formInput">
                    <input type="text" name="packageSearch" value={currentValue} id="searchInput" onChange={(e)=>setCurrentValue(e.target.value)}></input>
                    <button onClick={findPackage}>Find Package</button>
                </div>
            </div>
        </div>
    )
}