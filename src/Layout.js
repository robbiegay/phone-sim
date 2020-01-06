import React from 'react';
import Clock from './DigitalClock';
import WidgetBox from './WidgetBox';
// import Countdown from './CountdownTimer';
// import TicTacToe from './TicTacToe';
// import MindReader from './MindReader';
import background from './background-1.jpg';

// Adds a Bootstrap layout to the App

function Layout() {
    var sectionStyle = {
        backgroundImage: `url(${background})`,
        backgroundSize: '100% 812px',
        borderRadius: '10px',
        backgroundRepeat: 'no-repeat',
    };

    return (
        <>
            {/* Gray background */}
            <div className='container-fluid bg-secondary'>
                <div className='row'>
                    <div className='col-0 col-sm-2 col-md-3 col-lg-4' />
                    <div className='col-12 col-sm-8 col-md-6 col-lg-4 text-center'>
                        <div className='p-1 py-3'>
                            <section style={ sectionStyle }>
                                <Clock />
                                <WidgetBox />
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
