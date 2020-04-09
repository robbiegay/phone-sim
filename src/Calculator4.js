import React from 'react';

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
        this.numPress = this.numPress.bind(this);
        this.keyPress = this.keyPress.bind(this);
        this.mathCalc = this.mathCalc.bind(this);
        this.multiCalc = this.multiCalc.bind(this);
        this.equalCalc = this.equalCalc.bind(this);
        this.clear = this.clear.bind(this);
    }

    calcBtns = ['C', '', '', '/', '7', '8', '9', 'X', '4', '5', '6', '-', '1', '2', '3', '+', '0', '', '.', '='];

    // CALC LOGIC
    // Differentiates between numbers and symbols
    userClick(e) {
        const val = e.target.innerHTML;
        if (val === 'C' || val === '/' || val === 'X' || val === '-' || val === '+' || val === '=' || val === '.') {
            this.keyPress(val);
        } else {
            this.numPress(val);
        }
    }

    // If a number is pressed
    numPress(inputNum) {
        // Resets the equal temp number on any number press
        this.setState({ equalTemp: undefined });
        // Sets num1
        if (this.state.operand === '' || this.state.eqPress) {
            // If equal was just pressed, followed by a number, clears the calc
            if (this.state.eqPress) {
                this.setState({
                    num1: inputNum,
                    operand: '',
                    eqPress: false,
                    display: inputNum,
                })
            }
            // Makes it so you can't enter 00000
            if (inputNum === '0' && (this.state.num1 === '0' || this.state.num1 === '')) {
                this.setState({ 
                    num1: '0',
                    display: '0',
                });
                // Caps the input length at 10 digits
            } else if (this.state.num1.length < 10) {
                if (this.state.num1 === '0') {
                    this.setState({ 
                        num1: inputNum,
                        display: inputNum,
                     });
                } else {
                    var result1 = this.state.num1 + inputNum;
                    this.setState({
                        num1: result1,
                        display: result1,
                    });
                }
            }
            // Sets num2
        } else {
            if (inputNum === '0' && (this.state.num2 === '0' || this.state.num2 === '')) {
                this.setState({ 
                    num2: '0',
                    display: '0',
                });
            } else if (this.state.num2.length < 10) {
                if (this.state.num2 === '0') {
                    this.setState({ 
                        num2: inputNum,
                        display: inputNum,
                    });
                } else {
                    var result2 = this.state.num2 + inputNum;
                    this.setState({
                        num2: result2,
                        display: result2,
                    });
                }
            }
        }
    }

    // If a symbol is pressed
    keyPress(inputKey) {
        // If the key is not =, then reset the equal values
        if (inputKey !== '=') {
            this.setState({
                equalTemp: undefined,
                eqPress: false,
            });
        }
        // Switch cases for various symbols
        switch (inputKey) {
            default:
                if (this.state.num1 !== '') {
                    if (this.state.num2 === '') {
                        this.setState({
                            display: inputKey,
                            operand: inputKey === 'X' ? '*' : inputKey,
                        });
                        break;
                    } else {
                        this.multiCalc(this.state.operand);
                        this.setState({
                            operand: inputKey === 'X' ? '*' : inputKey,
                        });
                        break;
                    }
                }
                break;
            case '=':
                // If either input is '.' --> display 'Illegal use of decimal'
                if (this.state.num1 === '.' || this.state.num2 === '.') {
                    this.clear();
                    this.setState({ display: 'error:decimal use' });
                    break;
                }
                if (this.state.num1 === Infinity || this.state.num1 === -Infinity) {
                    this.clear();
                    this.setState({ display: 'Infinity' });
                    break;
                }
                // Divide by zero case
                if (this.state.operand === '/' && this.state.num2 === '0') {
                    this.clear();
                    this.setState({ display: 'error:div by zero'});
                    break;
                }
                // Records a boolean for if = was the last key pressed
                this.setState({ eqPress: true });
                // If neither num1 nor num2 have been defined yet, do nothing
                if (this.state.num1 === '' && this.state.num2 === '') {
                    break;
                    // If num2 is undefined, calculate using num1 [operand] num1
                } else if (this.state.num2 === '') {
                    this.equalCalc(this.state.operand);
                    break;
                    // If num2 has been defined, record num2 in the equal sign's temp num holder, then calculate
                } else {
                    this.setState({
                        equalTemp: this.state.num2,
                        display: this.mathCalc(this.state.operand)
                    });
                    break;
                }
            case '.':
                // If operand is undefined, then apply decimal to num1
                if (this.state.operand === '') {
                    // Check to make sure num1 doesn't already have a decimal
                    if (!this.state.num1.includes('.')) {
                        this.setState({
                            num1: this.state.num1 + '.',
                            display: this.state.num1 + '.',
                        });
                    }
                } else {
                    if (!this.state.num2.includes('.')) {
                        this.setState({
                            num2: this.state.num2 + '.',
                            display: this.state.num2 + '.',
                        });
                    }
                }
                break;
            // Clears the calc and all its variables if btn C is pressed
            case 'C':
                this.clear();
        }
    }

    // Normal calculations --> [] + [] =
    mathCalc(key) {
        switch (key) {
            case '+':
                // Calculates num1 [operand] num2, stores that value 
                // in num1 and displays it, clears num2 for use in future calculations
                var plus = Number(this.state.num1) + Number(this.state.num2);
                this.setState({
                    num1: plus,
                    num2: '',
                });
                return plus;
            case '-':
                var minus = Number(this.state.num1) - Number(this.state.num2);
                this.setState({
                    num1: minus,
                    num2: '',
                });
                return minus;
            case '/':
                var div = Number(this.state.num1) / Number(this.state.num2);
                this.setState({
                    num1: div,
                    num2: '',
                });
                return div;
            case '*':
                var mult = Number(this.state.num1) * Number(this.state.num2);
                this.setState({
                    num1: mult,
                    num2: '',
                });
                return mult;
            default:
                console.log('WARNING: Math Calc default case.');
        }
    }

    // [] + [] + []... =
    multiCalc(key) {
        switch (key) {
            case '+':
                this.setState({
                    num1: Number(this.state.num1) + Number(this.state.num2),
                    num2: '',
                    display: Number(this.state.num1) + Number(this.state.num2),
                });
                break;
            case '-':
                this.setState({
                    num1: Number(this.state.num1) - Number(this.state.num2),
                    num2: '',
                    display: Number(this.state.num1) - Number(this.state.num2),
                });
                break;
            case '/':
                this.setState({
                    num1: Number(this.state.num1) / Number(this.state.num2),
                    num2: '',
                    display: Number(this.state.num1) / Number(this.state.num2),
                });
                break;
            case '*':
                this.setState({
                    num1: Number(this.state.num1) * Number(this.state.num2),
                    num2: '',
                    display: Number(this.state.num1) * Number(this.state.num2),
                });
                break;
            default:
                console.log('WARNING: Multi Calc default case');
        }
    }

    // For when equal sign is pressed multiple times --> [] + = = = OR [] + [] = = =
    equalCalc(key) {
        var localTemp = this.state.equalTemp;
        // If equal's temp num has not been defined yet, define it
        // Otherwise, keep performing calculations using the old value
        if (this.state.equalTemp === undefined) {
            this.setState({ equalTemp: this.state.num1 });
            localTemp = this.state.num1;
        }
        switch (key) {
            case '+':
                this.setState({
                    num1: Number(this.state.num1) + Number(localTemp),
                    num2: '',
                    display: Number(this.state.num1) + Number(localTemp),
                })
                break;
            case '-':
                this.setState({
                    num1: Number(this.state.num1) - Number(localTemp),
                    num2: '',
                    display: Number(this.state.num1) - Number(localTemp),
                })
                break;
            case '/':
                this.setState({
                    num1: Number(this.state.num1) / Number(localTemp),
                    num2: '',
                    display: Number(this.state.num1) / Number(localTemp),
                })
                break;
            case '*':
                this.setState({
                    num1: Number(this.state.num1) * Number(localTemp),
                    num2: '',
                    display: Number(this.state.num1) * Number(localTemp),
                })
                break;
            case '':
                return this.state.num1;
            default:
                console.log('WARNING: Equal Calc default case triggered.');
        }
    }

    clear() {
        this.setState({
            num1: '',
            num2: '',
            operand: '',
            equalTemp: undefined,
            eqPress: false,
            display: '0',
        });
    }

    render() {
        return (
            <>
                <div className='container bg-light rounded'>
                    <div className='row'>
                        <p id='displayWindow' className='col bg-light text-right display-4 rounded'>{this.state.display}</p>
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

// DEBUGGING LOGS
// console.log(`Equation: ${this.state.num1} ->  ${this.state.operand} -> ${this.state.num2}`);
// console.log(`Equal temp num: ${this.state.equalTemp}; eqPress: ${this.state.eqPress}`)
// console.log('---------------');
