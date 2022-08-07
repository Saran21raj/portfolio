import "./Home.css";
import developer from "../images/developer.svg";
import { useInView } from "react-intersection-observer";

function Home(){
    const { ref:myref, inView:isVisible} = useInView({
        threshold:0.5
    })
    return(
        <>
        <div  ref={myref} className="homepage" id="home">
            <div className="outerContainer">
                
                <div className="innerContainer-image">
                    <img src={developer} className={`image  ${isVisible ? "imageanimation" : ""}`} alt="Developer Illustration"/>
                </div>
                <div className="innerContainer-words">
                    <div className={`words  ${isVisible ? "wordsanimation" : ""}`}>
                        <p className="first-line">Hi</p>
                        <p className="second-line">I am</p>
                        <p className="third-line">Saran Raj</p>
                        <p className="last-line">FullStack Developer</p>
                    </div>
                    <a href="https://drive.google.com/file/d/1O8gCbTwcR2cFwp_XGOTqjKYQocu4Jx93/view?usp=sharing" target="_blank" rel="noopener noreferrer"><button className="resume">Get Resume</button></a>
                </div>
            </div>
        </div>
        </>
    )
}

export default Home;