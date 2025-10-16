import cvData from "../data/info";

export default function Projects() {
    return(
        <div className="projects section">
            <h4>Projects</h4>
            <ul className="ed-list list-unstyled ps-2 section-body">
                {cvData.projects.map(project => {
                    return(
                        <li className="course p-1" key={project.id}>
                            
                            <div className="course-header d-flex align-items-center g-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-right-fill" viewBox="0 0 16 16">
                                        <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
                                    </svg>

                                    <div className="course-header-text d-flex justify-content-between">
                                        <div className="title-ctn d-flex flex-column">
                                            <h5 className="mb-1">{course.degree} </h5>
                                            <span className="institution fst-italic">{course.institution}</span>
                                        </div>
                                        <span className="period fst-italic ps-5">{course.period}</span>
                                    </div>
                            </div>
                           
                           
                            <p className="ms-2 mb-1 fst-italic">{course.description}</p>
                            {course.details &&
                            <ul className="details list-unstyled">
                                {course.details.map((detail, i) => 
                                    <li className="detail ps-3" key={i}>
                                        {detail}
                                    </li>
                                )}
                            </ul>}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}