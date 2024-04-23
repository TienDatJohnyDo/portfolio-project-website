//import './App.css';
// import {Routes, Route} from 'react-router-dom'; 
// import About from './containers/about'; 
// import Contact from './containers/contact'; 
// import Home from './containers/home'; 
// import Portfolio from './containers/portfolio'; 
// import Resume from './containers/resume'; 
// import Skills from './containers/skills'; 
import React from 'react'; 
import {useRoutes} from 'react-router-dom'; 

export default function App() {
    let element = useRoutes([
      {path: '/', element: <Home />}, 
      {path: './about', element: <About />}, 
    ]); 
    return element ; 

}
function Home(){
  return <h2>Home</h2>; 
}

function About (){
  return <h2>About</h2>; 
}


