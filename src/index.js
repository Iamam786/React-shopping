import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
// import { LoginComponent } from './Components/loginComponents';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'
import DataBindingComponent from './Components/DataBindingComponent';
import DataBindingFake from './Components/DataBindingFake';
import DataBindingComponents from './Components/DataBindigComponent';
import NestedComponent from './Components/NestedComponent';
import DataBindigWithLocalResoucres from './Components/DataBindigWithLOcalResoucre';
import TwoBindingComponents from './Components/TwoBinding';
import StateDemoComponent from './Components/StateDemoComponent';
import StateFunctionComponent from './Components/DataBindigUsingStatefunctionComp';
import StyleBindingComponent from './Components/StyleBindingComponent';
import PropertiesDemoComponent from './Components/PropertiesDemoComponent';
import NetflixIndexComponent from './Netflix/NetflixIndexComponent';
import NasaMarsPhotosComponent from './Components/NasaMarsPhotosComponent';
import InstaLoginComponent from './Components/insta/InstaLoginComponent';
import EventDemoComponent from './Components/EventInFunctionComponent';
import EventDemoClassComponent from './Components/EventDemoClassComponent';
import EventDemoClassConstructorComponent from './Components/eventinClassSuperConstructor';
import EventWithoutBindConstructorComponent from './Components/EventwithouUsingBindMethod';
import KeyDemoComponent from './Components/KeyboardEvents';
import LifeCycleDemoComponent from './Components/LifeCycleDemoComponent';
import LifeCycleYoutube from './Components/LifeCycleYoutube';
import ProductComponent from './Components/LifeCycleComponentNotes/ProductComponent';
import FuctionLifecycleComponent from './Components/FuctionLifecycleComponent';
import ContextDemoComponent from './Components/Context/ContextDemoComponent';
import ReducerDemoComponent from './Components/Reducer/ReducerDemoComponent';
import { CookiesProvider } from 'react-cookie';
import LoginComponent from './Components/LoginComponent';
// import FormDeomComponent from './Components/FormDeomComponent';
import FormikDemoComponents from './Components/FormikDemoComponents';
import ValidationDemoComponent from './Components/ValidationDemoComponent';
import YupDemoComponent from './Components/YupDemoComponent';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <CookiesProvider>
      <YupDemoComponent/>
    </CookiesProvider>
    {/*
import formDeomComponent from './Components/formDeomComponent';
    <CookiesProvider>
      <ValidationDemoComponent/>
    
    <FormikDemoComponents/>
    <FormDeomComponent />
      <LoginComponent />
    </CookiesProvider>
<ReducerDemoComponent/>
<ContextDemoComponent/>
    <FuctionLifecycleComponent/>
<InstaLoginComponent/>
<ProductComponent/>
<LifeCycleDemoComponent/>
<LifeCycleYoutube color='white'/>
<KeyDemoComponent/>
<EventWithoutBindConstructorComponent/>
<EventDemoClassConstructorComponent/>
    <EventDemoClassComponent/>
<EventDemoComponent/>
    <NasaMarsPhotosComponent/>
    <NetflixIndexComponent/>
    <PropertiesDemoComponent/>
    <StyleBindingComponent/>
   <StateFunctionComponent/>
    <StateDemoComponent/>
    <TwoBindingComponents/>
    <DataBindigWithLocalResoucres />
    <NestedComponent />
    <DataBindingComponents></DataBindingComponents>
    <DataBindingFake />
     <DataBindingComponent></DataBindingComponent> 
*/}

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
