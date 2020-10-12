import styles from '../../styles/Console.module.css';
import { Vertical, Center } from './Alignment';
import { Button } from './Widgets';

export default class Console extends React.Component
{
    constructor(props)
    {
        super(props);

        this.state = 
        {
            copied: false
        }

        this.dummy = undefined;
        this.console = undefined;
    }

    componentDidMount()
    {
        this.dummy = React.createRef();
        this.console = React.createRef();
    }

    componentWillUnmount()
    {
        this.dummy = undefined;
        this.console = undefined;
    }

    scrollToBottom = () =>
    {
        this.dummy.current.scrollIntoView({behavior: "auto"});
    }

    selectConsoleText = () =>
    {
        if (this.console.current === undefined || this.console.current === null)
        {
            console.log("ERROR: Cannot select text; this.console has been unmounted");
            return;
        }

        if (document.selection) // for IE
        {
            var range = document.body.createTextRange();
            range.moveToElementText(this.console.current);
            range.select();
        }
        else if (window.getSelection)
        {
            let range = document.createRange();
            range.selectNode(this.console.current);
            window.getSelection().addRange(range);

        }
    }

    copyConsoleText = (e) =>
    {
        this.selectConsoleText();
        if (document.execCommand("copy"))
        {
            document.getSelection().removeAllRanges();
            this.setState({
                copied: true
            });
            setTimeout(() => {
                this.setState({
                    copied: false
                });
            }, 3000);
        }
    }


    render()
    {
        return (
            <div className={styles.consoleContainer}>
                <div ref={this.console} className={styles.consoleTextArea}>
                    { this.props.children }
                    <div className={styles.dummy} ref={this.dummy}></div>
                </div>
                <div className={styles.controlsAnchor}>
                    <Vertical>
                        <Center>
                            <Button tip="Select data above" className={styles.button} 
                            onClick={this.selectConsoleText}>Select</Button>
                        </Center>
                        <Center>
                            <Button tip="Select and copy data above" className={styles.button} 
                            onClick={this.copyConsoleText}>{this.state.copied ? "Copied!" : "Copy"}</Button>
                        </Center>
                    </Vertical>
                </div>
            </div>
        );
    }
}


export function ConsoleLine(props)
{
    return (
        <div className={styles.consoleLineContainer}>
            { props.children }
        </div>
    )
}