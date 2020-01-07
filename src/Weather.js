import React, { useState, useEffect } from 'react';

function Weather() {
    const [weather, setWeather] = useState();
    const [location, setLocation] = useState(40383);

    const api = '3304f27423b1698d8944ae09a12b24d9';

    useEffect(() => {
        if (!weather) {
            fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${location},us&APPID=${api}`)
                .then(res => res.json())
                .then(
                    (result) => {
                        setWeather(result);
                        console.log('called');
                    });
        }
    });

    return (
        <>
            <div className='container bg-info rounded'>
                <div className='row'>
                    <p className='text-white mx-auto'>{weather ? weather.name : 'loading...'}</p>
                </div>
                <div className='row'>
                    <h1 className='text-white col-9'>{weather ? ((weather.main.temp - 273.15) * (9 / 5) + 32).toFixed(0) + '°' : null}</h1>
                    {weather ? <img className='col-3' src={'http://openweathermap.org/img/w/' + weather.weather[0].icon + '.png'} alt='Weather Icon' /> : null}
                    <button type='button' className='btn btn-danger' onClick={() => setLocation(90210)}>change</button>
                </div>
            </div>
        </>
    );
}

export default Weather;
