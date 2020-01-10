import React from 'react';
import Clock from './DigitalClock';
import Countdown from './CountdownTimer';
// import Calculator from './Calculator';
// import Calculator2 from './Calculator2';
// import Calculator3 from './Calculator3';
import Calculator4 from './Calculator4';
// import Calculator5 from './Calculator5';
// import TicTacToe from './TicTacToe';
// import MindReader from './MindReader';
// import WidgetBox from './WidgetBox';
import Weather from './Weather';
import background from './background-1.jpg';

// Adds a Bootstrap layout to the App

function Layout() {
    var sectionStyle = {
        backgroundImage: `url(${background})`,
        backgroundSize: '442px 786px',
        borderRadius: '10px',
        backgroundRepeat: 'no-repeat',
        width: '442px',
        height: '786px',
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
                                {/* <Weather />
                                <Countdown /> */}
                                {/* <Calculator /> */}
                                {/* <Calculator2 /> */}
                                {/* <Calculator3 /> */}
                                <Calculator4 />
                                {/* <Calculator5 /> */}
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
