import React from "react";
import ReactDOM from "react-dom";
import Main from "./Main";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css";
import { Blockchain } from "./BlockChain";

let blockchainInstance = new Blockchain();
ReactDOM.render(
    <Main blockchain={blockchainInstance}/>
    , document.getElementById("root"));
