// NO LONGER IN USE

import React from 'react';
import GetTime from './GetTime';

class DigitalClock extends React.Component {
    // constructor(props) {
    //     super(props);

    // }

    render() {
        // return <h1>{GetTime.state.date.toLocaleTimeString('en-US')}</h1>;
        return <GetTime />;
    }
}

export default DigitalClock;


//     // When the DigitalClock is loaded, starts updating page
//     componentDidMount() {
//         this.timerID = setInterval(
//             () => this.tick(), 1000);
//     }

//     // When the DC is no longer in use, stops updating
//     componentWillUnmount() {
//         clearInterval(this.timerID);
//     }

//     tick() {
//         this.setState({ date: new Date() });
//     }

//     render() {
//         return <h1>{this.state.date.toLocaleTimeString('en-US')}</h1>;
//     }
// }