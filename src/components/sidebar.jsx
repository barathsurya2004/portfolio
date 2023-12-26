import IconGitHub from './icons/github';
import IconInstagram from './icons/insta';
import IconLinkedin from './icons/linkedin';
import classes from './sidebar.module.css';


const Sidebar = () => {
    return (
        <div className={classes.container}>
            <div className={classes.icons}>
                <IconGitHub />
                <IconInstagram />
                <IconLinkedin />
            </div>
            <hr />
        </div>
    )
}

export default Sidebar;