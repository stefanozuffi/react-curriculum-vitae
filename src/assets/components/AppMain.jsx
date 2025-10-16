import Education from "./Education";
import Experience from "./Experience";
import Profile from "./Profile";
import Projects from "./Projects";
import Skills from "./Skills";

export default function AppMain() {
    return(
        <>
            <div className="main d-flex justify-content-between">
                <div className="left-main d-flex flex-column g-2">
                    <Profile/>
                    <Skills/>
                </div>

                <div className="right-main d-flex flex-column justify-content-between">
                    <Education/>
                    <Projects/>
                    <Experience/>
                    
                </div>
            </div>
            
            
        </>
    )
}