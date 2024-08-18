// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./App";
 
// ReactDOM.render(
//   <App/>, 
//   document.getElementById("root")
// );
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
