import React from 'react';
import styles from './Hero.module.css';
import heroImg from '../../assets/IMG_2436.jpg'; 
import sunIcon from '../../assets/sun.svg'; 
import moonIcon from '../../assets/moon.svg'; 
import twitterDark from '../../assets/twitter-dark.svg';
import twitterLight from '../../assets/twitter-light.svg';
import githubDark from '../../assets/github-dark.svg';
import githubLight from '../../assets/github-light.svg';
import linkedInDark from '../../assets/linkedin-dark.svg';
import linkedInLight from '../../assets/linkedin-light.svg';
import CV from '../../assets/cv.pdf';
import { useTheme } from '../../common/Themecontext';

function Hero() {
    const { theme, toggleTheme } = useTheme();
    const themeIcon = theme === 'light' ? sunIcon : moonIcon;
    const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
    const githubIcon = theme === 'light' ? githubLight : githubDark;
    const linkedInIcon = theme === 'light' ? linkedInLight : linkedInDark;

    return (
        <section id='Hero' className={styles.container}>
            <div className={styles.colorModeContainer}>
                <img 
                    className={styles.heroImg} 
                    src={heroImg} 
                    alt="Profile Image"
                />
                <img 
                    className={styles.colorMode}
                    src={themeIcon} 
                    alt="color mode icon"
                    onClick={toggleTheme}
                />
            </div>
            <div className={styles.info}>
                <h1>
                    Unanam Charles 
                </h1>
                <h2>Frontend Developer</h2>
                <span>
                    <a href="https://twitter.com" target='_blank' rel='noreferrer'>
                        <img src={twitterIcon} alt="Twitter icon" />
                    </a>
                    <a href="https://github.com/UnanamCharles" target='_blank' rel='noreferrer'>
                        <img src={githubIcon} alt="GitHub icon" />
                    </a>
                    {/* <a href="https://linkedin.com" target='_blank' rel='noreferrer'>
                        <img src={linkedInIcon} alt="LinkedIn icon" />
                    </a> */}
                </span>
                <p className={styles.description} >I’m a frontend web developer who enjoys building easy-to-use websites. I work with HTML, CSS, and JavaScript to create responsive designs that look great on all devices. 
                    I’m eager to learn and improve my skills while working on projects that make a positive impact.</p>
                {/* <a href={CV} download>
                    <button className={styles.hover}>
                        RESUME
                    </button>
                </a> */}
            </div>
        </section>  
    );
}

export default Hero;
