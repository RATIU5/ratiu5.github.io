
export function Horizontal(props)
{
    let ParentStyle = 
    {
        width: '100%',
        height: '100%',
        flex: '1',
        display: '-webkit-box',
        display: '-ms-flexbox',
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'stretch',
        alignContent: 'flex-start'
    }

    if (props.flex !== undefined)
        ParentStyle.flex = props.flex;

    return (
        <div style={ParentStyle} className={props.className}>
            {
                React.Children.map(props.children, (child, i) => {
                    return child;
                })
            }
        </div>
    )
}


export function Vertical(props)
{
    let ParentStyle = 
    {
        width: '100%',
        height: '100%',
        flex: '1',
        display: '-webkit-box',
        display: '-ms-flexbox',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'stretch',
        alignContent: 'flex-start'
    }

    if (props.flex !== undefined)
        ParentStyle.flex = props.flex;

    return (
        <div style={ParentStyle} className={props.className}>
            {
                React.Children.map(props.children, (child, i) => {
                    return child;
                })
            }
        </div>
    )
}


export function Center(props)
{
    let ParentStyle = 
    {
        width: 'auto',
        height: 'auto',
        maxWidth: 'auto',
        maxHeight: 'auto',
        minWidth: 'auto',
        minHeight: 'auto',
        flex: '1',
        display: 'flex',
        flexWrap: 'no-wrap',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center'
    }

    if (props.flex !== undefined)
        ParentStyle.flex = props.flex;

    if (props.width !== undefined)  
    {
        if (/^-?[\d.]+(?:e-?\d+)?$/.test(props.width))
        {
            ParentStyle.width = props.width + 'px';
            ParentStyle.maxWidth = props.width + 'px';
        } 
        else
        {
            ParentStyle.width = props.width;
            ParentStyle.maxWidth = props.width;
        }
    }
        
    if (props.height !== undefined)  
    {
        if (/^-?[\d.]+(?:e-?\d+)?$/.test(props.height))
        {
            ParentStyle.height = props.height + 'px';
            ParentStyle.maxHeight = props.height + 'px';
        } 
        else
        {
            ParentStyle.height = props.height;
            ParentStyle.maxHeight = props.height;
        }
    }

    if (props.maxWidth !== undefined)  
    {
        if (/^-?[\d.]+(?:e-?\d+)?$/.test(props.maxWidth))
            ParentStyle.maxWidth = props.maxWidth + 'px';
        else
            ParentStyle.maxWidth = props.maxWidth;
    }
        
    if (props.maxHeight !== undefined)  
    {
        if (/^-?[\d.]+(?:e-?\d+)?$/.test(props.maxHeight))
            ParentStyle.maxHeight = props.maxHeight + 'px';
        else
            ParentStyle.maxHeight = props.maxHeight;
    }

    if (props.minWidth !== undefined)  
    {
        if (/^-?[\d.]+(?:e-?\d+)?$/.test(props.minWidth))
            ParentStyle.minWidth = props.minWidth + 'px';
        else
            ParentStyle.minWidth = props.minWidth;
    }
        
    if (props.minHeight !== undefined)  
    {
        if (/^-?[\d.]+(?:e-?\d+)?$/.test(props.minHeight))
            ParentStyle.minHeight = props.minHeight + 'px';
        else
            ParentStyle.minHeight = props.minHeight;
    }

    return (
        <div style={ParentStyle} className={props.className}>
            { React.Children.only(props.children) }
        </div>
    )
}


export function Size(props)
{
    let ParentStyle = 
    {
        width: '100vw',
        height: '100vh',
        maxWidth: '200px',
        maxHeight: '200px',
        minWidth: '100px',
        minHeight: '100px',
        flex: '1',
        display: 'flex',
        flexWrap: 'no-wrap',
        alignItems: 'flex-start'
    }

    if (props.flex !== undefined)
        ParentStyle.flex = props.flex;

    if (props.width !== undefined)  
    {
        if (/^-?[\d.]+(?:e-?\d+)?$/.test(props.width))
        {
            ParentStyle.width = props.width + 'px';
            ParentStyle.maxWidth = props.width + 'px';
        } 
        else
        {
            ParentStyle.width = props.width;
            ParentStyle.maxWidth = props.width;
        }
    }
        
    if (props.height !== undefined)  
    {
        if (/^-?[\d.]+(?:e-?\d+)?$/.test(props.height))
        {
            ParentStyle.height = props.height + 'px';
            ParentStyle.maxHeight = props.height + 'px';
        } 
        else
        {
            ParentStyle.height = props.height;
            ParentStyle.maxHeight = props.height;
        }
    }

    if (props.maxWidth !== undefined)  
    {
        if (/^-?[\d.]+(?:e-?\d+)?$/.test(props.maxWidth))
            ParentStyle.maxWidth = props.maxWidth + 'px';
        else
            ParentStyle.maxWidth = props.maxWidth;
    }
        
    if (props.maxHeight !== undefined)  
    {
        if (/^-?[\d.]+(?:e-?\d+)?$/.test(props.maxHeight))
            ParentStyle.maxHeight = props.maxHeight + 'px';
        else
            ParentStyle.maxHeight = props.maxHeight;
    }

    if (props.minWidth !== undefined)  
    {
        if (/^-?[\d.]+(?:e-?\d+)?$/.test(props.minWidth))
            ParentStyle.minWidth = props.minWidth + 'px';
        else
            ParentStyle.minWidth = props.minWidth;
    }
        
    if (props.minHeight !== undefined)  
    {
        if (/^-?[\d.]+(?:e-?\d+)?$/.test(props.minHeight))
            ParentStyle.minHeight = props.minHeight + 'px';
        else
            ParentStyle.minHeight = props.minHeight;
    }

    return (
        <div style={ParentStyle} className={props.className}>
            { React.Children.only(props.children) }
        </div>
    )
}
