import React, { useEffect } from "react";
import { useState } from "react";
import "../styles/troubleshoot.css"

export default function Troubleshoot(){
    const [troubleshooting, setTroubleshooting] = useState(false);
    const [systemInfo, setSystemInfo] = useState(null);

    async function startTroubleshooting(){
        setTroubleshooting(true);
        let result = await window.systemAPI.fetchSystemInfo();
        console.log(result)
        setSystemInfo(result);
        setTroubleshooting(false);
    }

    function stopTroubleshoot(){
        setTroubleshooting(false)
    }
    useEffect(()=>{
        const fetchSystemInfo = async () => {
            try {
                let result = await window.systemAPI.fetchSystemInfo();
                console.log(result);
                setSystemInfo(result);
            } catch (error) {
                console.error("Error fetching system info:", error);
            }
        };
    
        fetchSystemInfo();
    },[])

    return(
            <div className="troubleshootactive" id="troubleshoot">
                
                <div className="troubleshootingContent">
                    <div className="previousTroubleshoots">
                        <div className="troubleshootreport">
                            <div className="errorType">
                                <p>Hardware</p>
                            </div>
                            <div className="errorName">
                                <p>Reltek Driver missing</p>
                            </div>
                            <div className="dateResolved">
                                <p>23.11.2024</p>
                            </div>
                            <div className="installedpackage">
                                <table>
                                    <tr>
                                        <th>Package Name</th>
                                        <th>Version</th>
                                        <th>Dependencies</th>
                                    </tr>
                                    <tr>
                                        <td>alsaaudio</td>
                                        <td>12.0.2</td>
                                        <td>None</td>
                                    </tr>
                                </table>
                            </div>
                            <div className="uninstalledpackage">
                                <table>
                                    <tr>
                                        <th>Package Name</th>
                                        <th>Version</th>
                                        <th>Dependencies</th>
                                    </tr>
                                    <tr>
                                        <td>beta Drivers</td>
                                        <td>12.0.2</td>
                                        <td>None</td>
                                    </tr>
                                </table>
                            </div>
                            <div className="status">
                                <p>Solved</p>
                            </div>
                        </div>

                        <div className="troubleshootreport">
                            <div className="errorType">
                                <p>Hardware</p>
                            </div>
                            <div className="errorName">
                                <p>Reltek Driver missing</p>
                            </div>
                            <div className="dateResolved">
                                <p>23.11.2024</p>
                            </div>
                            <div className="installedpackage">
                                <table>
                                    <tr>
                                        <th>Package Name</th>
                                        <th>Version</th>
                                        <th>Dependencies</th>
                                    </tr>
                                    <tr>
                                        <td>alsaaudio</td>
                                        <td>12.0.2</td>
                                        <td>None</td>
                                    </tr>
                                </table>
                            </div>
                            <div className="uninstalledpackage">
                                <table>
                                    <tr>
                                        <th>Package Name</th>
                                        <th>Version</th>
                                        <th>Dependencies</th>
                                    </tr>
                                    <tr>
                                        <td>beta Drivers</td>
                                        <td>12.0.2</td>
                                        <td>None</td>
                                    </tr>
                                </table>
                            </div>
                            <div className="status">
                                <p>Solved</p>
                            </div>
                        </div>

                        
                    </div>

                    <div className="currentSystemState">
                        <div className="introCurrentstate justify-content-center w-100 d-flex">
                            <h3 className="m-auto">System Information</h3>
                        </div>
                        <div className="currentSystemStatecontent">
                            <div className="systemInfo mt-3">
                                {systemInfo &&
                                    <>
                                        <p className="d-inline-flex gap-1">
                                            <button className="btn btn-light" type="button" data-bs-toggle="collapse" data-bs-target="#generalCollapse" aria-expanded="false" aria-controls="generalCollapse">
                                                General Information
                                            </button>
                                            <button className="btn btn-light" type="button" data-bs-toggle="collapse" data-bs-target="#networkCollapse" aria-expanded="false" aria-controls="netowrkCollapse">
                                                Network Interfaces
                                            </button>
                                        </p>
                                        
                                        <div className="collapse" id="generalCollapse">
                                            <p className="card d-block p-2"><strong>CPU Architecture:</strong> {systemInfo.cpuArchitecture}</p>
                                            <p className="card d-block p-2"><strong>OS Platform:</strong> {systemInfo.osPlatform}</p>
                                            <p  className="card d-block p-2"><strong>OS Type:</strong> {systemInfo.osType}</p>
                                            <p  className="card d-block p-2"><strong>OS Release(Kernal):</strong> {systemInfo.osRelease}</p>
                                            <p  className="card d-block p-2"><strong>OS Version:</strong> {systemInfo.osVersion}</p>
                                            <p  className="card d-block p-2"><strong>Uptime (seconds):</strong> {systemInfo.systemUptime}</p>
                                            <p  className="card d-block p-2"><strong>User Info:</strong> {systemInfo.userInfo.username} ({systemInfo.userInfo.uid})</p>
                                        </div>

                                        <div className="collapse" id="networkCollapse">
                                            {Object.keys(systemInfo.networkInterfaces).map((interfaceName) => (
                                                <div key={interfaceName}  className="card d-block p-2 mb-2">
                                                    <h4>{interfaceName}</h4>
                                                    {systemInfo.networkInterfaces[interfaceName].map((network, index) => (
                                                        <div key={index}>
                                                            <p><strong>IP Address:</strong> {network.address}</p>
                                                            <p><strong>MAC Address:</strong> {network.mac}</p>
                                                            <p><strong>Netmask:</strong> {network.netmask}</p>
                                                        </div>
                                                    ))}
                                                </div>
                                            ))}
                                        </div>
                                    </>
                                
                                }
                            </div>

                            {/* <div className="installedLibraries">
                                <div className="installedsoftwares">
                                    <p>Installed libraries and packages</p>
                                </div>
                                <div className="packagecardparent">
                                    <div className="installedpackagecard">
                                        <p>mySQL</p>
                                    </div>
                                    <div className="installedpackagecard">
                                        <p>mongoDB</p>
                                    </div>
                                    <div className="installedpackagecard">
                                        <p>Nodejs</p>
                                    </div>
                                </div>
                            </div>
                            <div className="errorfullpackages">
                                <div className="errorfulpackagesIntro">
                                    <p>Errorful Packages and softwares</p>
                                </div>
                                <div className="errorparentcard">
                                    <div className="errorcard">
                                        <p>No Errorfull Packages Found</p>
                                    </div>  
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>

                <div className="CurrenttroubleshootReport">
                    <div className="errorreport">
                        <div className="error">
                            <div className="errorcardCurrentState">
                                <p>Alsa service not working</p>
                            </div>
                            
                        </div>
                        <div className="filescanned">
                            <p>GPG key error</p>
                        </div>
                    </div>
                </div>

                <button className="startTroubleShoot" id="startTroubleShoot" onClick={startTroubleshooting}>
                    <h4 className="mb-0">TroubleShoot</h4>
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-gear-fill" viewBox="0 0 16 16">
                        <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z"/>
                    </svg>
                </button>
                
                {/* trouble shooting content */}

                {
                    troubleshooting &&
                    <div className="troubleshootingactive" id="troubleshootingBox">
                    <button className="closetab" onClick={stopTroubleshoot}>Stop x</button>
                    <h1>Reading Log file 75%</h1>
                    <progress id="file" value="75" max="100"> 32% </progress>
                    </div>
                }
            </div>  
    )
}