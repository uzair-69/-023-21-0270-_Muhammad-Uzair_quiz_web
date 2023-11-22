
import React from "react";
import "./App.css";
import Header from "./components/header";
import Welcome from "./components/welcome";
import "bootstrap/dist/css/bootstrap.min.css";

import Footer from "./components/footer";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import About from "./components/about";


function App() {
  return (
    <>
  
    <div className="App container">
      <Header />
      <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/about" element={<About />} />
   
      </Routes>
      <Footer />
    </div>
    </>
  );
}

export default App;
