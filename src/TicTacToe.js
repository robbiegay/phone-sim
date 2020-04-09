import React from 'react';
import Square from './Square';

class TicTacToe extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className='row'>
                    <Square />
                    <Square />
                    <Square />
                    <Square />
                    <Square />
                    <Square />
                    <Square />
                    <Square />
                    <Square />
                </div>
            </React.Fragment>
        );
    }
}

export default TicTacToe;
