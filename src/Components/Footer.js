import React from 'react';

const Footer = ()=>{
    return(
        <> 
        <footer className="footer">
            <div className="section_container footer-container">
                <div className="footer-col">
                    <div className="logo">
                        <a href="./Components/Home.js"><h4 className='logo1'>KINGSUKH GUEST HOUSE</h4></a>
                    </div>
                    <p className="description">
                    Discover a world of comfort, luxury, and adventure as you explore our curated selection of hotels, making every moment of your getaway truly extraordinary.
                    </p>
                    <a href="https://api.whatsapp.com/send?phone=919007062180" target="_blank">
                        <button className='btn-footer'>BOOK NOW</button>
                    </a>
                </div>
                <div className="footer_col">
                    <h4>QUICK LINKS</h4>
                    <ul className="footer_links">
                        <li><a href="./Components/Home.js">Browse Destinations</a></li>
                        <li><a href="./Components/Home.js">Special Offers and Packages</a></li>
                        <li><a href="./Components/Rooms.js">Room Types and Amenities</a></li>
                        <li><a href="./Components/Home.js">Customer Reviews and Ratings</a></li>
                        <li><a href="./Components/Home.js">Travel Tips and Guides</a></li>
                    </ul>
                </div>
                <div className="footer_col">
                    <h4>OUR SERVICES</h4>
                    <ul className="footer_links">
                        <li><a href="./Components/Home.js">Conceirge Assistance</a></li>
                        <li><a href="./Components/Home.js">Flexible Booking Options</a></li>
                        <li><a href="./Components/Home.js">Airport Transfers</a></li>
                        <li><a href="./Components/Home.js">Wellness and Recreation</a></li>
                    </ul>
                </div>
                <div className="footer_col">
                    <h4>CONTACT US</h4>
                    <ul className='footer_links'>
                        <li><a href="https://www.google.com/maps/place/Kingsukh+Guest+House/@23.5862406,86.8597371,17z/data=!4m6!3m5!1s0x39f6e3fdd3ff9ebb:0x517a57e3f93c1807!8m2!3d23.5863324!4d86.8597904!16s%2Fg%2F11srygxjp6?entry=ttu" target="_blank">Address: Beside Barshal Water Tank, Manpur, Barhanti, West Bengal 723156</a></li>
                        <li><a href="mailto: kkghosh0099@gmail.com" target="_blank">kkghosh0099@gmail.com</a></li>
                        <li><a href="tel:+919007062180" target="_blank">+91 9007062180</a></li>
                    </ul>
                    <div className="footer_socials">
                        <a href="https://www.facebook.com/" target="_blank"><img src="../assets/facebook.png" alt="facebook" /></a>
                        <a href="https://www.instagram.com/" target="_blank"><img src="../assets/instagram.png" alt="instagram" /></a>
                        <a href="https://x.com/?lang=en" target="_blank"><img src="../assets/twitter.png" alt="twitter" /></a>
                        <a href="https://yputube.com/?lang=en" target="_blank"><img src="../assets/youtube.png" alt="youtube" /></a>
                    </div>
                </div>
            </div>
            <div className="footer_bar">Copyright © 2024 Kingsukh Guest House. All rights reserved.</div>
        </footer>
        </>
    )
}

export default Footer;