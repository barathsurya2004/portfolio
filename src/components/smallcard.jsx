import classes from './smallcard.module.css';
import img from '../assets/photo.jpg';
export const SmallCard = () => {
    return (
        <main className={classes.main}>
            <div className={classes.title}>
                <h1 >課外活動 </h1>
                <hr />
            </div>
            <div className={classes.container}>
                <div className="image">
                    <div className={classes.imgContainer}>
                        <div className={classes.modal} />
                        <img src={img} alt="photo" className={classes.photo} />
                    </div>
                </div>
                <div className={classes.inner}>
                    <p>Recipient of <span>dual Bronze Medals</span> in Swimming at the prestigious <span>Inter IIT Sports Meet</span>  2023 in Gandhinagar, showcasing a fusion of relentless dedication and aquatic prowess. These medals stand as a testament to my commitment to excellence in both academics and athletics. </p>
                    <a href="https://indiaeducationdiary.in/iit-hyderabad-secures-historic-victory-at-inter-iit-aquatics-meet-2023/" >Click to View Article ↗</a>
                </div>
            </div>
        </main>
    )
}