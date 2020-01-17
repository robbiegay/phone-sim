import React, { useState, useEffect, useRef } from 'react';
import undoImg from './undo-solid.svg';

function MindReader2() {
    const [text, setText] = useState('I can read your mind');
    const [inst, setInst] = useState('');
    const [nextReveal, setNextReveal] = useState('');
    const [goReset, setGoReset] = useState('GO');

    var pageNum = useRef(1);
    var finalAns = useRef();

    function symbols(num) {
        let output = '';
        let sym = [];
        let symChar = ['=', '@', '*', '$', '%', '^', '&', '+', '#'];
        for (let i = 0; i < 9; i++) {
            let rand = (Math.floor(Math.random() * (9 - (9 - symChar.length))));
            sym.push(symChar[rand]);
            symChar.splice(rand, 1);;
        }
        for (let i = 0; i < num; i++) {
            let num = i;
            output += `${num} - ${sym[(i) % 9]}<br>`; // subtract 1 because arrays count from 0
        }
        return output;
    }

    var pageStyle = {
        fontSize: '60px',
    }

    function nextPage() {
        pageNum.current++;
        renderPage();
    }

    function resetPage() {
        if (pageNum.current === 1) {
            pageNum.current++;
        } else {
            pageNum.current = 1;
        }
        renderPage();
    }

    const maxHeight = {
        maxHeight: '250px',
        fontSize: '60px',
    }

    function renderPage() {
        switch (pageNum.current) {
            case 1:
                setText('I can read your mind');
                setInst('');
                setGoReset('GO');
                break;
            case 2:
                setText('Pick a number from 01-99');
                setInst('When you have your number, click next');
                setNextReveal('NEXT');
                setGoReset(<img src={undoImg} alt="reset"></img>);
                break;
            case 3:
                setText('Add both digits together to get a new number');
                setInst('Ex: 25 is 2 + 5 = 7' + <br /> + 'Ex: 05 is 0 + 5 = 5' + <br /> + 'Click next to proceed');
                setNextReveal('NEXT');
                setGoReset(<img src={undoImg} alt="reset"></img>);
                break;
            case 4:
                setText('Subtract your new number from your old number');
                setInst('Ex: 25 - 07 = 18 <br>Ex: 05 - 05 = 0 <br>Click next to proceed');
                setNextReveal('NEXT');
                setGoReset(<img src={undoImg} alt="reset"></img>);
                break;
            case 5:
                var output = symbols(100);
                setText(output);
                setInst('Scroll to find the result of the previous equation.<br>Note the symbol beside the result.');
                setNextReveal('REVEAL');
                finalAns.current = output[4];
                document.getElementById('text').style = {maxHeight};
                // text.setAttribute('style', 'max-height: 250px;'); // Sets the max height to allow scrolling
                setGoReset(<img src={undoImg} alt="reset"></img>);
                break;
            case 6:
                setText(finalAns.current);
                setInst(`Your symbol is: ${finalAns.current}`);
                setNextReveal('');
                setGoReset(<img src={undoImg} alt="reset"></img>);
                break;
            default:
                return null;
        }
    }

    return (
        <>
            <div className='container bg-light rounded'>
                <div className='row'>
                    <p style={pageStyle} id='text' className='text-center'>{text}</p>
                </div>
                <div className='row'>
                    <button type="button" id="reset" onClick={resetPage} className='btn bg-primary mx-auto'>{goReset}</button>
                </div>
                <div className='row'>
                    <p className='text-primary mx-auto p-3'>{inst}</p>
                </div>
                <div className='row text-center'>
                    <button type="button" id="next" onClick={nextPage} className='btn rounded-circle border p-3 mx-auto mb-3'>{nextReveal}</button>
                </div>
            </div>
        </>
    );
}

export default MindReader2;


// function page1() {
//     click.setAttribute('style', 'visibility: hidden;');
// }
// 
// function page2() {
//     click.setAttribute('style', 'visibility: visible;');
// }
// 
// function page3() {
//     click.setAttribute('style', 'visibility: visible;');
// }
// 
// function page4() {
//     click.setAttribute('style', 'visibility: visible;');
// }
// 
// function page5() {
//     finalAns = text.textContent.slice(49, 50); // Gets the final symbol answer
//     text.setAttribute('style', 'max-height: 250px;'); // Sets the max height to allow scrolling
//     click.setAttribute('style', 'visibility: visible;');
// }
// 
// function page6() {
//     click.setAttribute('style', 'visibility: hidden;');
// }
// 
// 
// 
// Todo:
// - Make buttons disappear on certain pages
// - Style/sizing of elements
// - HTML <br> of instructions
