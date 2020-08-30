import styles from '../../styles/ScrollerItem.module.css'

export default function ScrollerItem(props)
{
    return (
        <div className={styles.scrollItem}>
            {props.children}
            <div className={styles.scrollerItemInfo}>{props.info}</div>
        </div>
    )
}