import React from 'react';
import CountdownTimer from './CountdownTimer';

// Time that updates every second

class GetTime extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(), 100);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({ date: new Date() });
    }

    render() {
        if (this.props.type === 'digiClock') {
            return <h1 className='clockFont'>{this.state.date.toLocaleTimeString('en-US')}</h1>;
        }
        if (this.props.type === 'countdown') {
            return <CountdownTimer />;
        }
    }
}

export default GetTime;