import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Upload from './pages/Upload';
import Header from './components/Header';

import './App.css';

const App = () => {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path='/' exact element={<Home/>}/>
        <Route path='/upload' exact element={<Upload/>}/>
      </Routes>
    </HashRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);