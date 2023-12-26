import classes from './project.module.css';


const Project = () => {
    return (
        <div className={classes.container}>
            <div className={classes.picture}>
                <img src="https://picsum.photos/700" alt="" />
            </div>
            <div className={classes.info}>
                <h3>Featured project</h3>
                <h2>TITLE</h2>
                <div className={classes.desc}>description</div>
                <div className={classes.tech}>
                    <span>all the tech used to build the web page</span>
                </div>
            </div>
        </div>
    )

}


export default Project;