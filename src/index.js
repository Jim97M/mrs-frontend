import React from "react";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import ReactDOM from "react-dom";
import App from "./App";

const appElement = document.getElementById("app");
ReactDOM.render(
<Router>
<App/>
</Router> 
, appElement);

