import React from 'react';
import SocialLinks from './SocialLinks';
import styles from '../../styles/NavBar.module.css';
import { MdMenu } from 'react-icons/md';


export default function NavBar()
{
    return(
        <div className={styles.navBarContainer}>

            <input type="checkbox" id="menuCheck" className={styles.menuCheckbox}/>
            <label htmlFor="menuCheck" className={styles.menuCheckIcon}><MdMenu /></label>

            <div className={styles.navMenuContainer}>
                <div className={styles.navLinksContainer}>
                    <div className={styles.navLink}>
                        <a href="#linkProjects" >projects</a>
                    </div>
                    <div className={styles.navLink}>
                        <a href="#linkAbout">about</a>
                    </div>
                    <div className={styles.navLink}>
                        <a href="#linkContact">contact</a>
                    </div>
                </div>
                <SocialLinks></SocialLinks>
            </div>
        </div>
    )
}