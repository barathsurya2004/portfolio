import { motion, useMotionValueEvent, useScroll } from 'framer-motion';
import classes from './progress.module.css';
import { useState } from 'react';

const Progress = () => {
    const { scrollYProgress } = useScroll();
    const [scroll, setScroll] = useState(0);
    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        console.log("Page scroll: ", latest)
        setScroll(latest);
    })
    return (
        <>
            <div className={classes.container}>
                <motion.div
                    style={{
                        scaleX: scroll,
                        transformOrigin: "right",
                        position: 'fixed',
                        top: "90%",
                        right: "100px",
                        background: "#64ffda",
                        width: " 200px",
                        height: "5px"
                    }} />
            </div>
        </>
    )
}

export default Progress;