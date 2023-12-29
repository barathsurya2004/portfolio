import IconGitHub from './icons/github';
import IconInstagram from './icons/insta';
import IconLinkedin from './icons/linkedin';
import classes from './sidebar.module.css';


const Sidebar = () => {
    return (
        <div className={classes.container}>
            <div className={classes.icons}>
                <a href="https://github.com/barathsurya2004" style={{ color: 'white' }}>
                    <IconGitHub />
                </a>
                <a href="https://in.linkedin.com/in/barath-surya-051194202?trk=people-guest_people_search-card" style={{ color: 'white' }}>
                    <IconLinkedin />
                </a>
            </div>
            <hr />
        </div>
    )
}

export default Sidebar;