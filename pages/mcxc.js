import Horizontal, { Vertical, Center, Size } from './components/Alignment';
import Label, { Button } from './components/Widgets';
import Console, { ConsoleLine } from './components/Console';
import styles from '../styles/mcxc.module.css';
import Head from 'next/head'

let getTime = (time) =>
    {
        let h = String(Math.floor(time / 3600 / 1000) + 100).substring(1);
        let m = String(Math.floor(time / 60 / 1000) + 100).substring(1);
        let s = String(Math.floor((time % (1000 * 60)) / 1000) + 100).substring(1);
        let ms = String(time % 1000 + 1000).substring(1, 2);
        return h + ":" + m + ":" + s + "." + ms; 
    }

export default class MCXC extends React.Component
{
    constructor(props)
    {
        super(props);

        this.state =
        {
            swTime: 0,
            swRunning: false,
            swOffset: 0,
            swInterval: undefined,
            swRecords: []
        }

        this.key = 0;
    }

    componentDidMount()
    {
        window.addEventListener("keypress", (e) => this.handleKeyPress(e));
    }

    componentWillUnmount()
    {
        this.reset();
        window.removeEventListener("keypress", (e) => this.handleKeyPress(e));
    }

    handleKeyPress = (e) =>
    {
        if (e.keyCode === 32) // space
        {
            e.preventDefault();
            this.saveCurrentTime();
        }
        else if (e.key === 's')
        {
            this.startButtonClicked();
        }
        else if (e.key === 'c')
        {
            this.reset();
        }
    }

    startButtonClicked = () =>
    {
        if (!this.state.swRunning)
        {
            this.setState({
                swRunning: true,
                swOffset: Date.now(),
                swInterval: setInterval(this.update, 10)
            });
        }
        else
        {
            clearInterval(this.state.swInterval);
            this.setState({
                swRunning: false,
                swInterval: undefined
            });
        }
    }

    update = () =>
    {
        this.setState({
            swTime: this.state.swTime + this.delta()
        });
    }

    delta = () =>
    {
        let now = Date.now(), d = now - this.state.swOffset;
        this.setState({
            swOffset: now
        });
        return d;
    }

    reset = () =>
    {
        clearInterval(this.state.swInterval);
        this.setState({
            swTime: 0,
            swRunning: false,
            swOffset: 0,
            swInterval: undefined,
            swRecords: []
        }); 
    }

    saveCurrentTime = () =>
    {
        if (this.state.swRunning)
        {
            let obj = {'id': this.state.swRecords.length + 1, 'time': this.state.swTime};
            this.setState({
                swRecords: [...this.state.swRecords, obj]
            });
        }
    }

    render()
    {
        return (
            <div className={styles.parent}>

                <Size width="100vw" minWidth="20rem" maxWidth="40rem" 
                    height="100vh" minHeight="30rem" maxHeight="55rem" 
                    className={styles.mainContainer}>
                    <Horizontal>
                        <Head>
                            <title>MCXC Stopwatch</title>
                            <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap" rel="stylesheet" /> 
                            <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png?" />
                            <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png?" />
                            <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png?" />
                            <link rel="manifest" href="/favicons/site.webmanifest" />
                            <link rel="mask-icon" href="/favicons/safari-pinned-tab.svg" color="#5bbad5" />
                            <meta name="msapplication-TileColor" content="#00aba9" />
                            <meta name="theme-color" content="#ffffff" />
                        </Head>
                        <Center>
                            <Label size={1.5} className={styles.countLabel}>
                                { this.state.swRecords.length } completed
                            </Label>
                        </Center>

                        <Center flex={10}>
                            <Console>
                                { this.state.swRecords.map( function(record) {
                                    return <ConsoleLine key={record.id} id={record.id}>{getTime(record.time)}</ConsoleLine>
                                }, this) }
                            </Console>
                        </Center>

                        <Vertical>
                            <Center>
                                <Button className={styles.buttonStyle} onClick={this.startButtonClicked}
                                tip={this.state.swRunning ? "(S) Stop the stopwatch" : "(S) Start the stopwatch"}>
                                    {this.state.swRunning ? "Stop" : "Start"}
                                </Button>
                            </Center>
                            <Center>
                                <Label size="1.75" className={styles.timeLabel}>
                                    { getTime(this.state.swTime) }
                                </Label>
                            </Center>
                            <Center>
                                <Button tip="(C) Clear the stopwatch and all recorded data" className={styles.buttonStyle} onClick={this.reset}>Clear</Button>
                            </Center>
                        </Vertical>

                        <Center>
                            <Button className={styles.buttonStyle} tip="(Space Bar) Record the current time" onClick={this.saveCurrentTime}>Record</Button>
                        </Center>

                    </Horizontal>
                </Size>            
            </div>
        )
    }
}
