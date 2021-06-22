import React, { useState, useEffect } from 'react';

function CountdownTimer() {
    const [birthday, setBirthday] = useState(new Date());
    const [countdown, setCountdown] = useState({
        days: null,
        hrs: null,
        min: null,
        sec: null,
        mil: null,
    });
    const [done, setDone] = useState(false);

    const m = 1000 * 60;
    const h = m * 60;
    const d = h * 24;

    function addZeros(x) {
        x = x < 10 ? `0${x}` : x;
        return x;
    }

    // If the birthday timer has completed, increment to the next year
    useEffect(() => {
        var currentYear = new Date().getFullYear();
        var month = 2; // 2 (0 indexed months)
        var day = 21; // 21
        var hour = 0; // 0
        var minute = 0; // 0
        
        var nextBirthday = new Date(currentYear, month, day, hour, minute);
        if (new Date() > nextBirthday) {
            currentYear++;
        }

        setBirthday(new Date(currentYear, month, day, hour, minute));
      }, []);

    useEffect(() => {
        const timer = setInterval(
            () => {
                var totalM = birthday.valueOf() - Date.now();
                var days = Math.floor(totalM / d);
                totalM -= days * d;
                var hours = Math.floor(totalM / h);
                totalM -= hours * h;
                var min = Math.floor(totalM / m);
                totalM -= min * m;
                var sec = Math.floor(totalM / 1000);
                totalM -= sec * 1000;
                var milli = Math.floor(totalM / 100);
                if (days === 0 && hours === 0 && min === 0 && sec === 0 && milli === 0) {
                    setDone(true);
                    clearInterval(timer);
                }
                setCountdown({
                    days: days,
                    hrs: hours,
                    min: min,
                    sec: sec,
                    mil: milli,
                });
            }, 100
        );

        return function cleanup() {
            clearInterval(timer);
        }
    });

    return (
        <>
            <div className='container bg-warning rounded'>
                <div className='row'>
                    {!done ?
                        <>
                            <h1 className='clockFont'>{
                                countdown.days + ' days ' +
                                addZeros(countdown.hrs) + ':' +
                                addZeros(countdown.min) + ':' +
                                addZeros(countdown.sec) + '.' +
                                countdown.mil}
                            </h1>
                            <p className='mx-auto'>until my birthday</p>
                        </> :
                        <h1 className='mx-auto'>Happy Birthday!</h1>
                    }
                </div>
            </div>
        </>
    );
}

export default CountdownTimer;
