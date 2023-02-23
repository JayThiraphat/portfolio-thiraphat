import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

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
          <div class="navTrigger">
              <i></i>
              <i></i>
              <i></i>
            </div>
      </div>
    </nav>
    <section className='greet'>
      <div className='card-greet'>
        <h3>Hi, my name is</h3>
        <h1>Thiraphat Wongwanicha</h1>
        <p>I'm looking for a web developer </p>
      </div>
    </section>
    <section className='about'>
      <div className='card-about'>
        <h3>About Me</h3>
        <div className="about-row2">
          <img className='pictureself' src="https://scontent.fbkk5-5.fna.fbcdn.net/v/t1.18169-9/12552570_1117475631626610_5747190108865265537_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFkOK3iWtU-aAof22w_pyjxSKc-YtiqRYZIpz5i2KpFhj8wlYnSAQn8wqfU21cB86gjEcwBI0oFhYHUG90o0Zdr&_nc_ohc=PxLoREVO7IcAX8VyLhx&_nc_ht=scontent.fbkk5-5.fna&oh=00_AfAEhJs1-rd0ByyvIhtmGZZDtoZa-CO0xK0g58cqstWYPg&oe=641E0725" alt=""></img>
          <p>Hello! My name is Thiraphat Wongwanicha, My nickname is  Jay, 
          I've been worked ERP Program from 4 years, Now I'm looking for a web developer. </p>
        </div>
      </div>
    </section>
    <section className='experience'>
      <div className='card-exp'>
        <h3>Experience</h3>
      <ul className='list-exp'>
              <li><h4>Actran Systems Co., Ltd., Sathorn</h4></li>
              <li><span>July 2017 – Sep 2022</span></li>
              <li><span>Programmer</span></li>
                <ul>
                  <li><p>Duties included developing Add-ons ERP Software (Sage 300 and SAP B1) to support customer applications. </p></li>
                  <li><p>Design the appearance of the program, Design the program structure, Design a database structure</p></li>
                  <li><p>Solving problems in ERP softwar</p></li>
                </ul>
              <li><p>Tools:</p></li>
                <ul>
                  <li><p>Microsoft visual studio,  Crystal report, Microsoft SQL Server, SAP HANA studio</p></li>
                </ul>
              <li><p>Language:</p></li>
                <ul>
                  <li><p>VB6, VBA, VB, C# OOP, SQL, HANA</p></li>
                </ul>
              <li><p>Site Reference:</p></li>
                <ul>
                  <li><p>YAMATO UNYU(THAILAND) CO., LTD.</p></li>
                  <li><p>Import Sale Order Interface Program</p></li>
                  <li><p>Import  Project Interface Program</p></li>
                  <li><p>Auto Send Email Interface Program</p></li>
                </ul>
              <li><h4>Freewill Solution Co. Ltd., Lumpini (Triannee)</h4></li>
              <li><span>May - July 2016 </span></li>
              <li><span>Software Developer Trainee</span></li>
                <ul>
                  <li><p>Duties included developing stock application</p></li> 
                  <li><p>Studying computer language C# WPF</p></li> 
                  <li><p>Testing basic softwar</p></li>
                </ul>
            </ul>
      </div>
    </section>
    <section className='education'>
      <div className="card-edu">
        <h3>Education</h3>
        <span>2014 - 2017</span>
        <ul className='list-edu'>
          <li>Prince of Songkla University (PSU), Hat Yai</li>
          <li> Bachelor of Science in May 2017 </li>
          <li> Major: Computer Science </li>
          <li> GPA: 2.69</li>
        </ul>
      </div>
    </section>
    <section className='myskills'>
      <ul className='list-skills'>
      <h3>My Skills</h3>
        <li>Language: C# OOP, VB, VBA, VB6, C, Python, JAVA</li>
        <li>Web: Html, Javascript, CSS, ReactJs, PHP</li>
        <li>Mobile: Flutter, Android</li>
        <li>Database: SQL, HANA</li>
      </ul>
    </section>
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
