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
                hi
            </div>
        </div>
    </>
    )
}


export default HamburgerMenu;