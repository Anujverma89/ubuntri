import { createRoot } from "react-dom/client";
import * as React from 'react';
import App from "./App";
import { HashRouter } from "react-router-dom";

document.body.innerHTML = "<div id='app'></div>"

const root = createRoot(document.getElementById("app"));
root.render(
    <HashRouter>
        <App />
    </HashRouter>
)