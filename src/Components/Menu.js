import React from 'react'

const Menu = () => {
    const goToHome = ()=>{
        const hp = document.getElementById("homepage")
        hp.scrollIntoView({ behavior: 'smooth' });
    }
    const goToAbout = ()=>{
        const ab = document.getElementById("aboutpage");
        ab.scrollIntoView({behavior: 'smooth'})
    }
    const goToRooms = ()=>{
        const room = document.getElementById('roompage');
        room.scrollIntoView({behavior : 'smooth'})
    }
    const goToServices = ()=>{
        const services = document.getElementById('servicespage');
        services.scrollIntoView({behavior : 'smooth'})
    }
    const goToGallary = ()=>{
        const gallary = document.getElementById('gallary');
        gallary.scrollIntoView({behavior:'smooth'})
    }
    const goToContact = ()=>{
        const contact = document.getElementById('contact');
        contact.scrollIntoView({behavior:'smooth'})
    }
    const showMenu = ()=>{
        document.getElementById('nav-links').style.display = 'flex' ;

    }
    const hideMenu = ()=>{
        document.getElementById('nav-links').style.display = 'none' ;
    }
  return (
    <>
        <div className="header">
            <nav>
                <div className="nav_bar">
                    <div className="logo">
                        <a href="https://api.whatsapp.com/send?phone=919007062180"  target="_blank"><span>Kingsukh Guest House</span></a>
                    </div>
                </div>
                <ul className="nav_links" id='nav-links'>
                    <li><a href="#home" onClick={goToHome} >Home</a></li>
                    <li><a href="#About" onClick={goToAbout} >About</a></li>
                    <li><a href="#Services" onClick={goToServices} >Services</a></li>
                    <li><a href="#Rooms" onClick={goToRooms} >Rooms</a></li>
                    <li><a href="#Gallary" onClick={goToGallary} >Gallary</a></li>
                    <li><a href="#Contact" onClick={goToContact}>Contact</a></li>
                </ul>
                <a href="https://api.whatsapp.com/send?phone=919007062180"  target="_blank"><button className='btn nav_btn'>BOOK NOW</button></a>
                    <div className="nav_menu_btn" id='nav_links1'><i class="fa-solid fa-bars barlines" id='bar' onClick={showMenu}>
                    </i></div>
                    <div className="close"><i class="fa-solid fa-xmark close-1" onClick={hideMenu}></i></div>
            </nav>
            <div className="section_container header_container" id='home'>
                <p className="para_style">
                    Simple - Unique - Friendly
                </p>
                <h1 className='heading_style'>Make Yourself At Home <br /> In Our <span>Guest House</span> </h1>
            </div>
        </div>
    </>
  )
}

export default Menu
