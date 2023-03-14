import '../Experience/ExpComponent.css'
const ExpComponent = ({exp})=>{
    return (
      <section className='experience' id="experience">
          <div className='card__exp'>
            {exp.map((expdata,index)=>{
              return (
                <ul className='exp__cardcontain' key={index}>
                    <li className='exp__title'><h4>{expdata.title}</h4></li>
                   <div className='exp__company'>
                      <img className='exp__img' src='https://cdn-icons-png.flaticon.com/512/889/889647.png' alt=''></img>
                      <li><h4>{expdata.company}</h4></li>
                  </div>
                    <li className='exp__date'><span>{expdata.startendDate}</span></li>
                    <li className='exp__position'><span>{expdata.position}</span></li>
                    <ul>
                    {expdata.expDetail.map((expDetail,index) => (
                      <li className='exp__detail'key={index}><p>{expDetail}</p></li>
                    ))}
                    </ul>
                    <div className="exp__tools">
                      <li><span>{expdata.Tools}</span></li>
                      <li><span>{expdata.Language}</span></li>
                    </div>
                </ul>
              )
            })}
      
        </div>
      </section>
    )
}
export default ExpComponent