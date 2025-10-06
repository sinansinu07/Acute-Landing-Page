import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import "./Footer.scss"

import logo from "../../../Assets/Logo/acute-tourism-logo.png"
import image1 from "../../../Assets/Gallery/abra-2.webp"
import image2 from "../../../Assets/Gallery/ain-dubai-observation-wheel.webp"
import image3 from "../../../Assets/Gallery/ferrari-world3.jpg"
import image4 from "../../../Assets/Gallery/dessert-safari-dune.jpg"
import image5 from "../../../Assets/Gallery/xclusive-dinner-cruise.jpg"
import image6 from "../../../Assets/Activities/abudhabi-banner.webp"
import image7 from "../../../Assets/Activities/burj-khalifa-2.jpg"
import image8 from "../../../Assets/Activities/dessert-safari.jpg"
import image9 from "../../../Assets/Activities/IMG-world-adventure-fast-track.webp"
import image10 from "../../../Assets/Activities/louvre.jpeg"
import image11 from "../../../Assets/Activities/museum-of-the-future.webp"  
import image12 from "../../../Assets/Activities/evening-desert-safari.jpeg"
import image13 from "../../../Assets/Activities/Private-Balloon-Flights.jpg"
import image14 from "../../../Assets/Activities/helicoptor-tour.jpg"


const gallery = [
    {
        id: 1,
        img: image1
    },
    {
        id: 2,
        img: image2
    },
    {
        id: 3,
        img: image3
    },
    {
        id: 4,
        img: image4
    },
    {
        id: 5,
        img: image5
    },
    {
        id: 6,
        img: image6
    },
    {
        id: 7,
        img: image7
    },
    {
        id: 8,
        img: image8
    },
    {
        id: 9,
        img: image9
    },
    {
        id: 10,
        img: image10
    },
    {
        id: 11,
        img: image11
    },
    {
        id: 12,
        img: image12
    },
    {
        id: 13,
        img: image13
    },
    {
        id: 14,
        img: image14
    },
]

export default function Footer() {
    return (
        <footer>
            <div className="footer">
                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={20}
                    slidesPerView={4}
                    loop={true}
                    speed={1000}
                    effect="coverflow"
                    grabCursor={true}
                    autoplay={{
                        delay: 2000,  // Adjust scrolling speed
                        disableOnInteraction: false,  // Keeps autoplay running after user interaction
                    }}
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 0,
                        depth: 50,
                        modifier: 1,
                        slideShadows: false, 
                    }}
                    className="footer-gallery"
                >
                    {gallery.map((gallery) => {
                        return (
                            <SwiperSlide key={gallery.id}>
                                <div className="gallery-div" key={gallery.id}>
                                    <img src={gallery.img} alt=""/> 
                                </div>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
                <hr/>
                <div className="footer-row container">
                    <div className="footer_col">
                        <div className="contact_content">
                            <div className="logo">
                                <img src={logo} alt="" />
                            </div>
                            <p>Acute Tourism is a prestigious Dubai-based luxury travel and tourism company dedicated to curating extraordinary travel experiences for discerning clients.</p>
                        </div>
                    </div>
                    <div className="footer_col">
                    <div className="dashborad-heading">
                        <h1 className='dashborad-main-heading'>Dubai Experiences</h1>
                    </div>
                    <ul>
                        <li>Desert Safari</li>
                        <li>Dhow Cruise Dinner</li>
                        <li>Dubai City Tour</li>
                        <li>Burj Khalifa Experience</li>
                        <li>Skydiving Over Palm Jumeirah</li>
                    </ul>
                    </div>

                    <div className="footer_col">
                    <div className="dashborad-heading">
                        <h1 className='dashborad-main-heading'>Abu Dhabi Experiences</h1>
                    </div>
                    <ul>
                        <li>Sheikh Zayed Grand Mosque</li>
                        <li>Ferrari World</li>
                        <li>Warner Bros World</li>
                        <li>Yas Waterworld</li>
                        <li>Abu Dhabi City Tour</li>
                    </ul>
                    </div>

                    <div className="footer_col">
                    <div className="dashborad-heading">
                        <h1 className='dashborad-main-heading'>Theme Parks & Adventures</h1>
                    </div>
                    <ul>
                        <li>IMG Worlds of Adventure</li>
                        <li>Dubai Parks & Resorts</li>
                        <li>Atlantis Aquaventure</li>
                        <li>Wild Wadi Waterpark</li>
                        <li>Global Village</li>
                    </ul>
                    </div>

                </div>
                <hr/>
                <div className="footer-bottom container">
                    <p>Copyright 2025 Acute Tourism. All rights reserved.</p>
                    <div className="links">
                        <p>Settings & Privacy</p>
                        <p>Faqs</p>
                        <p>Support</p>
                    </div>
                </div>
            </div>
        </footer>
    )
    
}