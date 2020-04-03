import React from 'react';
import Clock from './DigitalClock';
import Countdown from './CountdownTimer';
import Weather from './Weather';
import Calculator4 from './Calculator4';
import ToDo from './ToDo.js';
import MindReader2 from './MindReader2';
import background from './background-1.jpg';

function Layout() {
    var sectionStyle = {
        backgroundImage: `url(${background})`,
        backgroundSize: '442px 1500px', //'442px 786px',
        borderRadius: '10px',
        backgroundRepeat: 'no-repeat',
        width: '442px',
        height: '1500px', //'786px',
        borderWidth: '3px',
        borderStyle: 'solid',
    };

    return (
        <>
            {/* Gray background */}
            <div className='container-fluid bg-dark'>
                <div className='row'>
                    <div className='col-0 col-sm-2 col-md-3 col-lg-4' />
                    <div className='col-12 col-sm-8 col-md-6 col-lg-4 text-center'>
                        <div className='p-1 py-3'>
                            {/* section = background image */}
                            <section style={sectionStyle}>
                                <Clock />
                                <Weather />
                                <Countdown />
                                <Calculator4 />
                                <ToDo />
                                <MindReader2 />
                            </section>
                        </div>
                    </div>
                    <div className='col-0 col-sm-2 col-md-3 col-lg-4' />
                </div>
            </div>
        </>
    );
}

export default Layout;


// Background Photo by Carles Rabada on Unsplash
// Carles -> https://unsplash.com/@carlesrgm?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText
// Unsplash -> https://unsplash.com/t/wallpapers?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText

