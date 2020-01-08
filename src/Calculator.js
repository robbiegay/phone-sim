import React, { useState, useEffect } from 'react';

function Calculator() {
    var calcBtns = ['C', '', '', '/', '7', '8', '9', 'X', '4', '5', '6', '-', '1', '2', '3', '+', '0', '', '.', '='];
    const [state, setState] = useState({
        num1: '',
        num2: '',
        operand: '',
        equalTemp: undefined,
        eqPress: false,
        display: 0,
    });

    function userClick(e) {
        const val = e.target.innerHTML;
        if (val === 'C' || val === '/' || val === 'X' || val === '-' || val === '+' || val === '=' || val === '.') {
            // keyPress(val);
        } else {
            numPress(val);
        }
        // // If NaN (for example, from 0/0) clears the calc and displays a message)
        // if (displayWindow.innerHTML === 'NaN') {
        //     clear();
        //     displayWindow.innerHTML = '-Undefined-';
        // }
        // // Debugging Logs:
        // console.log(`Equation: ${num1}  ${operand} ${num2}`);
        // console.log(`Equal temp num: ${equalTemp}; eqPress: ${eqPress}`)
        // console.log('---------------');
    }
    
    // If a number is pressed
    function numPress(inputNum) {
        // Resets the equal temp number on any number press
        setState({equalTemp: undefined});
        // If equal was just pressed, followed by a number, clears the calc
        if (state.eqPress) {
            // clear(); ============
        }
        // Sets num1
        if (state.operand === '') {
            // Makes it so you can't enter 00000
            if (inputNum === '0' && state.num1 === '0') {
                state.num1 = '';
                // Caps the input length at 10 digits
            } else if (state.num1.length < 10) {
                if (state.num1 === '0') {
                    state.num1 = '';
                }
                state.num1 += inputNum;
                setState({display: state.num1});
            }
            // Sets num2
        } else {
            if (inputNum === '0' && state.num2 === '0') {
                state.num2 = '';
            } else if (state.num2.length < 10) {
                if (state.num2 === '0') {
                    state.num2 = '';
                }
                state.num2 += inputNum;
                setState({display: state.num2});
            }
        }
    }
    
    // // If a symbol is pressed
    // function symPress(inputSym) {
    //     // If the sym is not =, then reset the equal values
    //     if (inputSym !== '=') {
    //         equalTemp = undefined;
    //         eqPress = false;
    //     }
    //     // Switch cases for various symbols
    //     switch (inputSym) {
    //         case '+':
    //             // Only allows you to input operands if num1 has already been defined
    //             // Otherwise, you can press an operand, and then a num, which can cause weird results
    //             if (num1 !== '') {
    //                 // If num2 isn't defined yet, set the operand and do nothing else
    //                 if (num2 === '') {
    //                     displayWindow.innerHTML = '+';
    //                     operand = '+';
    //                     break;
    //                     // If it has been defined, calculate the last 2 numbers, display that result,
    //                     // place the result in num1, and clear num2
    //                 } else {
    //                     multiCalc(operand);
    //                     displayWindow.innerHTML = num1;
    //                     operand = '+';
    //                     break;
    //                 }
    //             }
    //             break;
    //         case '-':
    //             if (num1 !== '') {
    //                 if (num2 === '') {
    //                     displayWindow.innerHTML = '-';
    //                     operand = '-';
    //                     break;
    //                 } else {
    //                     multiCalc(operand);
    //                     displayWindow.innerHTML = num1;
    //                     operand = '-';
    //                     break;
    //                 }
    //             }
    //             break;
    //         case '/':
    //             if (num1 !== '') {
    //                 if (num2 === '') {
    //                     displayWindow.innerHTML = '/';
    //                     operand = '/';
    //                     break;
    //                 } else {
    //                     multiCalc(operand);
    //                     displayWindow.innerHTML = num1;
    //                     operand = '/';
    //                     break;
    //                 }
    //             }
    //             break;
    //         case 'X':
    //             if (num1 !== '') {
    //                 if (num2 === '') {
    //                     displayWindow.innerHTML = 'X';
    //                     operand = '*';
    //                     break;
    //                 } else {
    //                     multiCalc(operand);
    //                     displayWindow.innerHTML = num1;
    //                     operand = '*';
    //                     break;
    //                 }
    //             }
    //             break;
    //         case '=':
    //             // If either input is '.' --> display "Illegal use of decimal"
    //             if (num1 === '.' || num2 === '.') {
    //                 clear();
    //                 displayWindow.innerHTML = '-Invalid Use of Decimal-';
    //             }
    //             // Records a boolean for if = was the last sym pressed
    //             eqPress = true;
    //             // If neither num1 nor num2 have been defined yet, do nothing
    //             if (num1 === '' && num2 === '') {
    //                 break;
    //                 // If num2 is undefined, calculate using num1 [operand] num1
    //             } else if (num2 === '') {
    //                 displayWindow.innerHTML = equalCalc(operand);
    //                 break;
    //                 // If num2 has been defined, record num2 in the equal sign's temp num holder, then calculate
    //             } else {
    //                 equalTemp = num2;
    //                 displayWindow.innerHTML = mathCalc(operand);
    //                 break;
    //             }
    //         case '.':
    //             // If operand is undefined, then apply decimal to num1
    //             if (operand === '') {
    //                 // Check to make sure num1 doesn't already have a decimal
    //                 if (!num1.includes('.')) {
    //                     num1 += '.';
    //                     displayWindow.innerHTML = num1;
    //                 }
    //             } else {
    //                 if (!num2.includes('.')) {
    //                     num2 += '.';
    //                     displayWindow.innerHTML = num2;
    //                 }
    //             }
    //             break;
    //         // Clears the calc and all its variables if btn C is pressed
    //         case 'C':
    //             clear();
    //     }
    // }

    return (
        <>
            <div className='container bg-light rounded'>
                <div className='row'>
                    <p>{state.num1}</p>
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
