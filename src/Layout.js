import React from 'react';
import GetTime from './GetTime';
import TicTacToe from './TicTacToe';
import MindReader from './MindReader';

// Adds a Bootstrap layout to the App

class Layout extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-0 col-sm-0 col-md-1 col-lg-2' />
                        <div className='col-12 col-sm-12 col-md-10 col-lg-8 text-center'>
                            <div className='p-2'>
                                {/* <h1 className='text-success'>Digital Clock</h1>
                                <GetTime type={'digiClock'} />
                                <h1 className='text-info'>Countdown Timer</h1>
                                <GetTime type={'countdown'} />
                                <h1 className='text-warning'>Tic-Tac-Toe</h1>
                                <TicTacToe /> */}
                                <h1 className='text-primary'>Mind Reader</h1>
                                <MindReader />
                            </div>
                        </div>
                        <div className='col-0 col-sm-0 col-md-1 col-lg-2' />

                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Layout;