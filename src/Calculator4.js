import React, { setState } from 'react';

class Calculator4 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // Default Values
            num1: '',
            num2: '',
            operand: '',
            // Values for multiple equal sign press
            equalTemp: undefined,
            eqPress: false,

            display: '0',
        };
        this.userClick = this.userClick.bind(this);
    }

    calcBtns = ['C', '', '', '/', '7', '8', '9', 'X', '4', '5', '6', '-', '1', '2', '3', '+', '0', '', '.', '='];
    // display = 'test';

    // CALC LOGIC
    // Differentiates between numbers and symbols
    userClick(e) {
        const val = e.target.innerHTML;
        if (val === 'C' || val === '/' || val === 'X' || val === '-' || val === '+' || val === '=' || val === '.') {
            // symPress(val);
            console.log('sym press');
        } else {
            // numPress(val);
            this.setState({
                display: val,
            });
        }
        // If NaN (for example, from 0/0) clears the calc and displays a message)
        // if (displayWindow.innerHTML === 'NaN') {
        //     clear();
        //     displayWindow.innerHTML = '-Undefined-';
        // }
        // Debugging Logs:
        // console.log(`Equation: ${this.num1} ->  ${this.operand} -> ${this.num2}`);
        // console.log(`Equal temp num: ${this.equalTemp}; eqPress: ${this.eqPress}`)
        // console.log('---------------');
    }

    // // If a number is pressed
    // numPress(inputNum) {
    //     // Resets the equal temp number on any number press
    //     this.equalTemp = undefined;
    //     // If equal was just pressed, followed by a number, clears the calc
    //     if (this.eqPress) {
    //         // clear();
    //     }
    //     // Sets num1
    //     if (this.operand === '') {
    //         // Makes it so you can't enter 00000
    //         if (inputNum === '0' && this.num1 === '0') {
    //             this.num1 = '';
    //             // Caps the input length at 10 digits
    //         } else if (this.num1.length < 10) {
    //             if (this.num1 === '0') {
    //                 this.num1 = '';
    //             }
    //             this.num1 += inputNum;
    //             displayWindow.innerHTML = this.num1;
    //         }
    //         // Sets num2
    //     } else {
    //         if (inputNum === '0' && this.num2 === '0') {
    //             this.num2 = '';
    //         } else if (this.num2.length < 10) {
    //             if (this.num2 === '0') {
    //                 this.num2 = '';
    //             }
    //             this.num2 += inputNum;
    //             displayWindow.innerHTML = this.num2;
    //         }
    //     }
    // }

    render() {
        return (
            <>
                <div className='container bg-light rounded'>
                    <div className='row'>
                        <p className='col bg-light text-right display-4 rounded'>{this.state.display}</p>
                    </div>
                    <div className='row'>
                        {this.calcBtns.map((val, idx) => {
                            return <button key={val !== '' ? val : `blank${idx}`} onClick={this.userClick} type='button' className='col-3 border bg-light display-4 btn' disabled={val === ''}>{val}</button>
                        })}
                    </div>
                </div>
            </>

        );
    }
}

export default Calculator4;
