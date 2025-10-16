import cvData from "../data/info";

export default function Projects() {
    return(
        <div className="projects section">
            <h4>Projects</h4>
            <ul className="ed-list list-unstyled ps-2 section-body">
                {cvData.projects.map(project => {
                    return(
                        <li className="project p-1" key={project.id}>
                            
                            <div className="project-header d-flex align-items-center g-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-right-fill" viewBox="0 0 16 16">
                                        <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
                                    </svg>

                                    <div className="project-header-text d-flex justify-content-between">
                                        <div className="project-title-ctn d-flex flex-column">
                                            <h5 className="mb-1">{project.name} </h5>
                                            <a href={project.github} className="institution fst-italic">{project.github}</a>
                                        </div>
                                        <span className="period fst-italic ps-5">initialized: {project.init}</span>
                                    </div>
                            </div>
                           
                           
                            <p className="project-description ms-2 mb-1 fst-italic">{project.description}</p>
                            
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}