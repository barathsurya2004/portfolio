import classes from './project2.module.css';


const Project2 = ({ imageUrl, title, desc, tech }) => {
    return (
        <div className={classes.container}>
            <div className={classes.info}>
                <h3>Featured Project</h3>
                <h2>{title}</h2>
                <div className={classes.desc}>{desc}.
                    <div className={classes.tech}>
                        {tech.map((ele) => <span>{ele} </span>)}

                    </div>
                </div>
                <div style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "end"
                }}>
                    <div className={classes.picture}>
                        <div className={classes.hover} />
                        <img src={imageUrl} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )

}


export default Project2;