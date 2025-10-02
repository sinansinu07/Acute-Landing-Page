import "./HomeAboutUs.scss"

import image from "../../../Assets/Gallery/ferrari-world3.jpg"

export default function HomeAboutUs() {
    return (
        <section>
            <div className="about-company-section section-container">
            <div className="head-div">
                <div className="head-top">
                    <h3 className="top-title">About Us | Acute Tourism</h3>
                </div>
                <h1 className="main-title">
                Your Trusted Travel Partner:<br/> 
                Explore Dubai, Abu Dhabi & Beyond with <span className="color-brown">Unforgettable Journeys</span>
                </h1>
                <p className="description">
                At <strong>Acute Tourism</strong>, we design memorable experiences in Dubai and Abu Dhabi — 
                from cultural city tours to luxury desert safaris, blending comfort, adventure, and local expertise.
                </p>
                <p className="description">
                With <strong>competitive pricing</strong> and <strong>global coverage</strong>, we deliver seamless travel, exceptional value, and lasting memories.
                </p>
            <a href="/about-us"><div className="btn btn-navy-blue">Our Services</div></a>
            </div>
                <div className="img-div">
                    <img src={image} alt="Acute Tourism" />
                </div>
            </div>
        </section>
    )
}