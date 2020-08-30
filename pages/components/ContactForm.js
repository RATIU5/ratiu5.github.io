import React from 'react';
import styles from '../../styles/ContactForm.module.css';


import { MdEmail, MdPerson } from 'react-icons/md';

export default function ContactForm() {
    return (
        <form className={styles.contactForm} 
        action="https://formspree.io/mrgyvngg" method="POST">
            <div className={styles.contactHeader}>
                <h3>Contact me</h3>
            </div>
            <br></br>
            <input type="hidden" name="_subject" value="WEBSITE: New email" />
            <div className={styles.formItem}>
                <label><MdPerson /></label>
                <input name="name" type="text" placeholder="Full Name" required />
            </div>
            <div className={styles.formItem}>
                <label><MdEmail /></label>
                <input name="_replyto" type="email" placeholder="Email" required />
            </div>
            <br></br><br></br>
            <textarea name="message" placeholder="Message" required></textarea><br></br>
            <button type="submit">Send Message</button>
        </form>
    );
}