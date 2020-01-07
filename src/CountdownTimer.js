import React from 'react';
// import GetTime from './GetTime';

function addZ(x) {
    x = x < 10 ? `0${x}` : x;
    return x;
}

// 
function plurl(x) {
    x = (x === 0) ? '' : (x === 1) ? `${x} day` : `${x} days`;
    return x;
}

class CountdownTimer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {toDate: new Date(2019, 11, 6, 11, 30)};
    }

    /*
    Subtracts the target date's milliSec from the current time's milliSec
    divides each time unit by its milliSec conversion, and them subtracts
    that num from the total milliSec.
    */

    timeRemaining() {
        let totalM = parseInt(this.state.toDate.valueOf() - Date.now());
        let d = 1000 * 60 * 60 * 24;
        let h = 1000 * 60 * 60;
        let m = 1000 * 60;
        let days = Math.floor(totalM / d);
        totalM -= days * d;
        let hours = Math.floor(totalM / h);
        totalM -= hours * h;
        let min = Math.floor(totalM / m);
        totalM -= min * m;
        let sec = Math.floor(totalM / 1000);
        totalM -= sec * 1000;
        let milli = Math.floor(totalM / 100).toFixed(0);
        return `${plurl(days)} ${addZ(hours)}:${addZ(min)}:${addZ(sec)}.${milli}`;
    }

    render() {
        return <h1 className='clockFont'>{this.timeRemaining()}</h1>;
    }
}

export default CountdownTimer;