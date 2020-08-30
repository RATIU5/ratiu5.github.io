import React from 'react'
import styles from '../../styles/Project.module.css'
import { FaGithub } from "react-icons/fa";

export default class Project extends React.Component
{

    render() {
        return( 
            <a href={this.props.url} className={styles.projectContainer}>
                <div className={styles.projectHeader}>
                    <FaGithub className={styles.projectImage} />
                    <div className={styles.projectTitle}>
                        <h1 className={styles.projectTitleName}>{this.props.name}</h1>
                    </div>
                </div>
                <div className={styles.projectMainContent}>
                    <div className={styles.projectDescription}>{this.props.children}</div>
                </div>
            </a>
        );
    }

}