import { motion, useScroll } from 'framer-motion';
import classes from './progress.module.css';

const Progress = () => {
    const { scrollYProgress } = useScroll();
    return (
        <div className={classes.container}>
            <motion.div
                style={{
                    scaleX: scrollYProgress,
                    transformOrigin: "right",
                    position: 'fixed',
                    top: "90%",
                    right: "100px",
                    background: "#64ffda",
                    width: " 200px",
                    height: "5px"
                }} />
        </div>
    )
}

export default Progress;