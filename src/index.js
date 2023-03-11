import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { LoginComponent } from './Components/loginComponents';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'
import { NetflixRegisterComponent } from './Components/NetflixComponentRegis';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className='d-flex justify-content-center bimage   text-center flex-column text-white'>

   
    <h1 className=' '>Unlimited movies, TV shows and more</h1>
    <p className=''>watch anywhere. Cancel anytime</p>
    <NetflixRegisterComponent></NetflixRegisterComponent>
    </div>
  
  </React.StrictMode>
);
         
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
