
const ExpComponent = ({exp})=>{
    return (
        <div>
          {exp.map((expdata,index)=>{
            return (
              <ul key={index}>
                   <li ><h4>{expdata.title}</h4></li>
                   <li><h4>{expdata.company}</h4></li>
                   <li><span>{expdata.startendDate}</span></li>
                   <li><span>{expdata.position}</span></li>
                   <ul>
                   {expdata.expDetail.map((expDetail,index) => (
                    <li key={index}><p>{expDetail}</p></li>
                   ))}
                   </ul>
                   <li><span>{expdata.Language}</span></li>
              </ul>
            )
          })}
    
      </div>
    )
}
export default ExpComponent