import CardindexComponent from '../Contents/Home/CardindexComponent'
import CardaboutComponent from '../Contents/About/AboutComponent'
import ExpComponent from '../Contents/Experience/ExpComponent'
import ProjectComponent from '../Contents/Project/ProjectComponent'
import EduComponent from '../Contents/Education/EduComponent'
import SkillComponent from '../Contents/Skill/SkillComponent'
import { ResumeData } from '../../data/ResumeData'
import '../Body/CardBodyComponent.css'



const CardBodyContent=()=>{
    return (
            <div className='cardbody'>
                <CardindexComponent basic={ResumeData.basics}/>
                <CardaboutComponent about={ResumeData.about}/>
                <ExpComponent exp={ResumeData.experience}/>
                <EduComponent edu={ResumeData.education}/>
                <SkillComponent skill={ResumeData.myskills}/>
                <ProjectComponent project={ResumeData.myprojects}/>
            </div>
    )
}
export default CardBodyContent