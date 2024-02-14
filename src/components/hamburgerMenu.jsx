import { useContext } from 'react';
import classes from './hamburgerMenu.module.css';
import { MediaContext } from '../contexts/screenquery';
import Close from './icons/close';

const HamburgerMenu = () => {
    const { hamon, setHamon } = useContext(MediaContext);
    return (<>
        <div className={classes.modal} onClick={() => {
            setHamon(false)
        }} />
        <div className={classes.container}>
            <div className={classes.inner}>
                <nav className={classes.navigation}>
                    <ul className={classes.hamMenu}>
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
        </div>
    </>
    )
}


export default HamburgerMenu;