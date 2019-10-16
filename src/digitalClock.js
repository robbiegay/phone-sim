import React from 'react';

class DigitalClock extends React.Component {
    constructor(props) {
        super(props);
        // Adds a 'date' property to the 'state' property. Starts as current    // Date obj
        this.state = { date: new Date() };
    }

    // When the DigitalClock is loaded, starts updating page
    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(), 1000);
    }

    // When the DC is no longer in use, stops updating
    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({ date: new Date() });
    }

    render() {
        return <h1>{this.state.date.toLocaleTimeString('en-US')}</h1>;
    }
}

export default DigitalClock;