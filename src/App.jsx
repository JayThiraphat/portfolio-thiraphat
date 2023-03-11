import { useState } from 'react'

import './App.css'
import NavbarComponent from './components/NavbarComponent'
import ExpComponent from './components/expComponent'
import CardaboutComponent from './components/AboutComponent'
import EduComponent from './components/EduComponent'
import SkillComponent from './components/SkillComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <NavbarComponent/>
    <section className='index'>
      <div className='card-index'>
        <h3>Hi, my name is</h3>
        <h1>Thiraphat Wongwanicha</h1>
        <p>I'm looking for a web developer </p>
      </div>
    </section>
   <CardaboutComponent/>
    <ExpComponent/>
    <EduComponent/>
    <SkillComponent/>
   
    <section className='projects'>
      <ul className='list-projects'>
        <h3>My Projects</h3>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis sint autem sit? Debitis aperiam ipsam et modi culpa quam quaerat.</p>
      </ul>
    </section>

    <footer>
      <div className="footer-logo">
        <span>wongwatnicha@gmail.com</span>
        <img className='pic-ig' src=''  alt=''></img>
      </div>
    </footer>
    </div>
  )
}

export default App
