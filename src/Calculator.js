import React, { useState, useEffect } from 'react';

function Calculator() {
    return (
        <>
            <div className='container bg-light rounded'>
                <div className='row'>
                    <p>display</p>
                </div>
                <div className='row'>
                    <button className='col-3 btn border'>1</button>
                    <button className='col-3 btn border'>2</button>
                    <button className='col-3 btn border'>3</button>
                    <button className='col-3 btn border'>4</button>
                </div>
            </div>
        </>
    );
}

export default Calculator;
