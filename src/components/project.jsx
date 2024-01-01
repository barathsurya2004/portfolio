import classes from './project.module.css';


const Project = ({ imageUrl, title, desc, tech }) => {
    return (
        <div className={classes.container}>
            <div className={classes.picture}>
                <div className={classes.hover} />
                <img src={imageUrl} alt="" />
            </div>

            <div className={classes.info}>
                <h3>Featured Project</h3>
                <h2>{title}</h2>
                <div className={classes.desc}>{desc}.</div>
                <div className={classes.tech}>
                    {tech.map((ele) => <span>{ele} </span>)}

                </div>
            </div>
        </div>
    )

}


export default Project;