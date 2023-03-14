
import '../About/AboutComponent.css'
const CardaboutComponent =({about})=>{
    return (
        <section className='about' id="about">
        <div className='card__about'>
            <h3 className='card__abouth3'>{about.title}</h3>
            <div className="card__aboutdetail">
              <img className='card__img' src={about.imageme} alt=""></img>
                <div className="card__abouttextbox">
                  {about.aboutdetail.map((element,index)=>{
                    return  <p className="card__abouttext" key={index}>{...element} </p>
                  })}
                </div>
            </div>
        </div>
      </section>
    )
}
export default CardaboutComponent