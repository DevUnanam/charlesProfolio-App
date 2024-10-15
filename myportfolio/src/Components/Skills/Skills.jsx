import React from 'react';
import styles from './SkillsStyles.module.css';
import checkMarkIcon from '../../assets/checkmark-dark.svg';
import SkillsList from '../../common/SkillsList';


function Skills() {
//   const { theme } = useTheme();
//   const checkMarkIcon = theme === 'light' ? checkMarkIconLight : checkMarkIconDark;

  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <div className={styles.skillList}>
        <SkillsList src={checkMarkIcon} skill="HTML" />
        <SkillsList src={checkMarkIcon} skill="CSS" />
        <SkillsList src={checkMarkIcon} skill="JavaScript" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillsList src={checkMarkIcon} skill="Bootstrap" />
        <SkillsList src={checkMarkIcon} skill="React" />
      </div>
      <hr /> 
    </section>
  );
}
export default Skills;
