import React from 'react';
import SocialLinks from './SocialLinks';
import styles from '../../styles/NavBar.module.css';
import { MdMenu } from 'react-icons/md';


export default function NavBar()
{
    return(
        <div className={styles.navBarContainer}>
            <div className={styles.navSpace}></div>

            <label htmlFor="menuCheck" className={styles.menuCheckIcon}><MdMenu /></label>
            <input type="checkbox" id="menuCheck" className={styles.menuCheckbox}/>

            <div className={styles.navMenuContainer}>
                <div className={styles.menuItem}>
                    <a href="#projects" >Projects</a>
                </div>
                <div className={styles.menuItem}>
                    <a href="#about">About</a>
                </div>
                <div className={styles.menuItem}>
                    <a href="#contact">Contact</a>
                </div>
                <SocialLinks></SocialLinks>
            </div>
        </div>
    )
}