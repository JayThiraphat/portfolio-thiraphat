import './App.css'
import NavbarComponent from './components/NavbarComponent'
import ExpComponent from './components/Contents/expComponent'
import CardaboutComponent from './components/Contents/AboutComponent'
import EduComponent from './components/Contents/EduComponent'
import SkillComponent from './components/Contents/SkillComponent'
import ResumeData from "../src/Data/resume.json"
import FooterComponent from './components/FooterComponent'
import CardindexComponent from './components/Contents/CardindexComponent'
import ProjectComponent from './components/Contents/ProjectComponent'
import { v4 as uuidv4 } from 'uuid';


function App() {
  return (
    <div>
      <NavbarComponent/>
      {ResumeData.map( recorddata =>{
        return(<div>
            <CardindexComponent basics={recorddata.basics} key={uuidv4()}/>
            <CardaboutComponent about={recorddata.about} key={uuidv4()}/>
            <ExpComponent exp={recorddata.experience} key={uuidv4()}/>
            <EduComponent edu={recorddata.education} key={uuidv4()}/>
            <SkillComponent skills={recorddata.myskills} key={uuidv4()}/>
            <ProjectComponent  projects={recorddata.myprojects} key={uuidv4()}/>
            <FooterComponent contact={recorddata.contact} key={uuidv4()}/>
          </div>
        )
      }

      )}
      
    </div>
  )
}

export default App
