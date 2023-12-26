import classes from './project.module.css';


const Project = () => {
    return (
        <div className={classes.container}>
            <div className={classes.picture}>
                <div className={classes.hover} />
                <img src="https://picsum.photos/700" alt="" />
            </div>
            <div className={classes.info}>
                <h3>Featured Project</h3>
                <h2>TITLE</h2>
                <div className={classes.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, architecto ratione nisi possimus, maxime ea autem sunt ipsum esse voluptate aspernatur commodi laborum id, suscipit libero praesentium facilis. Ducimus, est.</div>
                <div className={classes.tech}>
                    <span>all the tech used to build the web page</span>
                </div>
            </div>
        </div>
    )

}


export default Project;