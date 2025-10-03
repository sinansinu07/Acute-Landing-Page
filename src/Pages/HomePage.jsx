import { Fragment, useEffect } from "react";
import HomeHero from "../Components/HomePage/HomeHero/HomeHero";
import Stats from "../Components/Common/Stats/Stats";
import Activities from "../Components/Common/Activities/Activities";
import ContactForm from "../Components/Common/ContactForm/ContactForm";
import AboutUsSection from "../Components/HomePage/AboutUsSection/AboutUsSection";
import Amenities from "../Components/HomePage/Amenities/Amenities";
import Gallery from "../Components/Common/Gallery/Gallery";
import Pricing from "../Components/Common/Pricing/Pricing";
import Helmet from "../General/Helmet";
// import { initHomePageScripts } from "../Utils/scripts";
import HomeAboutUs from "../Components/HomePage/HomeAboutUs/HomeAboutUs";
import QuickContact from "../Components/Common/QuickContact/QuickContact";
import Testimonials from "../Components/HomePage/Testimonials/Testimonials";

export default function HomePage() {
    // useEffect(() => {
    //     const cleanup = initHomePageScripts();
    //     return cleanup;
    // }, []);

    return (
        <Fragment>
            <Helmet title="Acute Tourism | Luxury Travel and Tourism" />
            <HomeHero/>
            <HomeAboutUs/>
            <QuickContact/>
            <Stats/>
            <ContactForm/>
            <Testimonials/>
            {/* <AboutUsSection/>
            <ContactForm/>
            <Amenities/>
            <Stats/>
            <Pricing/>
            <Activities/>
            <Gallery/> */}
        </Fragment>
    )
}