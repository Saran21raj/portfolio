import Header from "../Header/Header";
import Home from "../Home/Home";
import About from "../About/About";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact"
import "./MainPage.css"
import Skills from "../Skills/Skills";

function Mainpage(){
    return(
        <>
        <div className="main-page">
            <Header/>
            <Home/>
            <About/>
            <Skills/>
            <Projects/>
            <Contact/>
        </div>
        </>
    )
}


export default Mainpage;