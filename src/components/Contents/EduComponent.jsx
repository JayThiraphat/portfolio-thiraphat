const EduComponent = ({edu}) =>{
    return(
        <section >
        <div >
          <h3>{edu.title}</h3>
          <span>{edu.startendDate}</span>
          <ul >
            {edu.educationdetail.map((educationdetail,index) => (
                    <li key={index}><p>{educationdetail}</p></li>
            ))}
          </ul>
        </div>
      </section>
    )
}
export default EduComponent