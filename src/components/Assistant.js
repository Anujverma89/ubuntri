import React, { useRef, useState } from "react";
import "../styles/assistant.css"

export default function Assistant(){
    const [user, setUser] = useState("Anuj")
    const [forminput, setforminput] = useState("How to Move file in Ubuntu ?")
    const [queries, setNewQueris] = useState([]);

   

    function askQuery(){
        setNewQueris([...queries,<div className="card d-block p-2 mb-1" key={queries.length}>{forminput}</div>])
    }

    return(
        <div className="assitant" id="assistant">
                <div className="d-flex flex-column justify-content-center previousQueries">
                    <button className="btn btn-light pe-5 ps-5 pt-3 pb-3  mt-3 mb-1" type="button" data-bs-toggle="collapse" data-bs-target="#perviousQuery" aria-expanded="false" aria-controls="previousQuery">
                        Previous Queries
                    </button>
                
                    <div className="row">
                        <div className="col">
                            <div className="collapse" id="perviousQuery">
                                {queries}
                            </div>
                        </div>
                    </div>
                </div>
    
                <div className="userDiv">
                    <h3>Hey <span>{user}</span>,</h3>
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