// import React from 'react'
// import styles from './Project.module.css'
// import viberr from '../../assets/viberr.png'
// import freshburger from '../../assets/fresh-burger.png'
// import hipster from '../../assets/hipsster.png'
// import Fitlift from '../../assets/fitlift.png'
// import ProjectCard from '../../common/ProjectCard'


// function Project() {
//   return (
//     <section id='projects' className={styles.container}>
//         <h1 className='sectionTitle'>
//             PROJECT
//         </h1>
//         <div className={styles.ProjectsContainer}>
//            <ProjectCard  src={viberr} link='https://github.com' h3='viberr' p='streaming app' />
//            <ProjectCard  src={freshburger} link='https://github.com' h3='fresh burger' p='streaming app' />
//            <ProjectCard  src={hipster} link='https://github.com' h3='Music App' p='streaming app' />
//            <ProjectCard  src={Fitlift} link='https://github.com' h3='Fitness App' p='streaming app' />
//         </div>
//     </section>
//   )
// }

// export default Project

import React from 'react';
import styles from './Project.module.css';
import viberr from '../../assets/news-digital-776243405.jpg';
import freshburger from '../../assets/Printable-Expense-Tracker.jpg';
// import hipster from '../../assets/hipster.png';
import hipster from '../../assets/hipsster.png'

import Fitlift from '../../assets/fitlift.png';
import ProjectCard from '../../common/ProjectCard';

function Project() {
  return (
    <section id='projects' className={styles.container}>
        <h1 className='sectionTitle'>PROJECTS</h1>
        <div className={styles.projectContainer}>
           <ProjectCard src={viberr} link='https://team-a-news.vercel.app/' h3='Team-A-News' p='News website' />
           <ProjectCard src={freshburger} link='https://unanam-expense-tracker.vercel.app/' h3='Expense tracker' p='Expenses and income tracker website ' />
           {/* <ProjectCard src={hipster} link='https://github.com' h3='Hipster' p='Music app' />
           <ProjectCard src={Fitlift} link='https://github.com' h3='FitLift' p='Fitness app' /> */}
        </div>
    </section>
  );
}

export default Project;
