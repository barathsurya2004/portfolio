
import classes from './navbar.module.css';
import Logo from '../assets/logo.png';
import { useContext } from 'react';
import { MediaContext } from '../contexts/screenquery';
import HamburgerMenu from './hamburgerMenu';
import NavHam from './icons/navHam';
import HamIcon from './icons/ham';
import Close from './icons/close';


const NavBar = () => {

    const { ham, hamon } = useContext(MediaContext);

    return <div className={classes.container}>
        <div className={classes.logo}>
            <img src={Logo} alt="logo" />
        </div>
        <nav className={classes.navigation}>
            {ham ? <NavHam /> : <ul>
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
            </ul>}
            {hamon && ham && <HamburgerMenu />}
        </nav>
    </div>
}

export default NavBar;