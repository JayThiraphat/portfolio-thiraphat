
const NavbarComponent = ()=>{
    return (
        <div>
            <nav>
            <div className='containner'>
                <div className='logo'>
                    <img src='./logo1.svg' alt=''></img>
                </div>
                <div className='menu_list'>
                <ul className='menu'>
                    <li><a href='#'>About</a></li>
                    <li><a href='#'>Experience</a></li>
                    <li><a href='#'>Education</a></li>
                    <li><a href='#'>Skills</a></li>
                    <li><a href='#'>Projects</a></li>
                    <li><a href='#'>Contact</a></li>
                </ul>
                </div>
                {/* <div class="navTrigger">
                    <i></i>
                    <i></i>
                    <i></i>
                </div> */}
            </div>
        </nav>
      </div>
    )
}
export default NavbarComponent