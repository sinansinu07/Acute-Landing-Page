import "./PopularActivities.scss"

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { IoMdCall } from "react-icons/io";

import image1 from "../../../Assets/Activities/museum-of-the-future.webp"
import image2 from "../../../Assets/Activities/evening-desert-safari.jpeg"
import image3 from "../../../Assets/Activities/Private-Balloon-Flights.jpg"
import image4 from "../../../Assets/Activities/helicoptor-tour.jpg"
import image5 from "../../../Assets/Activities/atlantis-aquaventure.webp"
import image6 from "../../../Assets/Activities/quad-biking-safari.jpeg"
import image7 from "../../../Assets/Activities/dhow-Cruise-Dinner-Marina.jpg"
import image8 from "../../../Assets/Activities/abudhabi-banner.webp"
import image9 from "../../../Assets/Gallery/ferrari-world3.jpg"
import image10 from "../../../Assets/Activities/dune-buggy-dubai.jpeg"
import image11 from "../../../Assets/Activities/wild-wadi-waterpark-hd.webp"
import image12 from "../../../Assets/Activities/overnight-desert-stay-in-abu-dhabi.webp"



const tourActivities = [
    {
      id: 1,
      name: "Full Day Explore Dubai City Tour",
      category: "City Tour Dubai",
      city: "Dubai",
      image: image1,
      price: 275,
    },
    {
      id: 2,
      name: "Desert Safari Dubai VIP",
      category: "Desert Safari",
      city: "Dubai",
      image: image2,
      price: 600,
    },
    {
      id: 3,
      name: "Exotic Sunrise Hot Air Balloon With Breakfast",
      category: "Sky Experiences",
      city: "Dubai",
      image: image3,
      price: 899,
    },
    {
      id: 4,
      name: "Helicopter Ride 12 Minutes",
      category: "Sky Experiences",
      city: "Dubai",
      image: image4,
      price: 715,
    },
    {
      id: 5,
      name: "Atlantis Aquaventure Park",
      category: "Theme & Water Parks",
      city: "Dubai",
      image: image5,
      price: 395,
    },
    {
      id: 6,
      name: "Desert Quad Bike",
      category: "Adventure Tours",
      city: "Dubai",
      image: image6,
      price: 500,
    },
    {
      id: 7,
      name: "Dinner Cruise with Acute",
      category: "Water Activities",
      city: "Dubai",
      image: image7,
      price: 249,
    },
    {
      id: 8,
      name: "Full Day Abu Dhabi City Tour",
      category: "City Tour Abu Dhabi",
      city: "Abu Dhabi",
      image: image8,
      price: 175,
    },
    {
        id: 9,
        name: "Ferrari World Abu Dhabi",
        category: "Theme & Water Parks",
        city: "Abu Dhabi",
        image: image9,
        price: 345,
      },
      {
        id: 10,
        name: "Polaris Buggy 4 Seater 1000 CC",
        category: "Adventure Tours",
        city: "Dubai",
        image: image10,
        price: 1250,
      },
      {
        id: 11,
        name: "Wild Wadi Water Park",
        category: "Theme & Water Parks",
        city: "Dubai",
        image: image11,
        price: 330,
      },
      {
        id: 12,
        name: "Desert Safari Dubai Deluxe",
        category: "Desert Safari",
        city: "Dubai",
        image: image12,
        price: 200,
      },
  ];
  

export default function PopularActivities() {
    return (
        <section>
            <div className="popular-services section-container">
                <div className="heading-section">
                    <div className="title">
                        <h1>Popular Adventures Tours</h1>
                    </div>
                    <div className="sub-title">
                        <h3>Amazing Adventure Camping Services<br/> for Enjoyed</h3>
                    </div>
                </div>
                <div className="services-section-grid">
                    {tourActivities.map((service) => {
                        return (
                            // <SwiperSlide key={service?.id}>
                                <div 
                                    className="services-grid-item"
                                    key={service?.id}
                                >
                                    {/* <div className="overlay"></div> */}
                                    <div className="item-image-div">
                                        {/* <div className="read-more"><LuMoveRight /></div> */}
                                        <img 
                                        src={service?.image} 
                                        alt={service?.name || service?.title || "SAM Luxury TourismPopular activity image"} 
                                        />
                                    </div>
                                    <div className="item-content">
                                        <h1 className="item-name">{service?.name}</h1>
                                        <p className="item-price"> AED {service.price}</p>
                                        <div className="add-to-cart"><IoMdCall /></div>
                                        {/* <p className="item-description">{service?.description}</p> */}
                                        {/* <div className="item-icons">
                                            <IoFastFood />
                                            <GiSittingDog />
                                            <GiCampingTent />
                                            <GiCampfire />
                                        </div> */}
                                    </div>
                                </div>
                            // </SwiperSlide>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}