import classes from './contact.module.css';
import Button from '../components/button';


const Contact = () => {
    return (
        <main className={classes.main} id='contact'>
            <div className={classes.container}>
                <span>Contact</span>
                <h1>Get in Touch</h1>
                <p>Feel free to get in touch with me! You can reach out , I'll do my best to respond promptly. Thank you for reaching out!
                </p>
            </div>
            <Button>Shoot me an Email</Button>
        </main  >
    )
}

export default Contact;