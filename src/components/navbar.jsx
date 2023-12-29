
import classes from './navbar.module.css';
import Logo from '../assets/logo.png';


const NavBar = () => {
    return <div className={classes.container}>
        <div className={classes.logo}>
            <img src={Logo} alt="logo" />
        </div>
        <nav className={classes.navigation}>
            <ul>
                <li>
                    About
                </li>
                <li>
                    Projects
                </li>
                <li>
                    Contact
                </li>
            </ul>
        </nav>
    </div>
}

export default NavBar;