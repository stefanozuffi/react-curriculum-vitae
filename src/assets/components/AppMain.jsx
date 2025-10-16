import Education from "./Education";
import Profile from "./Profile";
import Skills from "./Skills";

export default function AppMain() {
    return(
        <>
            <div className="main d-flex justify-content-between">
                <div className="left-main d-flex flex-column g-2">
                    <Profile/>
                    <Skills/>
                </div>

                <div className="right-main">
                    <Education/>
                    
                </div>
            </div>
            
            
        </>
    )
}