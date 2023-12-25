// HorizontalScrollingWebsite.js
import React from 'react';
import styles from './slider.module.css';

const HorizontalScrollingWebsite = () => {
    const sections = ['Section 1', 'Section 2', 'Section 3', 'Section 4'];

    const handleScroll = (event) => {
        if (event.deltaY !== 0) {
            event.preventDefault();
            window.scrollBy(event.deltaY, 0);
        }
    };

    return (
        <div className={styles.body} onWheel={handleScroll}>
            {sections.map((section, index) => (
                <div className={styles.section} key={index}>
                    {section}
                </div>
            ))}
        </div>
    );
};

export default HorizontalScrollingWebsite;
