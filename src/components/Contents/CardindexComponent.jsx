const CardindexComponent = ({basic}) =>{
    return(
        <section>
        <div >
          <h3>{basic.greet}</h3>
          <h1>{basic.name}</h1>
          <p>{basic.desc}</p>
        </div>
      </section>
    )
}
export default CardindexComponent