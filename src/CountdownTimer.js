import React from 'react';

class CountdownTimer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {toDate: new Date(2019, 12, 6, 11, 30)};
    }

    render() {
        return <h1>{this.state.toDate.toLocaleTimeString('en-US')}</h1>;
    }
}

export default CountdownTimer;