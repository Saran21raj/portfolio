import htmlicon from "../images/html5.svg";
import cssicon from "../images/css3.svg";
import javascripticon from "../images/javascript.svg";
import reacticon from "../images/react.svg";
import nodeicon from "../images/node-js.svg";
import mongodbicon from "../images/mongodb.svg";
import awsicon from "../images/aws.svg";
import bootstrapicon from "../images/bootstrap.svg";
import expressicon from "../images/express.svg";
import "./Skills.css";

function Skills(){
    return(
    <>
        <div className="skillspage" id="skills">
            <div className="skills-main-container">
                <div className="heading-container">
                    <h1>Skills</h1>
                </div>
                <div className="skills-container">
                    <div className="skills-inner-container">
                        <img src={htmlicon} alt="html" className="skillsicon"/>
                    </div>
                    <div className="skills-inner-container">
                        <img src={cssicon} alt="css" className="skillsicon"/>
                    </div>
                    <div className="skills-inner-container">
                        <img src={javascripticon} alt="js" className="skillsicon"/>
                    </div>
                    <div className="skills-inner-container">
                        <img src={reacticon} alt="react" className="skillsicon"/>
                    </div>
                    <div className="skills-inner-container">
                        <img src={nodeicon} alt="node" className="skillsicon"/>
                    </div>
                    <div className="skills-inner-container">
                        <img src={expressicon} alt="aws" className="skillsicon"/>
                    </div>
                    <div className="skills-inner-container">
                        <img src={mongodbicon} alt="mongodb" className="skillsicon"/>
                    </div>
                    <div className="skills-inner-container">
                        <img src={awsicon} alt="aws" className="skillsicon"/>
                    </div>
                    <div className="skills-inner-container">
                        <img src={bootstrapicon} alt="aws" className="skillsicon"/>
                    </div>
                    
                </div>
                {/* <div className="skills-container">
                    <div className="coding-love">
                        <div className="skill-name">
                            <h3>♥ Love for Programming - Advanced</h3>
                        </div> 
                        <div className="skill-progressbar">
                            <div className="advanced"></div>
                        </div>
                    </div>
                    <div className="skill">
                        <div className="skill-name">
                            <h3>Javascript - Intermediate</h3>
                        </div>
                        <div className="skill-progressbar">
                            <div className="intermediate"></div>
                        </div>
                    </div>
                    <div className="skill">
                        <div className="skill-name">
                            <h3>C Programming - Intermediate</h3>
                        </div>
                        <div className="skill-progressbar">
                            <div className="intermediate"></div>
                        </div>
                    </div>
                    <div className="skill">
                        <div className="skill-name">
                            <h3>HTML5 - Intermediate</h3>
                        </div>
                        <div className="skill-progressbar">
                            <div className="intermediate"></div>
                        </div>
                    </div>
                    <div className="skill">
                        <div className="skill-name">
                            <h3>CSS3 - Intermediate</h3>
                        </div>
                        <div className="skill-progressbar">
                            <div className="intermediate"></div>
                        </div>
                    </div>
                    <div className="skill">
                        <div className="skill-name">
                            <h3>MYSQL - Intermediate</h3>
                        </div>
                        <div className="skill-progressbar">
                            <div className="intermediate"></div>
                        </div>
                    </div>
                    <div className="skill">
                        <div className="skill-name">
                            <h3>MongoDB - Intermediate</h3>
                        </div>
                        <div className="skill-progressbar">
                            <div className="intermediate"></div>
                        </div>
                    </div>
                    <div className="skill">
                        <div className="skill-name">
                            <h3>Express.js - Intermediate</h3>
                        </div>
                        <div className="skill-progressbar">
                            <div className="intermediate"></div>
                        </div>
                    </div>
                    <div className="skill">
                        <div className="skill-name">
                            <h3>Node.js - Intermediate</h3>
                        </div>
                        <div className="skill-progressbar">
                            <div className="intermediate"></div>
                        </div>
                    </div>
                    <div className="skill">
                        <div className="skill-name">
                            <h3>React.js - Intermediate</h3>
                        </div>
                        <div className="skill-progressbar">
                            <div className="intermediate"></div>
                        </div>
                    </div>
                    <div className="skill">
                        <div className="skill-name">
                            <h3>Bootstrap - Advanced</h3>
                        </div>
                        <div className="skill-progressbar">
                            <div className="advanced"></div>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    </>
    )
}


export default Skills;