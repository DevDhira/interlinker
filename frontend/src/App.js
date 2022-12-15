import React from "react";
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import About from "./pages/About";
import Feedback from "./pages/Feedback";
import Home from "./pages/Home";
import Interlink from "./pages/Interlink";
import PageNotFound from "./pages/PageNotFound";
import Result from "./pages/Result";


function App() {
  return (
      <Router>
      <div className="w-full h-screen flex flex-col  justify-between" >

     <div>
     <Nav/>
        <div >
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/interlink" element={<Interlink/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/feedback" element={<Feedback/>} />
          <Route path="/result" element={<Result/>} />
          <Route path="*" element={<PageNotFound/>} />
        </Routes>

        <Footer />
        </div>
     </div>
   
        
        </div>
     
      </Router>
  );
}

export default App;
