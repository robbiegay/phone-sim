import React, { useState, useRef } from 'react';

function MindReader2() {
    const [text, setText] = useState('I can read your mind');
    const [inst, setInst] = useState(<p className='text-primary mx-auto p-3'>Press go</p>);
    const [nextReveal, setNextReveal] = useState('');
    const [goReset, setGoReset] = useState('GO');

    var pageNum = useRef(1);
    var finalAns = useRef();

    function symbols(num) {
        let output = [];
        let sym = [];
        let symChar = ['=', '@', '*', '$', '%', '^', '&', '+', '#'];
        for (let i = 0; i < 9; i++) {
            let rand = (Math.floor(Math.random() * (9 - (9 - symChar.length))));
            sym.push(symChar[rand]);
            symChar.splice(rand, 1);;
        }
        for (let i = 0; i < num; i++) {
            let num = i;
            output.push(`${num} - ${sym[(i) % 9]}`)
        }
        return output;
    }

    const pageStyle = {
        maxHeight: '250px',
        fontSize: '40px',
        overflow: 'scroll',
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

    function renderPage() {
        switch (pageNum.current) {
            case 1:
                setText('I can read your mind');
                setInst(<p className='text-primary mx-auto p-3'>Press go</p>);
                setNextReveal('');
                setGoReset('GO');
                break;
            case 2:
                setText('Pick a number from 01-99');
                setInst(<p className='text-primary mx-auto p-3'>When you have your number, click next</p>);
                setNextReveal('NEXT');
                setGoReset('RESET');
                break;
            case 3:
                setText('Add both digits together to get a new number');
                setInst(<p className='text-primary mx-auto p-3'>Ex: 25 is 2 + 5 = 7<br />Ex: 05 is 0 + 5 = 5<br />Click next to proceed</p>);
                setNextReveal('NEXT');
                setGoReset('RESET');
                break;
            case 4:
                setText('Subtract your new number from your old number');
                setInst(<p className='text-primary mx-auto p-3'>Ex: 25 - 07 = 18 <br />Ex: 05 - 05 = 0 <br />Click next to proceed</p>);
                setNextReveal('NEXT');
                setGoReset('RESET');
                break;
            case 5:
                var output = symbols(100);
                setText(output.map((val, idx) => {
                    return (
                        <div key={idx}>{val}</div>
                    );
                }));
                setInst(<p className='text-primary mx-auto p-3'>Scroll to find the result of the previous equation.<br />Note the symbol beside the result.</p>);
                setNextReveal('REVEAL');
                finalAns.current = output[0][4];
                setGoReset('RESET');
                break;
            case 6:
                setText(`Your symbol is: ${finalAns.current}`);
                setInst(<p className='text-primary mx-auto p-3'>Press reset to start over</p>);
                setNextReveal('');
                setGoReset('RESET');
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
                    <button type='button' id='reset' onClick={resetPage} className='btn bg-primary mx-auto'>{goReset}</button>
                </div>
                <div className='row'>
                    {inst}
                </div>
                <div className='row text-center'>
                    <button type='button' id='next' onClick={nextPage} className='btn rounded-circle border p-3 mx-auto mb-3'>{nextReveal}</button>
                </div>
            </div>
        </>
    );
}

export default MindReader2;
