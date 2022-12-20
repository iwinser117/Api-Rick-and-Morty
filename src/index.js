import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter,Router, Route,Routes } from "react-router-dom";

import App from "./routes/App";
import './styles/index.css'

ReactDOM.render(<App/>, document.getElementById('app'));
