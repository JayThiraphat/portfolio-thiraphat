import '../Project/ProjectComponent.css'
const ProjectComponent=({project})=>{
    return (
      <div>
        <section className='project' id="projects">
          <div className="card__project">
            <ul>
              <h3>{project.title}</h3>
                <p>{project.name}</p>
            </ul>
          </div>
      </section>
      </div>
        
    )
}
export default ProjectComponent