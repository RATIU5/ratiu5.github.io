import React from 'react';
import styles from '../../styles/TextLink.module.css';


export default function TextLink(props)
{
    return(
        <span className={styles.textLinkContainer}>
            <a href={props.href} target="_blank">{props.children}</a>
        </span>
    )
}