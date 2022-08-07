import emailImage from "../images/email.svg";
import locationImage from "../images/location.svg";
import githubImage from "../images/github.svg";
import linkedinImage from "../images/linkedin.svg";
import "./Contact.css";

function Contact(){
   
    return(
        <>
        <div  className="contactpage" id="contact">
            <div className="container">
                <div className="profile-container">
                    <div className="profile-inner-container">
                    <a href="mailto:saranraj21sr@gmail.com" className="contact-profile">
                        <img src={emailImage} alt="email" className="profile-page-icon"/> 
                    </a>
                    <a href="https://github.com/Saran21raj" className="contact-profile" target="_blank"  rel="noopener noreferrer">
                        <img src={githubImage} alt="github" className="profile-page-icon"/> 
                    </a>
                    <a href="https://www.linkedin.com/in/saranraj-s-93820819b" className="contact-profile" target="_blank" rel="noopener noreferrer">
                        <img src={linkedinImage} alt="linkedin" className="profile-page-icon"/> 
                    </a>
                    </div>
            </div>
    </div>
        </div>
        </>
    )
}


export default Contact;