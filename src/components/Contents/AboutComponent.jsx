import { v4 as uuidv4 } from 'uuid';
const CardaboutComponent = (props) =>{
    return (
        <section >
        <div >
          <h3>{props.about.title}</h3>
          <div >
            <img src={props.about.imageme} alt=""></img>
            {props.about.aboutdetail.map((element)=>{
              return <p key={uuidv4()}>{...element} </p>
            })}
          </div>
        </div>
      </section>
    )
}
export default CardaboutComponent