import styles from '../../styles/Vertical.module.css';

export default function Vertical(props)
{
    return (
        <div className={styles.mainContainer}>
            {
                React.Children.map(props.children, (child, i) => {
                    return <div className={styles.childContainer}>{child}</div>
                })
            }
        </div>
    )
}