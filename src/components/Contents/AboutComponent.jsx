
const CardaboutComponent = ({about}) =>{
    return (
        <section >
        <div >
          <h3>{about.title}</h3>
          <div >
            <img src={about.imageme} alt=""></img>
            {about.aboutdetail.map((element,index)=>{
              return <p key={index}>{...element} </p>
            })}
          </div>
        </div>
      </section>
    )
}
export default CardaboutComponent