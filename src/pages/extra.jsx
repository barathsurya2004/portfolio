import { SmallCard } from '../components/smallcard';
import classes from './extra.module.css';


const Extra = () => {
    return (
        <main className={classes.main}>

            <div className={classes.container}>
                <SmallCard />
            </div>
        </main>
    )
}


export default Extra;