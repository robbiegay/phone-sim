import React, { useState, useEffect } from 'react';

function Calculator() {
    const calcBtns = ['C', '', '', '/', '7', '8', '9', 'X', '4', '5', '6', '-', '1', '2', '3', '+', '0', '', '.', '='];
    const [num1, setNum1] = useState('');
    // var num1 = '';
    var num2 = '';
    var operand = '';

    const [display, setDisplay] = useState('0');

    useEffect(() => {
        setDisplay(num1);
    }, [num1]);

    useEffect(() => {
        setDisplay(num2);
    }, [num2]);

    useEffect(() => {
        setDisplay(operand);
    }, [operand]);

    function userClick(e) {
        const val = e.target.innerHTML;
        if (val === 'C' || val === '/' || val === 'X' || val === '-' || val === '+' || val === '=' || val === '.') {
            console.log('key press');
        } else {
            numPress(val);
        }
    }

    function numPress(inputNum) {
        if (operand === '') {
            console.log(`num1: ${num1}`);
            setNum1(num1 + inputNum)
            // num1 += inputNum;
            console.log(`inputNum: ${inputNum}`);
            setDisplay(num1);
        }
        else {
            num2 += inputNum;
            setDisplay(num2);
        }
    }


    return (
        <>
            <div className='container bg-light rounded'>
                <div className='row'>
                    <p className='col bg-light text-right display-4 rounded'>{display}</p>
                </div>
                <div className='row'>
                    {calcBtns.map((val, idx) => {
                        return <button key={val !== '' ? val : `blank${idx}`} onClick={userClick} type='button' className='col-3 border bg-light display-4 btn' disabled={val === ''}>{val}</button>
                    })}
                </div>
            </div>
        </>
    );
}

export default Calculator;
