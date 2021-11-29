import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Home from './routes/home'
import Notfound from './routes/notfound';
import Tracking from './routes/tracking';
import {
    BrowserRouter as Router,
    Routes,
    Route
  } from "react-router-dom";
import './index.css';

ReactDOM.render(
    <Router>
        <Routes>
            <Route path='/' element={<App/>}>
                <Route path='home' element={<Home/>}/>
                <Route path='tracking' element={<Tracking/>}/>
                <Route path='notfound' element={<Notfound/>}/>
            </Route>
        </Routes>
    </Router>,
    document.getElementById('root')
)