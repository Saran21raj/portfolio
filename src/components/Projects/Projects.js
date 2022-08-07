import "./Projects.css";
import reacticon from "../images/react.svg";
import nodeicon from "../images/node-js.svg";
import mongodbicon from "../images/mongodb.svg";
import awsicon from "../images/aws.svg";
import expressicon from "../images/express.svg"



function Projects(){
    const projectDemo=({target})=>{
        switch(target.name){
            case "screenRecorder":{
                window.open("https://srscreenrecorder.netlify.app","_blank")
                break;
            }
            case "employeeManagement":{
                window.open("https://sremployeemanagement.netlify.app/","_blank")
                break;
            }
            case "diary":{
                window.open("https://srdiary.netlify.app/","_blank")
                break;
            }
            case "student":{
                window.open("https://srstudenttasksubmission.netlify.app/","_blank")
                break;
            }
            default:{
                break;
            }
        }
    }
    const frontEndCode=({target})=>{
        switch(target.name){
            case "screenRecorder":{
                window.open("https://github.com/Saran21raj/sr-recorder-frontend","_blank")
                break;
            }
            case "employeeManagement":{
                window.open("https://github.com/Saran21raj/sremployee-management-frontend","_blank")
                break;
            }
            case "diary":{
                window.open("https://github.com/Saran21raj/srdiary-frontend","_blank")
                break;
            }
            case "student":{
                window.open("https://github.com/Saran21raj/srstudenttask-frontend","_blank")
                break;
            }
            default:{
                break;
            }
        }
    }
    const backEndCode=({target})=>{
        switch(target.name){
            case "screenRecorder":{
                window.open("https://github.com/Saran21raj/srrecorder-backend","_blank")
                break;
            }
            case "employeeManagement":{
                window.open("https://github.com/Saran21raj/sremployee-management-backend","_blank")
                break;
            }
            case "diary":{
                window.open("https://github.com/Saran21raj/srdiary-backend","_blank")
                break;
            }
            case "student":{
                window.open("https://github.com/Saran21raj/srstudenttask-backend","_blank")
                break;
            }
            default:{
                break;
            }
        }
    }
    return(
        <>
        <div className="projectspage" id="projects">
            <div className="heading-container">
                <h1>Projects</h1>
            </div>
            <div className="projects-container">
                <div className="flip-card-outer1" >
                    <div className="flip-card-inner" id="flip-inner">
                        <div  className="project-inside-container">
                            <div className="project-outsidebox" >
                                <p className="project-title">ScreenRecorder Website</p>
                                <p className="project-description">A Screenrecording website which is used to record our screen in desktops and laptops.</p>
                                <p className="tech">Technologies used</p>
                                <div className="iconsdiv">
                                    <img src={reacticon} alt="react" className="project-icons"/>
                                    <img src={nodeicon} alt="node" className="project-icons"/>
                                    <img src={expressicon} alt="express" className="project-icons"/>
                                    <img src={mongodbicon} alt="mongodb" className="project-icons"/>
                                    <img src={awsicon} alt="aws" className="project-icons"/>
                                </div>
                            </div>
                        </div>
                        <div className="project-inside-container-flip">
                            <div className="project-outsidebox-flip" >
                                <p className="project-title-flip">ScreenRecorder Website</p>
                                <p className="tech">Technologies used</p>
                                <div className="iconsdiv">
                                    <img src={reacticon} alt="react" className="project-icons"/>
                                    <img src={nodeicon} alt="node" className="project-icons"/>
                                    <img src={expressicon} alt="express" className="project-icons"/>
                                    <img src={mongodbicon} alt="mongodb" className="project-icons"/>
                                    <img src={awsicon} alt="aws" className="project-icons"/>
                                </div>
                                <div className="btn-div" id="btn1">
                                    <button className="options-btn" name="screenRecorder" onClick={projectDemo}>Demo</button>
                                    <button className="options-btn" name="screenRecorder" onClick={frontEndCode}>Front end</button>
                                    <button className="options-btn" name="screenRecorder" onClick={backEndCode}>Back end</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flip-card-outer1">
                    <div className="flip-card-inner" id="flip-inner">
                        <div className="project-inside-container">
                            <div className="project-outsidebox">
                                <p className="project-title">Employee Management</p>
                                <p className="project-description">A website which is used to manage attendance and leave records of employees</p>
                                <p className="tech">Technologies used</p>
                                <div className="iconsdiv">
                                    <img src={reacticon} alt="react" className="project-icons"/>
                                    <img src={nodeicon} alt="node" className="project-icons"/>
                                    <img src={expressicon} alt="express" className="project-icons"/>
                                    <img src={mongodbicon} alt="mongodb" className="project-icons"/>
                                </div>
                            </div>
                        </div>
                        <div className="project-inside-container-flip">
                            <div className="project-outsidebox-flip">
                                <p className="project-title-flip">Employee Management</p>
                                <p className="tech">Technologies used</p>
                                <div className="iconsdiv">
                                    <img src={reacticon} alt="react" className="project-icons"/>
                                    <img src={nodeicon} alt="node" className="project-icons"/>
                                    <img src={expressicon} alt="express" className="project-icons"/>
                                    <img src={mongodbicon} alt="mongodb" className="project-icons"/>
                                </div>
                                <div className="btn-div" id="btn1">
                                    <button className="options-btn" name="employeeManagement" onClick={projectDemo}>Demo</button>
                                    <button className="options-btn" name="employeeManagement" onClick={frontEndCode}>Front end</button>
                                    <button className="options-btn" name="employeeManagement" onClick={backEndCode}>Back end</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flip-card-outer1">
                    <div className="flip-card-inner" id="flip-inner">
                        <div className="project-inside-container">
                            <div className="project-outsidebox">
                                <p className="project-title">Diary Website</p>
                                <p className="project-description">A website which is used to set upcoming events </p>
                                <p className="tech">Technologies used</p>
                                <div className="iconsdiv">
                                    <img src={reacticon} alt="react" className="project-icons"/>
                                    <img src={nodeicon} alt="node" className="project-icons"/>
                                    <img src={expressicon} alt="express" className="project-icons"/>
                                    <img src={mongodbicon} alt="mongodb" className="project-icons"/>
                                </div>
                            </div>
                        </div>
                        <div className="project-inside-container-flip">
                            <div className="project-outsidebox-flip">
                                <p className="project-title-flip">Diary Website</p>
                                <p className="tech">Technologies used</p>
                                <div className="iconsdiv">
                                    <img src={reacticon} alt="react" className="project-icons"/>
                                    <img src={nodeicon} alt="node" className="project-icons"/>
                                    <img src={expressicon} alt="express" className="project-icons"/>
                                    <img src={mongodbicon} alt="mongodb" className="project-icons"/>
                                </div>
                                <div className="btn-div" id="btn1">
                                    <button className="options-btn" name="diary" onClick={projectDemo}>Demo</button>
                                    <button className="options-btn" name="diary"  onClick={frontEndCode}>Front end</button>
                                    <button className="options-btn" name="diary" onClick={backEndCode}>Back end</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flip-card-outer1">
                    <div className="flip-card-inner" id="flip-inner">
                        <div className="project-inside-container">
                            <div className="project-outsidebox">
                                <p className="project-title">Student Task Submission Website</p>
                                <p className="project-description">A website which is used to set upcoming events </p>
                                <p className="tech">Technologies used</p>
                                <div className="iconsdiv">
                                    <img src={reacticon} alt="react" className="project-icons"/>
                                    <img src={nodeicon} alt="node" className="project-icons"/>
                                    <img src={expressicon} alt="express" className="project-icons"/>
                                    <img src={mongodbicon} alt="mongodb" className="project-icons"/>
                                </div>
                            </div>
                        </div>
                        <div className="project-inside-container-flip">
                            <div className="project-outsidebox-flip">
                                <p className="project-title-flip">Student Task Submission Website</p>
                                <p className="tech">Technologies used</p>
                                <div className="iconsdiv">
                                    <img src={reacticon} alt="react" className="project-icons"/>
                                    <img src={nodeicon} alt="node" className="project-icons"/>
                                    <img src={expressicon} alt="express" className="project-icons"/>
                                    <img src={mongodbicon} alt="mongodb" className="project-icons"/>
                                </div>
                                <div className="btn-div" id="btn1">
                                    <button className="options-btn" name="student" onClick={projectDemo}>Demo</button>
                                    <button className="options-btn" name="student"  onClick={frontEndCode}>Front end</button>
                                    <button className="options-btn" name="student" onClick={backEndCode}>Back end</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}


export default Projects;