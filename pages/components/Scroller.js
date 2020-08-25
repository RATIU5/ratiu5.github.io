import styles from '../../styles/Components.module.css'

export default function Scroller(props)
{
    return(
        <div>
            <div className={styles.scrollBox}>
                <div className={styles.scroller}>
                    {props.children}
                    {props.children}
                </div>
                <div className={styles.scrollerOverlay}></div>
            </div>
        </div>
    )
}
