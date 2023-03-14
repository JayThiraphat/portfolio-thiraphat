import '../Footer/FooterComponent.css'
const FooterComponent = (props)=>{
    return (
        <footer className="footer">
          <div className="footer__contain">
            <div className="footer__link">
              <img  className='footer__img' src='https://cdn-icons-png.flaticon.com/512/281/281769.png' alt='mailto: wongwatnicha@gmail.com'/>
              <a href='mailto: wongwatnicha@gmail.com' className="footer__text">wongwatnicha@gmail.com</a>
            </div>
            
            <div className="footer__link">
             <img  className='footer__img' src='https://cdn-icons-png.flaticon.com/512/174/174857.png'  alt=''></img>
              <a className="footer__text" href='#'>LinkedIn</a>
            </div>
            <div className="footer__link">
            <img  className='footer__img' src='https://cdns.iconmonstr.com/wp-content/releases/preview/2012/240/iconmonstr-github-1.png' alt='https://github.com/JayThiraphat'/>
            <a className="footer__text" href='https://github.com/JayThiraphat'>GitHub</a>
            </div>
            <div className="footer__link">
            <img  className='footer__img' src='https://cdn-icons-png.flaticon.com/512/2989/2989976.png' alt=''/>
            <a className="footer__text" href='#'>PDF RESUME</a>
            </div>
            <span>@Design By Thiraphat Wongwanicha</span>
          </div>
      </footer>
    )
}
export default FooterComponent