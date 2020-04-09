import React, { useState, useEffect } from 'react';

function Calculator5() {
    const calcBtns = ['C', '', '', '/', '7', '8', '9', 'X', '4', '5', '6', '-', '1', '2', '3', '+', '0', '', '.', '='];
    const [display, setDisplay] = useState('0');

    var num1 = '';
    var num2 = '';
    var operand = '';
    var equalTemp = undefined;
    var eqPress = false;

    useEffect(() => {
        setDisplay(num1);
    }, [num1]); 

    function userClick(e) {
        const val = e.target.innerHTML;
        if (val === 'C' || val === '/' || val === 'X' || val === '-' || val === '+' || val === '=' || val === '.') {
            // keyPress(val);
            console.log('key was pressed');
        } else {
            numPress(val);
        }
        // If NaN (for example, from 0/0) clears the calc and displays a message)
        if (display === 'NaN') {
            // clear();
            console.log('CLEAR');
            setDisplay('-Undefined-');
        }
    }

    function numPress(inputNum) {
        // Resets the equal temp number on any number press
        equalTemp = undefined;
        // If equal was just pressed, followed by a number, clears the calc
        if (eqPress) {
            // clear();
            console.log('CLEAR');
        }
        // Sets num1
        if (operand === '') {
            // Makes it so you can't enter 00000
            if (inputNum === '0' && num1 === '0') {
                num1 = '';
                // Caps the input length at 10 digits
            } else if (num1.length < 10) {
                if (num1 === '0') {
                    num1 = '';
                }
                num1 += inputNum;
                // setDisplay(num1);
                console.log('num1: ' + num1);
                console.log('display: ' + display);
            }
            // Sets num2
        } else {
            if (inputNum === '0' && num2 === '0') {
                num2 = '';
            } else if (num2.length < 10) {
                if (num2 === '0') {
                    num2 = '';
                }
                num2 += inputNum;
                setDisplay(num2);
            }
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
        </>);
}

export default Calculator5;
