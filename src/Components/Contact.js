import React from "react";

const Contact = () => {
  return (
    <>
      <section className="section1" id="contact">
        <div className="container1">
          <div className="contactInfo1">
            <div>
              <h2>Contact Info</h2>
              <ul className="info">
                <li>
                  <span>
                    <img src="../assets/location.png" alt="location" />
                  </span>
                  <span>
                    Besides Barshal Water Tank,
                    <br />
                    Manpur , Barhanti,
                    <br />
                    West Bengal 723156
                  </span>
                </li>
                <li>
                  <span>
                    <img src="../assets/mail.png" alt="mail" />
                  </span>
                  <span>
                    <a href="mailto:%20kkghosh0099@gmail.com" target="_blank">
                      kkghosh0099@gmail.com
                    </a>
                  </span>
                </li>
                <li>
                  <span>
                    <img src="../assets/call.png" alt="call" />
                  </span>
                  <span>
                    <a href="tel : +919007062180" target="_blank">+91 9007062180</a>
                  </span>
                </li>
              </ul>
            </div>
            <ul className="sci">
              <li>
                <a href="https://www.facebook.com/" target="_blank">
                  <img src="../assets/f.png" alt="facebook" />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/kingsukhguesthouse/"  target="_blank">
                  <img src="../assets/i.png" alt="instagram" />
                </a>
              </li>
              <li>
                <a href="https://x.com/?lang=en"  target="_blank">
                  <img src="../assets/t.png" alt="twitter" />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/feed/"  target="_blank">
                  <img src="../assets/li.png" alt="linkedin" />
                </a>
              </li>
            </ul>
          </div>
          <div className="contactForm1">
            <h2>Send a Message</h2>
            <div className="formBox1">
                <div className="inputBox1 w50">
                    <input type="text" />
                    <span>First Name</span>
                </div>
                <div className="inputBox1 w50">
                    <span>Last Name</span>
                </div>
                <div className="inputBox1 w50">
                    <input type="email" />
                    <span>Email Address</span>
                </div>
                <div className="inputBox1 w50">
                    <input type="text" />
                    <span>Mobile Number</span>
                </div>
                <div className="inputBox1 w100">
                    <textarea ></textarea>
                    <span>Write Your Message Here</span>
                </div>
                <div className="inputBox1 w100">
                    <input type="submit" value="send" />
                </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
