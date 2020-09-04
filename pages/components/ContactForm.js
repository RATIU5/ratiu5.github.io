import React from 'react';
import styles from '../../styles/ContactForm.module.css';


import { MdEmail, MdPerson } from 'react-icons/md';

export default function ContactForm() {
    return (
        <form className={styles.contactForm} 
            action="https://formspree.io/mrgyvngg" method="POST">
            <br></br>
            <input type="hidden" name="_subject" value="WEBSITE: New email" />

            <div className={styles.formItem}>
                <input className={styles.textInput} name="name" type="text" placeholder="Full Name" required />
                <label className={styles.labelIcon}><MdPerson /></label>
            </div>
            <div className={styles.formItem}>
                <input className={styles.textInput} name="_replyto" type="email" placeholder="Email" required />
                <label className={styles.labelIcon}><MdEmail /></label>
            </div>
            <br></br><br></br>
            <textarea name="message" placeholder="Message" required></textarea><br></br>
            <button type="submit">Send Message</button>

        </form>
    );
}