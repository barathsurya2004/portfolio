import { useContext } from 'react';
import classes from './hamburgerMenu.module.css';
import { MediaContext } from '../contexts/screenquery';

const HamburgerMenu = () => {
    const { hamon, setHamon } = useContext(MediaContext);
    return (<>
        <div className={classes.modal} onClick={() => {
            setHamon(false)
        }} />
        <div className={classes.container}>
            hi
        </div>
    </>
    )
}


export default HamburgerMenu;