import React, { useState, useEffect, useRef } from 'react';

function MindReader2() {
    const [text, setText] = useState('I can read your mind');
    const [inst, setInst] = useState('');
    const [nextReveal, setNextReveal] = useState('NEXT');
    const [goReset, setGoReset] = useState('GO');
    const [pageNum, setPageNum] = useState(1);

    const finalAns = useRef();

    function symbols(num) {
        console.log('symbols have been summoned.');
    }

    var pageStyle = {
        fontSize: '60px',
    }

    switch (pageNum) {
        case 1:
            setText('I can read your mind');
            setInst('');
            setGoReset('GO');
            break;
        case 2:
            setText('Pick a number from 01-99');
            setInst('When you have your number, click next');
            setNextReveal('NEXT');
            setGoReset(<img src="img/undo-solid.svg" alt="reset"></img>);
            break;
        case 3:
            setText('Add both digits together to get a new number');
            setInst('Ex: 25 is 2 + 5 = 7' + <br /> + 'Ex: 05 is 0 + 5 = 5' + <br /> + 'Click next to proceed');
            setNextReveal('NEXT');
            setGoReset(<img src="img/undo-solid.svg" alt="reset"></img>);
            break;
        case 4:
            setText('Subtract your new number from your old number');
            setInst('Ex: 25 - 07 = 18 <br>Ex: 05 - 05 = 0 <br>Click next to proceed');
            setNextReveal('NEXT');
            setGoReset(<img src="img/undo-solid.svg" alt="reset"></img>);
            break;
        case 5:
            setText(symbols(100));
            setInst('Scroll to find the result of the previous equation.<br>Note the symbol beside the result.');
            setNextReveal('REVEAL');
            setGoReset(<img src="img/undo-solid.svg" alt="reset"></img>);
            break;
        case 6:
            setText(finalAns.current);
            setInst(`Your symbol is: ${finalAns.current}`);
            setNextReveal('REVEAL');
            setGoReset(<img src="img/undo-solid.svg" alt="reset"></img>);
            break;
        default:
            return null;
    }

    return (
        <>
            <div className='container bg-light rounded'>
                <div className='row'>
                    <p style={pageStyle} className='text-center'>{text}</p>
                </div>
                <div className='row'>
                    <button type="button" id="click" className='btn bg-primary mx-auto'>{goReset}</button>
                </div>
                <div className='row'>
                    <p className='text-primary mx-auto p-3'>{inst}</p>
                </div>
                <div className='row text-center'>
                    <button type="button" id="go" className='btn rounded-circle border p-3 mx-auto mb-3'>{nextReveal}</button>
                </div>
            </div>
        </>
    );
}

export default MindReader2;


// let finalAns; // The final string output

// function page1() {
//     click.setAttribute('style', 'visibility: hidden;');
// }

// function page2() {
//     click.setAttribute('style', 'visibility: visible;');
// }

// function page3() {
//     click.setAttribute('style', 'visibility: visible;');
// }

// function page4() {
//     click.setAttribute('style', 'visibility: visible;');
// }

// function page5() {
//     finalAns = text.textContent.slice(49, 50); // Gets the final symbol answer
//     text.setAttribute('style', 'max-height: 250px;'); // Sets the max height to allow scrolling
//     click.setAttribute('style', 'visibility: visible;');
// }

// function page6() {
//     click.setAttribute('style', 'visibility: hidden;');
// }

// function clickNext() {
//     page ++;
//     checkPage(page);
// }

// function clickReset() {
//     if (btn.getAttribute('class') === 'go') {
//         page = 2;
//         btn.setAttribute('class', 'reset');
//         checkPage(page);
//     } else {
//         page = 1;
//         btn.setAttribute('class', 'go');
//         checkPage(page);
//     }
// }

// function symbols(x) {
//     let output = '';
//     let sym = [];
//     let symChar = ['=', '@', '*', '$', '%', '^', '&', '+', '#'];
//     for (i = 0; i < 9; i++) {
//         let rand = (Math.floor(Math.random() * (9 - (9 - symChar.length)))); // rand num 0 - length of array
//         sym.push(symChar[rand]) // push into array
//         symChar.splice(rand, 1); // delete that symbol from array
//     }
//     for (i = 0; i < x; i++) {
//         let num = i;
//         output += `${num} - ${sym[(i) % 9]}<br>`; // subtract 1 because arrays count from 0
//     }
//     return output;
// }