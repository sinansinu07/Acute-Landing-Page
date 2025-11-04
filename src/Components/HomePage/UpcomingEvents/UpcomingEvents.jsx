import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoMdCall } from "react-icons/io";
import "./UpcomingEvents.scss";

import dubaiFrameNewYear from "../../../Assets/EventImages/dubai-frame-new-year.jpg";
import dubaiMarinaNewYear from "../../../Assets/EventImages/dubai-marina-new-year.webp";
import expoCityChristmas from "../../../Assets/EventImages/expo-city-chrstmas.jpg";
import festiveRiverlandChristmas from "../../../Assets/EventImages/festive-riverland-chritmas.jpg";
import globalVillageChristmas from "../../../Assets/EventImages/global-village-chritmas.jpg";
import globalVillageNewYear from "../../../Assets/EventImages/global-village-new-year.jpg";
import jumeirahNewYear from "../../../Assets/EventImages/Jumeirah-new-year.jpg";
import newYearAtGlobalVillage from "../../../Assets/EventImages/New-Year-at-Global-Village.jpg";
import skiDubaiChristmas from "../../../Assets/EventImages/ski-dubai-chritmas.webp";

const christmasEvents = [
    {
        id: 1,
        title: "Christmas at Expo City",
        location: "Expo City",
        image: expoCityChristmas,
    },
    {
        id: 2,
        title: "Festive Christmas at Riverland",
        location: "Riverland",
        image: festiveRiverlandChristmas,
    },
    {
        id: 3,
        title: "Christmas at Global Village",
        location: "Global Village",
        image: globalVillageChristmas,
    },
    {
        id: 4,
        title: "Christmas at Ski Dubai",
        location: "Ski Dubai",
        image: skiDubaiChristmas,
    },
];

const newYearEvents = [
    {
        id: 5,
        title: "New Year at Dubai Marina",
        location: "Dubai Marina",
        image: dubaiMarinaNewYear,
    },
    {
        id: 6,
        title: "New Year at Global Village",
        location: "Global Village",
        image: globalVillageNewYear,
    },
    {
        id: 7,
        title: "New Year Celebration at Global Village",
        location: "Global Village",
        image: newYearAtGlobalVillage,
    },
    {
        id: 8,
        title: "New Year at Jumeirah",
        location: "Jumeirah",
        image: jumeirahNewYear,
    },
    {
        id: 9,
        title: "New Year at Dubai Frame",
        location: "Dubai Frame",
        image: dubaiFrameNewYear,
    },
];

const handleContactScroll = () => {
    const contactSection = document.getElementById('contact-us');
    if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
    }
};

export default function UpcomingEvents() {
    const [christmasIndex, setChristmasIndex] = useState(0);
    const [newYearIndex, setNewYearIndex] = useState(0);

    // Auto-scroll for Christmas events
    useEffect(() => {
        const interval = setInterval(() => {
            setChristmasIndex((prevIndex) => 
                prevIndex === christmasEvents.length - 1 ? 0 : prevIndex + 1
            );
        }, 4000); // Change every 4 seconds

        return () => clearInterval(interval);
    }, []);

    // Auto-scroll for New Year events
    useEffect(() => {
        const interval = setInterval(() => {
            setNewYearIndex((prevIndex) => 
                prevIndex === newYearEvents.length - 1 ? 0 : prevIndex + 1
            );
        }, 4500); // Slightly different timing to avoid sync

        return () => clearInterval(interval);
    }, []);

    const slideVariants = {
        enter: {
            opacity: 0,
            scale: 1.1,
        },
        center: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.8,
                ease: "easeOut",
            },
        },
        exit: {
            opacity: 0,
            scale: 0.9,
            transition: {
                duration: 0.5,
            },
        },
    };

    return (
        <section className="upcoming-events-section section-container">
            <div className="events-banner-bg"></div>
            <div className="events-overlay"></div>
            
            <div className="upcoming-events">
                <motion.div 
                    className="heading-section"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="title">
                        <h1>Upcoming Events in Dubai</h1>
                    </div>
                    <div className="sub-title">
                        <h3>Experience the Magic of Christmas & New Year</h3>
                    </div>
                </motion.div>

                <div className="events-banner-container">
                    {/* Christmas Banner Box */}
                    <motion.div 
                        className="event-banner-box christmas-box"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        onClick={handleContactScroll}
                    >
                        <div className="banner-header">
                            <div className="banner-icon">🎄</div>
                            <h2 className="banner-title">Christmas Events</h2>
                        </div>
                        <div className="banner-image-wrapper">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={christmasIndex}
                                    variants={slideVariants}
                                    initial="enter"
                                    animate="center"
                                    exit="exit"
                                    className="banner-image-container"
                                >
                                    <img 
                                        src={christmasEvents[christmasIndex].image} 
                                        alt={christmasEvents[christmasIndex].title}
                                        className="banner-image"
                                    />
                                    <div className="banner-content-overlay">
                                        <h3 className="banner-event-title">
                                            {christmasEvents[christmasIndex].title}
                                        </h3>
                                        <p className="banner-event-location">
                                            {christmasEvents[christmasIndex].location}
                                        </p>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </motion.div>

                    {/* New Year Banner Box */}
                    <motion.div 
                        className="event-banner-box newyear-box"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        onClick={handleContactScroll}
                    >
                        <div className="banner-header">
                            <div className="banner-icon">🎆</div>
                            <h2 className="banner-title">New Year Events</h2>
                        </div>
                        <div className="banner-image-wrapper">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={newYearIndex}
                                    variants={slideVariants}
                                    initial="enter"
                                    animate="center"
                                    exit="exit"
                                    className="banner-image-container"
                                >
                                    <img 
                                        src={newYearEvents[newYearIndex].image} 
                                        alt={newYearEvents[newYearIndex].title}
                                        className="banner-image"
                                    />
                                    <div className="banner-content-overlay">
                                        <h3 className="banner-event-title">
                                            {newYearEvents[newYearIndex].title}
                                        </h3>
                                        <p className="banner-event-location">
                                            {newYearEvents[newYearIndex].location}
                                        </p>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </motion.div>
                </div>
{/* 
                <motion.div 
                    className="events-cta"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                > */}
                    <button 
                        className="btn btn-dark-brown"
                        onClick={handleContactScroll}
                    >
                        <span>Book Your Event Experience</span>
                        <IoMdCall />
                    </button>
                {/* </motion.div> */}
            </div>
        </section>
    );
}
