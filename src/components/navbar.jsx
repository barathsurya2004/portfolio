
import classes from './navbar.module.css';
import Logo from '../assets/logo';
import Button from './button';

const NavBar = () => {
    console.log(Logo)
    return <div className={classes.container}>
        <div className={classes.logo}>
            <Logo />
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