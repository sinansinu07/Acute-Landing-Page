import { Fragment } from "react";
import HomeHero from "../Components/HomePage/HomeHero/HomeHero";
import Stats from "../Components/Common/Stats/Stats";
import ContactForm from "../Components/Common/ContactForm/ContactForm";
import Helmet from "../General/Helmet";
// import { initHomePageScripts } from "../Utils/scripts";
import HomeAboutUs from "../Components/HomePage/HomeAboutUs/HomeAboutUs";
import QuickContact from "../Components/Common/QuickContact/QuickContact";
import Testimonials from "../Components/HomePage/Testimonials/Testimonials";
import PopularActivities from "../Components/HomePage/PopularActivities/PopularActivities";
import PopularCategories from "../Components/HomePage/PopularCategories/PopularCategories";
import UpcomingEvents from "../Components/HomePage/UpcomingEvents/UpcomingEvents";

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
            <UpcomingEvents/>
            <PopularCategories/>
            <QuickContact/>
            <PopularActivities/>
            {/* <Stats/> */}
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