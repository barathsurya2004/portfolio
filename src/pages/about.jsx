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

import { animate, motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const AboutPage = () => {
    const ref = useRef(null);
    const [ofset, setOfset] = useState(0)
    useEffect(() => {
        console.log('width', ref.current ? ref.current.offsetWidth : 0);
        setOfset(ref.current.offsetWidth / 2);
        console.log(ofset)
    }, [ref.current])
    return (
        <main className={classes.main}>
            <h1>About Me</h1>
            <div className={classes.container}>
                <div className={classes.inner}>
                    <p>Hi there! I'm Barath Surya, a second-year <span>electrical engineering student</span> at <span>IIT Hyderabad</span>. By day, I dive into the world of circuits and equations.</p><p> But as the sun sets, my creative side takes over, and I delve into <span>web development</span> . I enjoy building websites and digital experiences that make technology fun and accessible. Beyond tech, I'm also fascinated by <span>Japanese</span> language and culture, and I hold a certification in Japanese at the <span>N4 level</span>. </p>
                    <h2>Few technologies I've been working on</h2>
                </div>
                <div className="image">
                    <img src="https://picsum.photos/500/500" alt="photo" />
                </div>
            </div>
            <div className={classes.icons}>
                <motion.div className={classes.wrapper} ref={ref}
                    initial={
                        {
                            left: 0
                        }
                    }
                    animate={ofset && {
                        left: -ofset
                    }}
                    transition={{
                        repeat: Infinity,
                        duration: 20,
                        repeatType: "reverse"
                    }}
                >
                    <img src={html} alt="html" />
                    <img src={css} alt='css' />
                    <img src={js} alt="js" />
                    <img src={react} alt="react" />
                    <img src={next} alt="next" />
                    <img src={python} alt="python" />
                    <img src={node} alt="nodejs" />
                    <img src={express} alt="express" />
                    <img src={mongo} alt="mongodb" />
                    <img src={postgre} alt="postgreSQL" />
                </motion.div>
            </div>
        </main>
    )
}

export default AboutPage;