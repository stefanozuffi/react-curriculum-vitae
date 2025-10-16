import cvData from "../data/info";

export default function Skills() {
    return (
        <div className="skills section ">
            <div className="tech-skills section">
                <h4>Technical Skills</h4>
                <ul className="tech-list list-unstyled ps-2 section-body">

                    <li className="web-dev d-flex flex-column g-2 mb-2">
                        <strong className="mark">DEV</strong>
                            <div className="frontend ps-3">
                                <p><strong>FrontEnd:</strong>
                                {cvData.skills.webDevelopment.frontend.map((skill,i) => 
                                    <span className="tech-skill p-1" key={i}>
                                        {skill} 
                                    </span>
                                )}
                                </p>
                            </div>
                            <div className="backend ps-3">
                                <strong>BackEnd:</strong>
                                {cvData.skills.webDevelopment.backend.map((skill,i) => 
                                    <span className="tech-skill p-1" key={i}>
                                        {skill} 
                                    </span>
                                )}
                            </div>
                            <div className="learning ps-3">
                                <strong>Learning:</strong>
                                {cvData.skills.webDevelopment.learning.map((skill,i) => 
                                    <span className="tech-skill p-1" key={i}>
                                        {skill} 
                                    </span>
                                )}
                            </div>
                    </li>
                    
                    <li className="data-analysis d-flex flex-column g-2 mb-2">
                        <strong className="mark">DATA ANALYSIS</strong>
                        <div className="languages ps-3">
                            <strong>Languages:</strong>
                            {cvData.skills.dataAnalysis.languages.map((lang,i) => 
                                    <span className="tech-skill p-1" key={i}>
                                        {lang}
                                    </span>
                                )}
                        </div>

                        <div className="libraries ps-3">
                            <strong>Libraries:</strong>
                            {cvData.skills.dataAnalysis.libraries.map((lib,i) => 
                                    <span className="tech-skill p-1" key={i}>
                                        {lib}
                                    </span>
                                )}
                        </div>
                        <div className="tools ps-3">
                            <strong>Tools:</strong>
                            {cvData.skills.dataAnalysis.tools.map((skill,i) => 
                                    <span className="tech-skill p-1" key={i}>
                                        {skill}
                                    </span>
                                )}
                        </div>
                    </li>
                    <li className="other d-flex flex-column g-2">
                        <strong className="mark">OTHER</strong>
                        <span className="tech-skill ps-2">C++ (basic)</span>
                    </li>
                   
                </ul>
            </div>
            <div className="soft-skills section">
                <h4>Soft Skills</h4>
                <ul className="soft-list list-unstyled ps-2 section-body">
                    {cvData.softSkills.map((skill,i) => 
                        <li className="soft-skill mb-1" key={i}>
                            {skill}
                        </li>
                    )}
                </ul>
            </div>
            <div className="speaking section">
                <h4>Languages</h4>
                <ul className="languages-list list-unstyled ps-2 section-body">
                    <li>English (fluent)</li>
                    <li>Italian (native)</li>
                </ul>
            </div>

        </div>
    )
}