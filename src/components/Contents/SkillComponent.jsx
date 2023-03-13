const SkillComponent=({skill})=>{
    return (
        <section >
        <ul>
        <h3>{skill.title}</h3>
              {skill.Detailskill.map((Detailskill,index) => (
                    <li key={index}><p>{Detailskill}</p></li>
                   ))}
             
        </ul>
      </section>
    )
}
export default SkillComponent