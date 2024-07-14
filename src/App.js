import React from 'react';
import Menu from './Components/Menu';
import Home from './Components/Home'
import About from './Components/About'
import Rooms from './Components/Rooms';
import Services from './Components/Services';
import Banner from './Components/Banner';
import Gallary from './Components/Gallary'
import Contact from './Components/Contact';
import Footer from './Components/Footer';

const App = ()=>{
    return(
        <>
            <Menu/>
            <Home/>
            <About/>
            <Rooms/>
            <Services/>
            <Banner/>
            <Gallary/>
            <Contact/>
            <Footer/>
        </>
    )
} 

export default App ; 