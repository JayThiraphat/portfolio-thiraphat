import '../Skill/SkillComponent.css'
const SkillComponent=({skill})=>{
    return (
        <section className='skill' id="skills">
          <div className="card__skill">
            <ul>
            <h3 className="skill__title">{skill.title}</h3>
                  {skill.Detailskill.map((Detailskill,index) => (
                        <li className="skill__detail" key={index}><p>{Detailskill}</p></li>
                      ))}
            <li className="skill__git">
              <img className="skill__img" src={skill.imggit} alt={skill.linkgit} />
              <a className="skill__link" href={skill.linkgit} >{skill.linkgit} </a>
            </li>
                
            </ul>
        </div>
      </section>
    )
}
export default SkillComponent