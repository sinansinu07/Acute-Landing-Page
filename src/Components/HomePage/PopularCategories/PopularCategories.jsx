import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import "./PopularCategories.scss"

import image1 from "../../../Assets/Activities/burj-khalifa-2.jpg"
import image2 from "../../../Assets/Activities/dessert-safari.jpg"
import image3 from "../../../Assets/Activities/IMG-world-adventure-fast-track.webp"
import image4 from "../../../Assets/Activities/louvre.jpeg"
import image5 from "../../../Assets/Activities/fly-board.jpg"
import image6 from "../../../Assets/Activities/loco-bear-entertainment-2.jpg"
import image7 from "../../../Assets/Activities/sky-dive-dubai.avif"
import image8 from "../../../Assets/Activities/yas-island-water-park.avif"
import image9 from "../../../Assets/Activities/vintage-car.jpg"
import image10 from "../../../Assets/Activities/hatta-wadi.webp"



export default function PopularCategories() {
    let swiperRef = null;

    const dubaiTourCategories = [
        {
            id: 1,
            name: "City Tour Dubai",
            city: "Dubai",
            description:
                "Explore Burj Khalifa, Dubai Marina, Palm Jumeirah, and the historic Creek with a private, luxury city tour experience.",
            isFeatured: true,
            image: image1,
        },
        {
            id: 2,
            name: "Desert Safari Dubai",
            city: "Dubai",
            description:
                "Experience thrilling dune bashing, camel rides, sandboarding, and a mesmerizing Arabian night with BBQ dinner and live shows.",
            isFeatured: true,
            image: image2,
        },
        {
            id: 3,
            name: "Adventure Tours",
            city: "Dubai",
            description:
                "Dive into adrenaline-packed experiences including ziplining at Dubai Marina, jet-skiing, quad biking, and hot air balloon rides.",
            isFeatured: false,
            image: image3,
        },
        {
            id: 4,
            name: "Cultural Tours",
            city: "Dubai",
            description:
                "Discover Dubai’s rich heritage at Al Fahidi Historical District, traditional souks, and museums that tell the story of old Dubai.",
            isFeatured: false,
            image: image4,
        },
        {
            id: 5,
            name: "Water Activities",
            city: "Dubai",
            description:
                "Enjoy jet-skiing, yacht cruises, parasailing, and waterparks for an unforgettable day of fun and relaxation on Dubai’s coast.",
            isFeatured: false,
            image: image5,
        },
        {
            id: 6,
            name: "Entertainment Shows",
            city: "Dubai",
            description:
                "Experience world-class entertainment from La Perle and Dubai Opera to the Fountain Show and dazzling night attractions.",
            isFeatured: false,
            image: image6,
        },
        {
            id: 7,
            name: "Sky Experiences",
            city: "Dubai",
            description:
                "Take your adventure to new heights with helicopter tours, skydiving over Palm Jumeirah, and panoramic city views from the skies.",
            isFeatured: false,
            image: image7,
        },
        {
            id: 8,
            name: "Theme & Water Parks",
            city: "Dubai",
            description:
                "Spend a fun-filled day at Dubai Parks and Resorts, IMG Worlds of Adventure, or Aquaventure for unforgettable family memories.",
            isFeatured: false,
            image: image8,
        },
        {
            id: 9,
            name: "Land Excursions",
            city: "Dubai",
            description:
                "Embark on scenic land adventures including Hatta Mountain tours, desert drives, and off-road experiences around Dubai’s landscapes.",
            isFeatured: false,
            image: image9,
        },
        {
            id: 10,
            name: "Luxury Tours",
            city: "Dubai",
            description:
                "Indulge in exclusive private tours, VIP experiences, and luxury yacht cruises designed for elite travelers seeking perfection.",
            isFeatured: true,
            image: image10,
        },
      ];
      

    return (
        <section>
            <div className="popular-activities section-container">
                <div className="heading-section">
                    <div className="title">
                        <h1>Popular Tour Activities</h1>
                    </div>
                    <div className="sub-title">
                        <h3>Feel Real Adventure and Very Colse to Nature</h3>
                    </div>
                </div>
                <Swiper
                    spaceBetween={20}
                    slidesPerView={4}  // Default number of slides per view
                    loop={true}
                    speed={500}
                    effect="coverflow"
                    grabCursor={true}
                    autoplay={{
                        delay: 2000,  // Adjust scrolling speed
                        disableOnInteraction: false,  // Keeps autoplay running after user interaction
                    }}
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: false, 
                    }}
                    pagination={{ el: '.swiper-pagination', clickable: true }}
                    navigation={{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                        clickable: true,
                    }}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="categories-grid-container"
                    onSwiper={(swiper) => (swiperRef = swiper)}
                    breakpoints={{
                        2100: {
                            slidesPerView: 6,  // 5 slides per view for very large screens
                        },
                        1700: {
                            slidesPerView: 5,  // 4 slides per view when width is >= 1400px
                        },
                        1300: {
                            slidesPerView: 4,  // 3 slides per view when width is >= 1100px
                        },
                        1000: {
                            slidesPerView: 3,  // 1 slide per view when width is >= 600px
                            spaceBetween: 100,
                        },
                        700: {
                            slidesPerView: 2,  // 1 slide per view for very small screens
                            spaceBetween: 100,
                        },
                        450: {
                            slidesPerView: 1,  // 1 slide per view for even smaller screens
                        },
                        300: {
                            slidesPerView: 1,  // 1 slide per view for even smaller screens
                        },
                    }}
                >
                {/* <div className="popular-section-grid"> */}
                    {dubaiTourCategories.map((service) => {
                        return (
                            <SwiperSlide 
                                key={service?.id}
                                onMouseEnter={() => swiperRef?.autoplay.stop()}
                                onMouseLeave={() => swiperRef?.autoplay.start()}
                                >
                                <div 
                                    className="categories-grid-item"
                                    key={service?.id}>
                                    <img src={service?.image} alt=""/>
                                    <div className="overlay">
                                        <div className="overlay-content">
                                            <h1 className="item-title">{service?.name}</h1>
                                            <p className="item-description">{service?.description}</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        )
                    })}
                    <div className="slider-controler">
                        <div className="swiper-button-prev slider-arrow">
                        <ion-icon name="arrow-forward-outline"></ion-icon>
                        </div>
                        <div className="swiper-button-next slider-arrow">
                        <ion-icon name="arrow-forward-outline"></ion-icon>
                        </div>
                        {/* <div className="swiper-pagination"></div> */}
                    </div>
                </Swiper>
                {/* </div> */}
            </div>
        </section>
    )
}