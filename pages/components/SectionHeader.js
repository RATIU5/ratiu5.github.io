import React from 'react'
import styles from '../../styles/SectionHeader.module.css'


export default function SectionHeader(props)
{
    return (
        <div className={styles.projectsHeader}>
            <h3>{props.children}</h3>
        </div>
    );
}