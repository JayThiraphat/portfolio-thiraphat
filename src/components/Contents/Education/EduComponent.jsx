import '../Education/EduComponent.css'
const EduComponent = ({edu}) =>{
    return(
        <section className="education" id="education">
        <div  className="card__edu">
            <h3 className="edu__title">{edu.title}</h3>
           
            <ul className='edu__detail'>
               <span >{edu.startendDate}</span>
              {edu.educationdetail.map((educationdetail,index) => (
                      <li className="edu__text" key={index}><p>{educationdetail}</p></li>
              ))}
            </ul>
        </div>
      </section>
    )
}
export default EduComponent