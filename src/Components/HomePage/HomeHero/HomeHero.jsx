import { useState } from "react"
import { motion } from "framer-motion"

import "./HomeHero.scss"

import herobanner1 from "../../../Assets/Gallery/abra-2.webp"
import herobanner2 from "../../../Assets/Gallery//ain-dubai-observation-wheel.webp"
import herobanner3 from "../../../Assets/Gallery/dessert-safari-dune.jpg"
import herobanner4 from "../../../Assets/Gallery/ferrari-world3.jpg"
import herobanner5 from "../../../Assets/Gallery/xclusive-dinner-cruise.jpg"

import { RiArrowLeftWideLine, RiArrowRightWideLine } from "react-icons/ri"

export default function HomeHero() {
    const images = [herobanner1, herobanner2, herobanner3, herobanner4, herobanner5];
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    const travelDestinations = [
        {
          title: "Pick the Best City for Your Luxury Travel Destination",
          description: "Find the ideal city for luxury travel that matches your dreams, whether it's for adventure, relaxation, or exploration. Let your journey begin in the perfect destination!"
        },
        {
          title: "Discover the Perfect Luxury Getaway for Your Holiday",
          description: "Escape to a luxury travel destination that suits your holiday mood, from serene beaches to vibrant cities. Make unforgettable memories in your dream vacation spot!"
        },
        {
            title: "Experience the Magic of a Luxury Desert Safari",
            description: "Venture into the golden sands for a luxury desert safari, where thrilling dune bashing, camel rides, and starry nights await. A journey like no other!"
        },
        {
          title: "Embark on the Ultimate Luxury Adventure Trip",
          description: "Experience the thrill of adventure travel with breathtaking landscapes, adrenaline-filled activities, and unforgettable moments. Your next great journey starts here!"
        },
        {
          title: "Sail Away on an Unforgettable Luxury Cruise & Yacht Trip",
          description: "Indulge in luxury travel and serenity as you cruise through stunning waters, exploring hidden gems and exotic locations. Let the ocean be your ultimate escape!"
        }
      ];
      

    const variants = {
        enter: (direction) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0,
        }),
        center: {
            x: 0,
            opacity: 1,
            transition: { duration: 0.8 },
        },
        exit: (direction) => ({
            x: direction > 0 ? -1000 : 1000,
            opacity: 0,
            transition: { duration: 0.8 },
        }),
    };

    const textVariants = {
        initial: {
            y: 100,
            opacity: 0,
        },
        animate: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 1,
                ease: "easeOut",
                staggerChildren: 0.3, // Stagger the children by 0.3s
            },
        },

        initial2: {
            y: 50,
            opacity: 0,
        },
        animate2: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 1,
                ease: "easeOut",
                staggerChildren: 0.3, // Stagger the children by 0.3s
            },
        },
      } 

    const handlePrev = () => {
        setDirection(-1); // Set direction for the animation
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setDirection(1); // Set direction for the animation
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    const handleDotClick = (index) => {
        setDirection(index > currentIndex ? 1 : -1);
        setCurrentIndex(index);
    };
    return (
        <section className="home-hero-section">
            <div className="home-hero">
                <motion.div
                    // key={currentIndex}
                    className="banner-wrapper"
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    >
                    <img src={images[currentIndex]} alt="Club Banner" className="banner" />
                </motion.div>
                <div className="overlay"></div>
                <RiArrowLeftWideLine className="arrow-left" onClick={handlePrev}/>
                <RiArrowRightWideLine  className="arrow-right" onClick={handleNext}/>
                <motion.div 
                    variants={textVariants}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: false, amount: 0.5 }}
                    key={currentIndex}
                    className="hero-content section-container">
                        <h1 className="title">{travelDestinations[currentIndex].title}</h1>
                        <p className="description">{travelDestinations[currentIndex].description}</p>

                </motion.div>
                <div className="pagination-dots">
                    {images.map((_, index) => (
                        <div
                            key={index}
                            className={`dot ${index === currentIndex ? "active" : ""}`}
                            onClick={() => handleDotClick(index)}
                        ></div>
                    ))}
                </div>
            </div>
        </section>
    )
}