import '../Navbar/NavbarComponent.css'
import image from "../../assets/images/logo1.png"
import { FaWindowClose } from "react-icons/fa";
import {Link} from "react-router-dom"
import { useState } from 'react';

const NavbarComponent = ()=>{

    const [showMenu,setShowMenu] = useState(false)
    const toggleMenu  = () => {
        setShowMenu(!showMenu)
    }

    return (
            <nav className='header'>
                <div className='logo'>
                    <img className='logo__img' src={image} alt=''/>
                    <a href='#home' className='log__text text--gradient'>Thiraphat</a>
                </div>
                 <div className={showMenu ?"nav__close icon--active":"nav__close"}>
                        <FaWindowClose  className="nav__iconclose" onClick={toggleMenu}/>
                    </div>
                <div className={showMenu ?'nav nav--active':'nav'}>
                    <ul className='nav__list'>
                        <li className='nav__link'><a href='#about'>About</a></li>
                        <li className='nav__link'><a href='#experience'>Experience</a></li>
                        <li className='nav__link'><a href='#education'>Education</a></li>
                        <li className='nav__link'><a href='#skills'>Skills</a></li>
                        <li className='nav__link'><a href='#projects'>Projects</a></li>
                    </ul>
                </div>
                <div className="navTrigger" onClick={toggleMenu}>
                    <i></i>
                    <i></i>
                    <i></i>
                </div>
        </nav>
    )
}
export default NavbarComponent