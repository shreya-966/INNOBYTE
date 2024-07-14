import React from 'react'

const About = () => {
  return (
    <>
        <section className="section_container about" id='aboutpage'>
        <div className="about-image">
            <img src="../assets/out.jpg" alt="alpha" />
        </div>
        <div className="about_content">
          <p className="subheading">
            ABOUT US 
          </p>
          <h2 className='heading'>The Best Holidays Start Here !</h2>
          <br/>
          <p className="section_description">
          Embark on a tranquil journey at our Kingsukh Guest House, enveloped by the scenic allure of Biharinath Hill, Baranti Hill, Susunia Hill, Joychandi Hill, Garhpanchkot, Baranti Dam, Maithon Dam, and the captivating Panchat Dam. Revel in the embrace of comfort, relish delightful meals, and unwind in our verdant garden oasis. Your ideal retreat beckons, promising a harmonious blend of nature's beauty and heartfelt hospitality. Explore the hidden gems of Purulia, creating memories that linger long after your stay.
          </p>
          <h4><a href="https://www.google.com/maps/place/Kingsukh+Guest+House/@23.5862406,86.8597371,17z/data=!4m6!3m5!1s0x39f6e3fdd3ff9ebb:0x517a57e3f93c1807!8m2!3d23.5863324!4d86.8597904!16s%2Fg%2F11srygxjp6?entry=ttu"  target="_blank">Address: Beside Barshal Water Tank , Manpur , Barhanti , West Bengal 723156</a></h4>

          <h4><a href="https://www.kingsukhguesthouse.com/tel:+919007062180"  target="_blank">Contact us: +91 9007062180</a></h4>
          <br />
          <div className="about_btn"><a href="https://api.whatsapp.com/send?phone=919007062180"  target="_blank">
            <button className="btn-3">BOOK NOW</button>
          </a></div>
        </div>
        </section>
    </>
  )
}

export default About
