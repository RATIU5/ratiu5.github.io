import React from 'react'
import styles from '../../styles/Project.module.css'
import { FaGithub } from "react-icons/fa";

export default class Project extends React.Component
{
    UseImage() {
        if (this.props.img != null)
        {
            return <img src={this.props.img} className={styles.projectImage} />;
        }
    }

    render() {
        return( 
            <div className={styles.innerContainer}>
                {this.UseImage()}
                <div className={styles.projectDate}><i>{this.props.date}</i></div>
                <div className={styles.projectLinkContainer}>
                    <a href={this.props.url} className={styles.projectLink}>{this.props.name}</a>
                </div>
                <div className={styles.projectDescription}>{this.props.children}</div>
                <div className={styles.projectOverlayContainer}></div>
            </div>
        );
    }

}