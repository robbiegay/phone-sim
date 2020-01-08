import React, { useState } from 'react';

function Calculator() {
    const calcBtns = ['C', '', '', '/', '7', '8', '9', 'X', '4', '5', '6', '-', '1', '2', '3', '+', '0', '', '.', '='];
    // // Default values
    // var num1 = '';
    // var num2 = '';
    // var operand = '';
    // // Values for multiple equal sign press
    // var equalTemp = undefined;
    // var eqPress = false;

    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [operand, setOperand] = useState('');
    const [equalTemp, setEqualTemp] = useState(undefined);
    const [eqPress, setEqPress] = useState(false);
    const [display, setDisplay] = useState('0');

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
        // Debugging Logs:
        console.log(`Equation: ${num1} ->  ${operand} -> ${num2}`);
        console.log(`Equal temp num: ${equalTemp}; eqPress: ${eqPress}`)
        console.log(`Display: ${display}`);
        console.log('---------------');
    }

    // If a number is pressed
    function numPress(inputNum) {
        // Resets the equal temp number on any number press
        setEqualTemp(undefined);
        // equalTemp = undefined;
        // If equal was just pressed, followed by a number, clears the calc
        if (eqPress) {
            clear();
        }
        // Sets num1
        if (operand === '') {
            // Makes it so you can't enter 00000
            if (inputNum === '0' && num1 === '0') {
                setNum1('');
                // num1 = '';
                // Caps the input length at 10 digits
            } else if (num1.length < 10) {
                console.log(inputNum);
                if (num1 === '0') {
                    setNum1('');
                    // num1 = '';
                }
                setNum1(num1 + inputNum);
                // num1 += inputNum;
                setDisplay(num1);
            }
            // Sets num2
        } else {
            if (inputNum === '0' && num2 === '0') {
                setNum2('');
                // num2 = '';
            } else if (num2.length < 10) {
                if (num2 === '0') {
                    setNum2('');
                    // num2 = '';
                }
                setNum1(num2 + inputNum);
                // num2 += inputNum;
                setDisplay(num2);
            }
        }
    }

    // If a symbol is pressed
    function keyPress(inputKey) {
        // If the sym is not =, then reset the equal values
        if (inputKey !== '=') {
            setEqualTemp(undefined);
            setEqPress(false);
            // equalTemp = undefined;
            // eqPress = false;
        }
        // Switch cases for various symbols
        switch (inputKey) {
            case '+':
                // Only allows you to input operands if num1 has already been defined
                // Otherwise, you can press an operand, and then a num, which can cause weird results
                if (num1 !== '') {
                    // If num2 isn't defined yet, set the operand and do nothing else
                    if (num2 === '') {
                        setDisplay('+');
                        setOperand('+');
                        // operand = '+';
                        break;
                        // If it has been defined, calculate the last 2 numbers, display that result,
                        // place the result in num1, and clear num2
                    } else {
                        multiCalc(operand);
                        setDisplay(num1);
                        setOperand('+');
                        // operand = '+';
                        break;
                    }
                }
                break;
            case '-':
                if (num1 !== '') {
                    if (num2 === '') {
                        setDisplay('-');
                        setOperand('-');
                        // operand = '-';
                        break;
                    } else {
                        multiCalc(operand);
                        setDisplay(num1);
                        setOperand('-');
                        // operand = '-';
                        break;
                    }
                }
                break;
            case '/':
                if (num1 !== '') {
                    if (num2 === '') {
                        setDisplay('/');
                        setOperand('/');
                        // operand = '/';
                        break;
                    } else {
                        multiCalc(operand);
                        setDisplay(num1);
                        setOperand('/');
                        // operand = '/';
                        break;
                    }
                }
                break;
            case 'X':
                if (num1 !== '') {
                    if (num2 === '') {
                        setDisplay('X');
                        setOperand('*');
                        // operand = '*';
                        break;
                    } else {
                        multiCalc(operand);
                        setDisplay(num1);
                        setOperand('*');
                        // operand = '*';
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
                // eqPress = true;
                // If neither num1 nor num2 have been defined yet, do nothing
                if (num1 === '' && num2 === '') {
                    break;
                    // If num2 is undefined, calculate using num1 [operand] num1
                } else if (num2 === '') {
                    setDisplay(equalCalc(operand));
                    break;
                    // If num2 has been defined, record num2 in the equal sign's temp num holder, then calculate
                } else {
                    setEqualTemp(num2);
                    // equalTemp = num2;
                    setDisplay(mathCalc(operand));
                    break;
                }
            case '.':
                // If operand is undefined, then apply decimal to num1
                if (operand === '') {
                    // Check to make sure num1 doesn't already have a decimal
                    if (!num1.includes('.')) {
                        setNum1(num1 + '.');
                        // num1 += '.';
                        setDisplay(num1);
                    }
                } else {
                    if (!num2.includes('.')) {
                        setNum2(num2 + '.');
                        // num2 += '.';
                        setDisplay(num2);
                    }
                }
                break;
            // Clears the calc and all its variables if btn C is pressed
            case 'C':
                clear();
                break;
            default:
                console.log('A default case has been triggered.');
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
                // num1 = Number(num1) + Number(num2);
                // num2 = '';
                return num1;
            case '-':
                setNum1(Number(num1) - Number(num2));
                setNum2('');
                // num1 = Number(num1) - Number(num2);
                // num2 = '';
                return num1;
            case '/':
                setNum1(Number(num1) / Number(num2));
                setNum2('');
                // num1 = Number(num1) / Number(num2);
                // num2 = '';
                return num1;
            case '*':
                setNum1(Number(num1) * Number(num2));
                setNum2('');
                // num1 = Number(num1) * Number(num2);
                // num2 = '';
                return num1;
            default:
                console.log('A default case has been triggered.');
        }
    }

    // [] + [] + []... =
    function multiCalc(sym) {
        switch (sym) {
            case '+':
                setNum1(Number(num1) + Number(num2));
                setNum2('');
                // num1 = Number(num1) + Number(num2);
                // num2 = '';
                break;
            case '-':
                setNum1(Number(num1) - Number(num2));
                setNum2('');
                // num1 = Number(num1) - Number(num2);
                // num2 = '';
                break;
            case '/':
                setNum1(Number(num1) / Number(num2));
                setNum2('');
                // num1 = Number(num1) / Number(num2);
                // num2 = '';
                break;
            case '*':
                setNum1(Number(num1) * Number(num2));
                setNum2('');
                // num1 = Number(num1) * Number(num2);
                // num2 = '';
                break;
            default:
                console.log('A default case has been triggered.');
        }
    }

    // For when equal sign is pressed multiple times --> [] + = = = OR [] + [] = = =
    function equalCalc(sym) {
        switch (sym) {
            case '+':
                // If equal's temp num has not been defined yet, define it
                // Otherwise, keep performing calculations using the old value
                if (equalTemp === undefined) {
                    setEqualTemp(num1);
                    // equalTemp = num1;
                }
                setNum1(Number(num1) + Number(equalTemp));
                setNum2('');
                // num1 = Number(num1) + Number(equalTemp);
                // num2 = '';
                return num1;
            case '-':
                if (equalTemp === undefined) {
                    setEqualTemp(num1);
                    // equalTemp = num1;
                }
                setNum1(Number(num1) - Number(equalTemp));
                setNum2('');
                // num1 = Number(num1) - Number(equalTemp);
                // num2 = '';
                return num1;
            case '/':
                if (equalTemp === undefined) {
                    setEqualTemp(num1);
                    // equalTemp = num1;
                }
                setNum1(Number(num1) / Number(equalTemp));
                setNum2('');
                // num1 = Number(num1) / Number(equalTemp);
                // num2 = '';
                return num1;
            case '*':
                if (equalTemp === undefined) {
                    setEqualTemp(num1);
                    // equalTemp = num1;
                }
                setNum1(Number(num1) * Number(equalTemp));
                setNum2('');
                // num1 = Number(num1) * Number(equalTemp);
                // num2 = '';
                return num1;
            case '':
                return num1;
            default:
                console.log('A default case has been triggered.');
        }
    }

    // Resets all of the calculator's values to their default state
    function clear() {
        setNum1('');
        setNum2('');
        setOperand('');
        setEqualTemp(undefined);
        setEqPress(false);
        // num1 = '';
        // num2 = '';
        // operand = '';
        setDisplay(0);
        // equalTemp = undefined;
        // eqPress = false;
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
