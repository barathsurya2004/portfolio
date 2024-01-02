import { useMotionValueEvent, useScroll, motion } from 'framer-motion';
import Button from '../components/button';
import classes from './hero.module.css';
import { useState } from 'react';


const Hero = () => {
    const { scrollYProgress } = useScroll();
    const [scroll, setScroll] = useState(0);
    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        console.log("Page scroll: ", latest)
        setScroll(latest);
    })
    return (
        <main className={classes.main}>
            {scroll <= 0.001 && <motion.div className={classes.arrow}
                animate={{
                    opacity: [0, 0, 1, 0],
                    y: [-80, -80, 0, 100]
                }}
                transition={{
                    duration: 3,
                    ease: 'easeInOut',
                    repeat: Infinity,
                    repeatType: 'loop',
                    repeatDelay: 1
                }}
            >
                ↓
            </motion.div>}
            <div className={classes.additional}>
                <div className={classes.container}>
                    <h3>Hola! I'm </h3>
                    <h1>Barath Surya</h1>
                    <h2>building bridges between</h2><h2> ideas and the web</h2>
                    <p>Juggling electrical circuits by day,</p><p>and weaving web magic by night – aspiring to illuminate both worlds</p>
                    <div className={classes.resume}>
                        <a href="https://drive.google.com/file/d/1kEzdcwlLrxzDKvMIZBa9scrMV53k0MbZ/view?usp=sharing">
                            <Button>
                                Resume
                            </Button>
                        </a>
                    </div>
                </div>
            </div>

        </main>
    )
}

export default Hero;