import { MediaContext } from "../../contexts/screenquery";
import Close from "./close";
import HamIcon from "./ham";
import { useContext } from 'react';


const NavHam = () => {
    const { hamon, setHamon } = useContext(MediaContext);
    return (
        <div onClick={() => {
            setHamon(!hamon)
        }} >
            {hamon ? <Close /> :
                <HamIcon />}
        </div>
    )
}

export default NavHam; 