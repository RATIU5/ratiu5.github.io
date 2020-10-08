
export function Label(props)
{

    let styles = {
        fontSize: '1rem'
    }

    if (props.size !== undefined)  
        styles.fontSize = props.size + "rem";
    

    return (
        <span style={styles} className={props.className}>
            { props.children }
        </span>
    )
}


export function Button(props)
{

    if (props.disabled !== undefined)
        return (
            <div className={props.className} onClick={props.onClick}>
                { props.children }
            </div>
        )

    return (
        <div className={props.className} title={props.tip} onClick={props.onClick}>
            { props.children }
        </div>
    )
}