import React from 'react'
import styles from '../../styles/Components.module.css'

export default function Logo()
{
    return(
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" className={styles.jrlogo}
    preserveAspectRatio="xMidYMid meet" viewBox="0 0 380 380" width="380" height="380">
        <path d="M159.42 98.59C186.29 118.35 203.09 130.7 209.81 135.64C236.74 155.44 274.72 148.95 293.55 121.34C300.25 
            111.52 287.88 129.65 295.08 119.1C312.9 92.96 306.8 57.39 281.28 38.69C270.65 30.9 288.81 44.21 279.25 37.21C251.38 
            16.78 212.09 23.72 192.91 52.48C156.68 106.79 91.06 205.17 56.79 256.53C34.08 290.58 49.84 336.91 88.61 350.04C105.46 
            355.75 76.1 345.81 92.19 351.25C131.82 364.68 172.93 335.26 173.03 293.42C173.09 269.98 173.22 211.39 173.44 117.65" 
            className={styles.jrlogopath} fill="none" stroke="#EDF8FC" strokeWidth="50" strokeMiterlimit="10">
        </path>
        <path d="M327.36 195.99C327.36 215.15 327.36 227.12 327.36 231.91C327.36 279.96 288.4 318.91 240.35 318.91C239.56 
            318.91 237.56 318.91 234.37 318.91" className={styles.jrsmilepath}
            fill="none" stroke="#EDF8FC" strokeWidth="50" strokeMiterlimit="10">
        </path>
    </svg>
    )
}