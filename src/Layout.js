import React from 'react';
import GetTime from './GetTime';
import TicTacToe from './TicTacToe';
import MindReader from './MindReader';
import background from './background-1.jpg';

// Adds a Bootstrap layout to the App

function Layout() {
    var sectionStyle = {
        // width: "100vw",
        // height: "100vh",
        backgroundImage: `url(${background})`,
        backgroundSize: '100% auto',
        borderRadius: '35px',
    };

    return (
        <>
            {/* <div id="bckImg" className="container-fluid mt-3" style="background-image: url(img/chidi-the-good-place.jpg); background-repeat: no-repeat; min-height: 700px"></div> */}
            <div className='container-fluid bg-secondary'>
                <div className='row'>
                    <div className='col-0 col-sm-0 col-md-1 col-lg-2' />
                    <div className='col-12 col-sm-12 col-md-10 col-lg-8 text-center'>
                        <div className='p-2'>
                            <section style={ sectionStyle }>
                                <GetTime type={'digiClock'} />
                                <h1 className='text-info'>Countdown Timer</h1>
                                <GetTime type={'countdown'} />
                                {/* <h1 className='text-warning'>Tic-Tac-Toe</h1>
                                <TicTacToe /> */}
                                {/* <h1 className='text-primary'>Mind Reader</h1>
                                <MindReader /> */}
                            </section>
                        </div>
                    </div>
                    <div className='col-0 col-sm-0 col-md-1 col-lg-2' />

                </div>
            </div>
        </>
    );

}

export default Layout;