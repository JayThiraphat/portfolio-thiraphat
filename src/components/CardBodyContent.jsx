import CardindexComponent from './Contents/CardindexComponent'
import CardaboutComponent from './Contents/AboutComponent'
import ExpComponent from './Contents/ExpComponent'

import ProjectComponent from './Contents/ProjectComponent'
import EduComponent from './Contents/EduComponent'
import SkillComponent from './Contents/SkillComponent'
import { ResumeData } from '../data/ResumeData'
import { useEffect, useState } from 'react';

const CardBodyContent=()=>{
    

    return (
        // <DataContext.Provider value={""}>
            <div className='CardBody'>
                <CardindexComponent basic={ResumeData.basics}/>
                <CardaboutComponent about={ResumeData.about}/>
                <ExpComponent exp={ResumeData.experience}/>
                <EduComponent edu={ResumeData.education}/>
                <SkillComponent skill={ResumeData.myskills}/>
                <ProjectComponent project={ResumeData.myprojects}/>
            </div>
        //   </DataContext.Provider>
    )
}
export default CardBodyContent