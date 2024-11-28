import React, { useRef, useState } from "react";
import "../styles/assistant.css"

export default function Assistant(){
    const previousQuery = useRef(null)
    const [user, setUser] = useState("Anuj")
    const [forminput, setforminput] = useState("How to Move file in Ubuntu ?")
    const [queries, setNewQueris] = useState([]);

    function openPreviousQuery(){
        previousQuery.current.classList.toggle("previousQuereisnew")
    }

    function askQuery(){
        setNewQueris([...queries,<div className="queryDiv" key={queries.length}>{forminput}</div>])
    }

    return(
        <div className="assitant" id="assistant">
                <div className="previousQuereis" ref={previousQuery} onClick={openPreviousQuery}>
                    <h3>Previous Queries</h3>
                    <div className="queryContainer">
                        {queries}
                    </div>
                </div>
                
                <div className="userDiv">
                    <h3>Hey <span>{user},</span></h3>
                    <h5>I'm <span className="ubuntriName">Ubuntri</span>, Your AI assistant</h5>
                </div>

                <div className="assitatntForm">
                    <div className="assistantformInput">
                        <input type="text" name="packageSearch" value={forminput} id="searchInput" onChange={(e)=>setforminput(e.target.value)}></input>
                        <button className="askButton" onClick={askQuery}>Ask</button>
                    </div>
                </div>
        </div>
    )
}