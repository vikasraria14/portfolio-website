import React from "react";
import './skills.css'

const leftSkills = [
    {
        title: 'C++',
        width: '50%',
        percentage: '70%'
    },
       
    {
        title: 'Data Structures & Algo.',
        width: '50%',
        percentage: '70%'
    },
    {
        title: 'HTML5, CSS3',
        width: '50%',
        percentage: '70%'
    },
];

const rightSkills = [
    
    {
        title: 'React.Js',
        width: '50%',
        percentage: '70%'
    },
    {
        title: 'NodeJs, Express',
        width: '50%',
        percentage: '70%'
    },
    {
        title: 'MongoDb',
        width: '50%',
        percentage: '70%'
    }
];

const Skills = () => {
    return (
        <div className="skills__wrapper d-flex gap-5">
            <div className="frontend__skill w-50">
                {leftSkills.map((item, index) => (
                    <SkillItem 
                    key={index}
                    title={item.title}
                    percentage={item.percentage}/>
                ))}
            </div>

            <div className="backend__skill w-50">
                {rightSkills.map((item, index) => (
                    <SkillItem key={index} title={item.title} percentage={item.percentage}/>
                ))}
            </div>
        </div>
    );
}

const SkillItem = ({title, percentage}) => {
    return (<div className="skill__data mb-3">
        <div className="skill__title d-flex align-items-center justify-content-between">
            <h6>{title}</h6>
            <span>{percentage}</span>
        </div>
        <div className="skill__bar">
            <span className="skill__bar-percentage" style={{width: `${percentage}`}}></span>
        </div>
    </div>
    );
}

export default Skills