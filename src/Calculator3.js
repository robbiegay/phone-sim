import React, { useState, useEffect } from 'react';

function Calculator3() {
    const calcBtns = ['C', '', '', '/', '7', '8', '9', 'X', '4', '5', '6', '-', '1', '2', '3', '+', '0', '', '.', '='];

    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [operand, setOperand] = useState('');
    const [equalTemp, setEqualTemp] = useState(undefined);
    const [eqPress, setEqPress] = useState(false);
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
            keyPress(val);
        } else {
            numPress(val);
        }
        // If NaN (for example, from 0/0) clears the calc and displays a message)
        if (display === 'NaN') {
            clear();
            setDisplay('-Undefined-');
        }
    }

    function numPress(inputNum) {
        // Resets the equal temp number on any number press
        setEqualTemp(undefined);
        // If equal was just pressed, followed by a number, clears the calc
        if (eqPress) {
            clear();
        }
        // Sets num1
        if (operand === '') {
            // Makes it so you can't enter 00000
            if (inputNum === '0' && num1 === '0') {
                setNum1('');
                // Caps the input length at 10 digits
            } else if (num1.length < 10) {
                if (num1 === '0') {
                    setNum1('');
                }
                setNum1(num1 + inputNum);
                // setDisplay(num1);
                console.log('num1: ' + num1);
                console.log('display: ' + display);
            }
            // Sets num2
        } else {
            if (inputNum === '0' && num2 === '0') {
                setNum2('');
            } else if (num2.length < 10) {
                if (num2 === '0') {
                    setNum2('');
                }
                setNum2(num2 + inputNum);
                // setDisplay(num2);
            }
        }
    }

    function keyPress(inputKey) {
        // If the sym is not =, then reset the equal values
        if (inputKey !== '=') {
            setEqualTemp(undefined);
            setEqPress(false);
        }
        // Switch cases for various symbols
        switch (inputKey) {
            default:
                if (num1 !== '') {
                    if (num2 === '') {
                        setDisplay(inputKey === 'X' ? 'X' : inputKey);
                        setOperand(inputKey);
                        break;
                    } else {
                        // multiCalc(operand);
                        // setDisplay(num1);
                        // // setOperand(inputKey);
                        // operand = `${inputKey}`;
                        console.log('multi calc triggered');
                        break;
                    }
                }
                break;
            case '=':
                // If either input is '.' --> display "Illegal use of decimal"
                if (num1 === '.' || num2 === '.') {
                    clear();
                    setDisplay('-Invalid Use of Decimal-');
                }
                // Records a boolean for if = was the last sym pressed
                setEqPress(true);
                // If neither num1 nor num2 have been defined yet, do nothing
                if (num1 === '' && num2 === '') {
                    break;
                    // If num2 is undefined, calculate using num1 [operand] num1
                } else if (num2 === '') {
                    // setDisplay(equalCalc(operand));
                    break;
                    // If num2 has been defined, record num2 in the equal sign's temp num holder, then calculate
                } else {
                    setEqualTemp(num2);
                    setDisplay(mathCalc(operand));
                    console.log('the answer --> ' + mathCalc(operand));
                    break;
                }
            case '.':
                // If operand is undefined, then apply decimal to num1
                if (operand === '') {
                    // Check to make sure num1 doesn't already have a decimal
                    if (!num1.includes('.')) {
                        setNum1(num1 + '.');
                        setDisplay(num1);
                    }
                } else {
                    if (!num2.includes('.')) {
                        setNum2(num2 + '.');
                        setDisplay(num2);
                    }
                }
                break;
            // Clears the calc and all its variables if btn C is pressed
            case 'C':
                clear();
                break;
        }
    }

    // Normal calculations --> [] + [] =
    function mathCalc(sym) {
        switch (sym) {
            case '+':
                // Calculates num1 [operand] num2, stores that value 
                // in num1 and displays it, clears num2 for use in future calculations
                setNum1(Number(num1) + Number(num2));
                setNum2('');
                return num1;
            case '-':
                setNum1(Number(num1) - Number(num2));
                setNum2('');
                return num1;
            case '/':
                setNum1(Number(num1) / Number(num2));
                setNum2('');
                return num1;
            case '*':
                setNum1(Number(num1) * Number(num2));
                setNum2('');
                return num1;
            default:
                console.log('MathCalc --> A default case has been triggered.');
        }
    }

    function clear() {
        setNum1('');
        setNum2('');
        setOperand('');
        setEqualTemp(undefined);
        setEqPress(false);
        setDisplay(0);
    }

    // Debugging Logs:
    console.log(`Equation: ${num1} ->  ${operand} -> ${num2}`);
    console.log(`Equal temp num: ${equalTemp}; eqPress: ${eqPress}`)
    console.log('---------------');

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

export default Calculator3;
