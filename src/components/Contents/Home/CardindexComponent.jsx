import '../Home/CardindexComponent.css'

const CardindexComponent = ({basic}) =>{
    return(
        <section className='home' id="home">
        <div className='home__card'>
          <h3 className='home__h3'>{basic.greet}</h3>
          <h1 className='home__h1'>{basic.name}</h1>
          <p className='home__p'>{basic.desc}</p>
        </div>
      </section>
    )
}
export default CardindexComponent