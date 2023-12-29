import Project from '../components/project';
import classes from './projects.module.css';
import img from '../assets/projects/Project1.png';
import img1 from '../assets/projects/Ecommerce.png';
import Project2 from '../components/project2';
const project1 = {
    title: 'Landing Page',
    desc: "Designed and developed an engaging landing page that seamlessly captures user attention through a modern and intuitive interface",
    imageUrl: img,
    tech: ['Vscode', 'React', 'Framer-Motion']
}

const project2 = {
    title: "E-commerce Website",
    imageUrl: img1,
    desc: " Creation of a dynamic e-commerce website, combining sleek design with robust functionality to deliver a seamless shopping experience and streamlined product navigation",
    tech: ["Vs Code", "React"]

}


const Projects = () => {
    return (
        <main className={classes.main}>
            <div className={classes.container}>
                <div className={classes.title}>
                    <h1>Some Projects I've Built</h1>
                    <hr />
                </div>
                <div className={classes.projects}>
                    <Project {...project1} />
                    <Project2 {...project2} />
                </div>
            </div>

        </main>
    )
}

export default Projects;