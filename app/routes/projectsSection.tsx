export const projectsSection = (projects: any) => {
    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div className="content-container reversed">
                    <div className="flex-6">
                    <h2 className="darker-text text-right">
                        And I've built stuff!
                    </h2>
                </div>
                <div className="flex-6">
                    {projects.map((project: any) => projectSubsection(project))}
                </div>
            </div>
        </div>
    )
}

const projectSubsection = (project: any) => {
    return (
        <div key={project._id}>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <p>Link: <a href={project.link}>{project.link}</a></p>
            <p>Github: <a href={project.github}>{project.github}</a></p>
            <h4>Stack:</h4>
            <ul>
                {project.stack.map((tech: string, index: number) => (
                    <li key={index}>{tech}</li>
                ))}
            </ul>
        </div>
    );
}