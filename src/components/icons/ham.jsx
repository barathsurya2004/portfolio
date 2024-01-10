import { useContext } from 'react';
import classes from './ham.module.css';
import { MediaContext } from '../../contexts/screenquery';
const HamIcon = () => {
    const { hamon, setHamon } = useContext(MediaContext);
    return (
        <div onClick={() => {
            setHamon(!hamon)
        }}>
            {
                !hamon && <div className={classes.container} >
                    <div className={classes.line1}></div>
                    <div className={classes.line2}></div>
                    <div className={classes.line3}></div>
                </div>
            }
        </div>
    )
}


export default HamIcon;