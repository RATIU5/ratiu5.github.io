import React from 'react'
import styles from '../../styles/Components.module.css'

import { FaGithub, FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

export default function SocialLinks()
{
    return(
        <div className={styles.socialLinksContainer}>
            
            <div className={styles.socialLinkContainer}>
                <a href="https://github.com/RATIU5" className={styles.socialLink}><FaGithub /></a>
            </div>

            <div className={styles.socialLinkContainer}>
                <a href="https://www.linkedin.com/in/john-memmott-1a866318b/" className={styles.socialLink}><FaLinkedin /></a>
            </div>

            <div className={styles.socialLinkContainer}>
                <a href="https://www.youtube.com/channel/UCFQ5LXhdgnbgiU0gSIHpphw" className={styles.socialLink}><FaYoutube /></a>
            </div>
            
            <div className={styles.socialLinkContainer}>
                <a href="https://twitter.com/RATIU51" className={styles.socialLink}><FaTwitter /></a>
            </div>
        </div>
    )
}