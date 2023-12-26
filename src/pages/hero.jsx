import Button from '../components/button';
import classes from './hero.module.css';


const Hero = () => {
    return (
        <main className={classes.main}>
            <div className={classes.container}>
                <h3>Hola! I'm </h3>
                <h1>Barath Surya</h1>
                <h2>building bridges between</h2><h2> ideas and the web</h2>
                <p>Juggling electrical circuits by day,</p><p>and weaving web magic by night – aspiring to illuminate both worlds</p>
                <div className={classes.resume}>
                    <Button>
                        Resume
                    </Button>
                </div>
            </div>

        </main>
    )
}

export default Hero;