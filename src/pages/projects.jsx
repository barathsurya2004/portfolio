import Project from '../components/project';
import classes from './projects.module.css';


const Projects = () => {
    return (
        <main className={classes.main}>
            <div className={classes.container}>
                <h1>Some Projects I've Built</h1>
                <div className={classes.projects}>
                    <Project />
                </div>
            </div>

        </main>
    )
}

export default Projects;