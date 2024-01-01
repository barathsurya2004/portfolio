
import classes from './navbar.module.css';
import Logo from '../assets/logo.png';


const NavBar = () => {
    return <div className={classes.container}>
        <div className={classes.logo}>
            <img src={Logo} alt="logo" />
        </div>
        <nav className={classes.navigation}>
            <ul>
                <li onClick={() => {
                    document.getElementById("about").scrollIntoView({
                        behavior: "smooth"
                    });
                }}>
                    About
                </li>
                <li onClick={() => {
                    document.getElementById("projects").scrollIntoView({
                        behavior: "smooth"
                    });
                }}>
                    Projects
                </li>
                <li onClick={() => {
                    document.getElementById("contact").scrollIntoView({
                        behavior: "smooth"
                    });
                }}>
                    Contact
                </li>
            </ul>
        </nav>
    </div>
}

export default NavBar;