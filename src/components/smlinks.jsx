import React from 'react';
import { CiFacebook } from "react-icons/ci";
import classes from './smlinks.module.css'; // Assuming you have a CSS file for styling

const SocialMediaVine = () => {
    return (
        <div className={classes.socialvinecontainer}>
            <div className={classes.vine}></div>
            <div className={classes.sociallinks}>
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                    <CiFacebook />
                </a>
                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                    <CiFacebook />
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                    <CiFacebook />
                </a>
                {/* Add more social media links as needed */}
            </div>
        </div>
    );
};

export default SocialMediaVine;
