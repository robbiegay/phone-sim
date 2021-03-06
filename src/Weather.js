import React, { useState, useEffect } from 'react';

function Weather() {
    const [weather, setWeather] = useState();
    const [location, setLocation] = useState();

    const api = '3304f27423b1698d8944ae09a12b24d9';

    function success(pos) {
        setLocation({
            lat: pos.coords.latitude,
            long: pos.coords.longitude,
        });
    }

    // When state is changed (ie. when location is set) -> getWeather()
    useEffect(() => {
        if (location && !weather) {
            fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.long}&APPID=${api}`)
                .then(res => res.json())
                .then(
                    (result) => {
                        setWeather(result);
                    });
        }
    });

    function loadWeather() {
        navigator.geolocation.getCurrentPosition(success);
    }

    if (!location) {
        return (
            <>
                <div className='container bg-info rounded'>
                    <div className='row'>
                        <button type='button' id='loadWeather' onClick={loadWeather} className='btn bg-primary mx-auto my-4'>Load Local Weather</button>
                    </div>
                </div>
            </>
        );
    } else {
        return (
            <>
                <div className='container bg-info rounded'>
                    <div className='row'>
                        <p className='text-white mx-auto'>{weather ? weather.name : 'loading weather...'}</p>
                    </div>
                    <div className='row'>
                        <h1 className='text-white col-9'>{weather ? ((weather.main.temp - 273.15) * (9 / 5) + 32).toFixed(0) + '°' : null}</h1>
                        {weather ? <img className='col-3' src={'http://openweathermap.org/img/w/' + weather.weather[0].icon + '.png'} alt='Weather Icon' /> : null}
                    </div>
                </div>
            </>
        );
    }
}

export default Weather;
