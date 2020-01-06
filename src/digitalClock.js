import React, { useState, useEffect } from 'react';

function DigitalClock() {
    const [time, setTime] = useState(Date());

    // useEffect(() => {
    //     setInterval(
    //         () => setTime(new Date()), 100);
    // });

    // tick() {
    //     setTime(new Date());
    //     // this.setState({ date: new Date() });
    // }

    return (
        <h1 className='clockFont'>{time.toLocaleTimeString('en-US')}</h1>
    );
}

export default DigitalClock;
