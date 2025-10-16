import cvData from "../data/info"

export default function Experience() {

    const nibe = cvData.experience[0]
    return(
        <div className="experience section">
            <h4>Experience</h4>
            <div className="experience-header d-flex align-items-center g-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-right-fill" viewBox="0 0 16 16">
                                        <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
                                    </svg>

                                    <div className="project-header-text d-flex justify-content-between">
                                        <div className="project-title-ctn d-flex flex-column">
                                            <h5 className="mb-1">{nibe.title} </h5>
                                            <span className="institution fst-italic">{nibe.company}</span>
                                        </div>
                                        
                                        <span className="period fst-italic ps-5"> {`${nibe.location} //  ${nibe.period}`}</span>
                                    </div>
            </div>
            <ul className="details list-unstyled">
                {nibe.responsibilities.map((resp,i) => 
                    {
                        return(
                            <li className="detail" key={i}>
                                {resp}
                            </li>
                        )
                    }
                )}
            </ul>
            
            
        </div>
    )
}