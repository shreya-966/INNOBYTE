import React from 'react'
import FavoriteIcon from '@material-ui/icons/Favorite';
import FormatColorFillIcon from '@material-ui/icons/FormatColorFill';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';

const Rooms = () => {
  return (
    <>
        <div className="section_container rooms" id='roompage'>
            <p className="subheading-rooms ">OUR LIVING ROOM</p>
            <h2 className='heading-room'>The Most Memorable Rest Time Starts Here !</h2>
            <div className="grid">
            <div className="room-struct">
              <div className="room-cards">
                <div className="card-image">
                  <img src="../assets/small.jpg" alt="Our Small Room" />
                  <div className="icons">
                    <span><FavoriteIcon className='heart'/></span>
                    <span><FormatColorFillIcon className='paint'/></span>
                    <span><ThumbDownIcon className='down'/></span>
                  </div>
                </div>
                <div className="room-details">
                  <h4>Cozy Haven Room</h4>
                  <p>Escape to comfort in our Cozy Haven Room, a snug retreat designed for intimate relaxation.</p>
                  <h5>Starting from <span>Rs.1000/night</span></h5>
                  <a href="https://api.whatsapp.com/send?phone=919007062180" target="_blank">
                    <button className="btn-3">BOOK NOW</button>
                  </a>
                </div>
              </div>
            </div>
            <div className="room-struct">
            <div className="room-cards">
               <div className="card-image">
                <img src="../assets/large.jpg" alt="" />
                <div className="icons">
                    <span><FavoriteIcon className='heart'/></span>
                    <span><FormatColorFillIcon className='paint'/></span>
                    <span><ThumbDownIcon className='down'/></span>
                  </div>
               </div>
                <div className="room-details">
                  <h4>Spacious Serenity Suite</h4>
                  <p>Indulge in luxury and ample space in our Spacious Serenity Suite, where tranquility meets roomy elegance.</p>
                  <h5>Starting from <span>Rs.1500/night</span></h5>
                  <a href="https://api.whatsapp.com/send?phone=919007062180"  target="_blank">
                    <button className="btn-3">BOOK NOW</button>
                  </a>
                </div>
              </div>
            </div>
            <div className="room-struct">
            <div className="room-cards">
               <div className="card-image">
                <img src="../assets/room1.jpg" alt="room1" />
                <div className="icons">
                    <span><FavoriteIcon className='heart'/></span>
                    <span><FormatColorFillIcon className='paint'/></span>
                    <span><ThumbDownIcon className='down'/></span>
                  </div>
               </div>
                <div className="room-details">
                  <h4>Calm Tranquil Habitat</h4>
                  <p>When the mixture has been in a tranquil state of fusion for a few minutes it is poured into a serene piece of mind.</p>
                  <h5>Starting from <span>Rs.2000/night</span></h5>
                  <a href="https://api.whatsapp.com/send?phone=919007062180"  target="_blank">
                    <button className="btn-3">BOOK NOW</button>
                  </a>
                </div>
              </div>
            </div>
        </div>
            </div>
    </>
  )
}

export default Rooms
