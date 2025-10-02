import { useState } from "react";
import { TextField, MenuItem } from '@mui/material';
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";
import "./ContactForm.scss";
import bg from "../../../Assets/Gallery/ain-dubai-observation-wheel.webp";
// import icons1 from "../../../Assets/Icons/icon4.png";
// import icons2 from "../../../Assets/Icons/icon8.png";
// import icons3 from "../../../Assets/Icons/icon14.png";
// import icons4 from "../../../Assets/Icons/icon9.png";
import PhoneInput from "react-phone-input-2"
import "react-phone-input-2/lib/style.css";
import { MdNightlife, MdTravelExplore } from "react-icons/md";
import { PiParkFill } from "react-icons/pi";
import { GiDesert } from "react-icons/gi";

const PUBLIC_KEY = "PKoR53EHJAUqG_BLQ";
const SERVICE_ID = "service_g654l6k";
const TEMPLATE_ID = "template_lpssnjq";

export default function ContactForm() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        message: '',
        service: '',
    });

    const [formErrors, setFormErrors] = useState({});
    const [response, setResponse] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const errors = {};

    const validateErrors = () => {
        if (formData?.firstName?.trim()?.length === 0) errors.firstName = "First Name is Required";
        if (formData?.lastName?.trim()?.length === 0) errors.lastName = "Last Name is Required";
        if (formData?.phone?.trim()?.length === 0) errors.phone = "Phone No is Required";
        if (formData?.email?.trim()?.length === 0) errors.email = "Email is Required";
        // if (formData?.service?.trim()?.length === 0) errors.service = "Please select a service";
        if (formData?.message?.trim()?.length === 0) errors.message = "Message is Required";
    };

    const handleUpdate = (field) => (event) => {
        const inputValue = event.target.value;
        setFormData((prev) => ({ ...prev, [field]: inputValue }));
    };

    const sendContactFormEmail = async (formData) => {
        const templateParams = {
            name: formData.name,
            phone: formData.phone,
            email: formData.email,
            message: formData.message,
            time: new Date().toLocaleString(),
            // service: formData.service,
        };

        try {
            setIsLoading(true);
            const response = await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
            console.log("Email sent successfully!", response);
            setResponse("Email sent successfully!");
            navigate("/thank-you");
        } catch (error) {
            console.error("Email sending error:", error);
            setResponse("Email sending error");
        } finally {
            setIsLoading(false);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        validateErrors();

        if (Object.keys(errors).length === 0) {
            sendContactFormEmail(formData);
            setFormData({
                firstName: "",
                lastName: "",
                phone: "+971",
                email: "",
                message: "",
                service: "",
            });
            setFormErrors({});
        } else {
            console.log(errors);
            setFormErrors(errors);
        }
    };

    return (
        <section id="contact-us">
            <div className="contact-form-section">
                <img className="bg-img" src={bg} alt="" />
                <div className="overlay"></div>
                <div className="contact-content section-container">
                    <div className="contact-info">
                    <h1 className="main-title">Over 20 Years of<br /> Creating Unforgettable Journeys</h1>
                    <p className="description">
                        Acute Tourism offers authentic Dubai and Abu Dhabi experiences — from desert adventures 
                        to cultural explorations and world-class attractions. With trusted expertise and personalized 
                        service, we make every trip truly memorable.
                    </p>

                    <div className="key-points">
                        <div className="point">
                        <div className="point-icon">
                            <GiDesert />
                        </div>
                        <div className="point-text">
                            <h4>Desert Adventures</h4>
                            <p>Dune bashing, camel rides & desert safaris</p>
                        </div>
                        </div>

                        <div className="point">
                        <div className="point-icon">
                            <MdTravelExplore />
                        </div>
                        <div className="point-text">
                            <h4>City Tours</h4>
                            <p>Discover Dubai & Abu Dhabi’s iconic landmarks</p>
                        </div>
                        </div>

                        <div className="point">
                        <div className="point-icon">
                        <PiParkFill />
                        </div>
                        <div className="point-text">
                            <h4>Theme Parks</h4>
                            <p>Ferrari World, IMG, Atlantis Aquaventure & more</p>
                        </div>
                        </div>

                        <div className="point">
                        <div className="point-icon">
                        <MdNightlife />
                        </div>
                        <div className="point-text">
                            <h4>Luxury Experiences</h4>
                            <p>Dhow cruises, yacht rentals & premium tours</p>
                        </div>
                        </div>
                    </div>
                    </div>
                    <form onSubmit={handleSubmit} className="contact-form">
                        <h1 className="title">Do you have any Questions?</h1>
                        <p className="form-description">We will use the information to contact you ASAP! Thank you.</p>
                        {/* 
                        <TextField label="First Name" variant="outlined" value={formData.firstName} onChange={handleUpdate('firstName')} fullWidth className="form-field" required />
                        {formErrors.firstName && <div className="error-message">{formErrors.firstName}</div>} */}

                        <TextField label="Name" variant="outlined" value={formData.name} onChange={handleUpdate('name')} fullWidth className="form-field" required />
                        {formErrors.name && <div className="error-message">{formErrors.name}</div>}
                        
                        <PhoneInput
                            country={"ae"}
                            value={formData.phone}
                            onChange={(phone) => {
                                setFormData((prev) => ({ ...prev, phone })); // save full phone like +971xxxxxxxxx
                            }}
                            inputProps={{
                                name: "phone",
                                required: true,
                            }}
                            // ---- STYLES TO MATCH MUI TEXTFIELD ----
                            inputStyle={{
                                width: "100%",
                                height: "56px", // same as MUI default height
                                borderRadius: "20px",
                                border: "1px solid rgba(255, 255, 255, 0.3)",
                                backgroundColor: "transparent",
                                color: "white",
                                paddingLeft: "50px", // space for flag dropdown
                                fontSize: "16px",
                                fontFamily: '"Oswald", sans-serif',
                            }}
                            buttonStyle={{
                                border: "none",
                                backgroundColor: "transparent",
                                borderRight: "1px solid rgba(255, 255, 255, 0.3)",
                                borderRadius: "20px 0 0 20px",
                            }}
                            containerStyle={{
                                width: "100%",
                            }}
                            dropdownStyle={{
                                backgroundColor: "black", // dropdown background
                                color: "white", // text color
                                borderRadius: "10px",
                                border: "1px solid rgba(255,255,255,0.2)",
                            }}
                            searchStyle={{
                                backgroundColor: "black",
                                color: "white",
                                border: "1px solid rgba(255,255,255,0.2)",
                            }}
                        />

                        {formErrors.phone && <div className="error-message">{formErrors.phone}</div>}

                        <TextField label="Email" variant="outlined" value={formData.email} onChange={handleUpdate('email')} fullWidth className="form-field" required />
                        {formErrors.email && <div className="error-message">{formErrors.email}</div>}

                        {/* <TextField select label="Service" variant="outlined" value={formData.service} onChange={handleUpdate('service')} fullWidth className="form-field" required>
                            <MenuItem value="Website Development">Website Development</MenuItem>
                            <MenuItem value="Digital Marketing">Digital Marketing</MenuItem>
                            <MenuItem value="Digital Branding">Digital Branding</MenuItem>
                            <MenuItem value="Presentation Design(PPT)">Presentation Design (PPT)</MenuItem>
                            <MenuItem value="Podcast Production">Podcast Production</MenuItem>
                            <MenuItem value="Media Production">Media Production</MenuItem>
                            <MenuItem value="Drone Production">Drone Production</MenuItem>
                        </TextField> */}
                        {/* {formErrors.service && <div className="error-message">{formErrors.service}</div>} */}

                        <TextField label="Message" variant="outlined" multiline rows={4} value={formData.message} onChange={handleUpdate('message')} fullWidth className="form-field" required />
                        {formErrors.message && <div className="error-message">{formErrors.message}</div>}

                        <button type="submit" className="btn btn-navy-blue" disabled={isLoading}>
                            {isLoading ? 'Sending...' : 'Submit'}
                        </button>
                        {response && <span className="form-response">{response}</span>}
                    </form>
                </div>
            </div>
        </section>
    );
}
