import React, { useState, useEffect } from 'react';

function DigitalClock() {
    const [time, setTime] = useState(new Date());
    const settings = { hour: 'numeric', minute: '2-digit' };

    useEffect(() => {
        const clock = setInterval(
            () => setTime(new Date(), 1000)
        );

        return function cleanup() {
            clearInterval(clock);
        }
    });

    return (
        <h1 className='clockFont text-white'>{time.toLocaleTimeString([], settings)}</h1>
    );
}

export default DigitalClock;
