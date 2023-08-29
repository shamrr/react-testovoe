import React from "react";
import reactDom from "react-dom";
import App from "./App/app";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Coin from "./Coin/coin";



reactDom.render(
    <Router>
        <Routes>
            <Route 
                path="/" element={<App />} 
            />
            <Route 
                path="/coin/:coinId" 
                element={<Coin />} 
            />
        </Routes>
    </Router>,
    document.getElementById('root'),
);