import React, { useEffect, useRef, useState } from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';


import "./Testimonials.css"

// import next_icon from "../../../Assets/Common/next-icon.png"
// import back_icon from "../../../Assets/Common/back-icon.png"
import client1 from "../../../Assets/Common/account-icon.png"

import Quote from '../../../Assets/Common/blockquote.svg';

const testimonials = [
  {
    id: 1,
    image: client1, // A family photo
    companyName: "The Williams Family",
    head: "A Truly Unforgettable Family Holiday",
    text: "Acute Tourism made our Dubai trip seamless. From desert safaris to a magical evening at the dhow cruise, every detail was perfectly arranged. We felt cared for at every step."
  },
  {
    id: 2,
    image: client1, // A solo traveler
    companyName: "Sophia L.",
    head: "The Best Solo Adventure Ever",
    text: "Traveling alone can be overwhelming, but Acute Tourism made me feel safe and excited. I explored Abu Dhabi’s Grand Mosque, enjoyed a thrilling dune bashing ride, and met wonderful guides. Highly recommended!"
  },
  {
    id: 3,
    image: client1, // A corporate group
    companyName: "TechWorld Enterprises",
    head: "Flawless Corporate Retreat",
    text: "Our company retreat was handled professionally from start to finish. From luxury hotel bookings to guided city tours, everything exceeded our expectations. Our team had an amazing bonding experience."
  },
  {
    id: 4,
    image: client1, // A couple
    companyName: "Arjun & Maya",
    head: "A Romantic Getaway",
    text: "We booked a honeymoon package with Acute Tourism, and it was nothing short of magical. The desert dinner under the stars was our favorite memory. Truly a trip we will cherish forever."
  },
];



const Testimonials = () => {
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    // Function to update screen size
    const updateScreenSize = () => {
      setScreenWidth(window.innerWidth);
    };

    // Initial size update
    updateScreenSize();

    // Add event listener for screen resize
    window.addEventListener("resize", updateScreenSize);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("resize", updateScreenSize);
    };
  }, []);

  return (
    <section id="testimonials" className="testimonial-container">
      {/* <div className="heading-div">
          <h1>
              <hr />Testimonials
          </h1>
      </div> */}
      <div className="title">
        <h1 className="commonHeading"><span>Work Delights</span> & <span>Inspires Clients</span></h1>
        {/* <h3>Delivering Tailored and Distinctive Website Development Services for Your Business at Affordable Prices.</h3> */}
      </div>

      <div className="slider-container">
        <blockquote>
          <img className="top-quote quote" src={Quote} alt="quote" />
          <img className="bottom-quote quote" src={Quote} alt="quote" />
        </blockquote>

        <Splide
          options={{
            perPage: screenWidth <= 1600 ? 1 : (screenWidth <= 2000 ? 2 : 3),
            autoplay: true,
            gap: 20,
            speed: 1000,
            rewind: true,
            rewindByDrag: true,
          }}
        >
          {testimonials.map((review) => (
            <SplideSlide key={review.id}>
              <div className="review-img">
                <img src={review.image} alt="2D Animation" />
              </div>
              <div className="content">
                <p className="head">{review.head}</p>
                <p className="text">{review.text}</p>
                <div className="info">
                  <div className="rating">
                    <span className="star">&#9733;</span>
                    <span className="star">&#9733;</span>
                    <span className="star">&#9733;</span>
                    <span className="star">&#9733;</span>
                    <span className="star">&#9734;</span>
                  </div>
                  <p className="company">{review.companyName}</p>
                  {/* <p className="user">{review.name}</p> */}
                </div>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </section>
  );
};

export default Testimonials;