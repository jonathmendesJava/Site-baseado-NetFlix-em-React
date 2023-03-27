import React from 'react';
import ReactDOM from 'react-dom/client';
import './MinhasRotas'
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import MinhasRotas from './MinhasRotas';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(   
    <BrowserRouter>
        <App/>
        <MinhasRotas/>
    </BrowserRouter>  
);


