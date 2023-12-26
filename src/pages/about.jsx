import Button from '../components/button';
import classes from './about.module.css';
import html from '../assets/html-5-svgrepo-com.svg';
import css from '../assets/css.svg';
import js from '../assets/js.svg';
import react from '../assets/react.svg';
import next from '../assets/next.svg';
import python from '../assets/python.svg';
import node from '../assets/node.svg';
import express from '../assets/express.svg';
import mongo from '../assets/mongodb.svg';
import postgre from '../assets/postgre.svg';

import HorizontalScroll from 'react-scroll-horizontal';

const AboutPage = () => {
    return (
        <main className={classes.main}>
            <h1>About Me</h1>
            <div className={classes.container}>
                <div className={classes.inner}>
                    <p>Hi there! I'm Barath Surya, a second-year electrical engineering student at IIT Hyderabad. By day, I dive into the world of circuits and equations.</p><p> But as the sun sets, my creative side takes over, and I delve into web development. I enjoy building websites and digital experiences that make technology fun and accessible. Beyond tech, I'm also fascinated by Japanese language and culture, and I hold a certification in Japanese at the N4 level. </p>
                    <h2>Few technologies I've been working on</h2>
                </div>
                <div className="image">
                    <img src="https://picsum.photos/500/500" alt="photo" />
                </div>
            </div>
            <div className={classes.icons}>
                <div className={classes.wrapper}>
                    <img src={html} alt="" />
                    <img src={css} alt='css' />
                    <img src={js} alt="" />
                    <img src={react} alt="" />
                    <img src={next} alt="" />
                    <img src={python} alt="" />
                    <img src={node} alt="" />
                    <img src={express} alt="" />
                    <img src={mongo} alt="" />
                    <img src={postgre} alt="" />
                </div>
            </div>
        </main>
    )
}

export default AboutPage;