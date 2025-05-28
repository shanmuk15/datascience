// App.js
import React from 'react';
import './App.css';
import Home from './components/Home/Home';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Projects from './components/projects/Projects';
import Header from './components/Header/Header';



function App() {
  return (
   <div>
    <Header />
    <Home/>
    <About/>
    <Projects/>
    <Contact/>
   </div>
  )
}

export default App;
