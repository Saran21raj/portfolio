import "./About.css";
import { useInView } from "react-intersection-observer";

function About(){
    const { ref:aboutref, inView:aboutisVisible} = useInView({
        threshold:0.5
    })
    return(
        <>
         <div ref={aboutref} className="aboutpage" id="about">
            <div className="about-words">
                <p className={`about-line ${aboutisVisible ? "about-line-animation" : ""}`}>Let me introduce myself</p>
                <div className="about-description">
                    <p className={`para ${aboutisVisible ? "para-animation" : ""}`}>Mission-driven full stack developer with a passion 
                        for building a product that solves problem with 
                        thoughtful UI design, creating intuitive, 
                        dynamic user experiences powered by strong backend.
                    </p>
                    <p className={`para ${aboutisVisible ? "para-animation" : ""}`}>My core competency lies in creating applications from 
                        its inception.I primarily work in MERN stack among 
                        the full stack technologies.
                    </p>
                    <p className={`para ${aboutisVisible ? "para-animation" : ""}`}>As a full stack developer, I enjoy using my obsessive 
                        attention to detail, my unequivocal love for making 
                        things, and my mission-driven work ethic to literally 
                        change the world.
                    </p>
                </div> 
            </div>
        </div>
        </>
    )
}


export default About;