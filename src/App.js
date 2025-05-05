import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import React, {useEffect} from 'react'
import Home from "./pages/Home";
import LoadingScreen from "./components/LoadingScreen";

function App() {
  useEffect(() => {
    document.title = 'Selvahini Kamalarajan';
  }, []);
  return (
    <div>
      
    <BrowserRouter>
    <Routes>
      
    <Route path="/loading" element={<LoadingScreen />} />
        <Route path="/" element={<LoadingScreen />} />
        <Route path="/home" element={<Home />} />
      
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
