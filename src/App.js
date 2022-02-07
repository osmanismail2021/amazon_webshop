import React from "react";

import "./App.css";

import {BrowserRouter as Router,Switch, Route,Link,Routes,}
 from "react-router-dom";

import Header from "./Header";

import Checkout from "./Checkout";

import Login from "./Login";



function App() {

  return (

    <Router>

      <div className="App">

        <Routes>

          <Route path="/" element={<Header />} />

          <Route path="/Checkout" element={<Checkout />} />

          <Route path="/Login" element={<Login />} />

        </Routes>

      </div>

    </Router>

  );

}



export default App;
