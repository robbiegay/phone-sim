import React from 'react';

class SymbolArray extends React.Component {
    finalAns = 'DEFAULT';
    output = '';

    genSym() {
        console.log('Gen Sym Ran');
        let symArray = [];
        // let output = '';
        // Symbol options
        let symChar = ['=', '@', '*', '$', '%', '^', '&', '+', '#'];
        // Generates the idx of the answer
        let randNum = Math.floor(Math.random() * 9);
        // Sets finalAns to that idx
        this.finalAns = symChar[randNum];
        // Then removes that symbol from the options
        symChar.splice(randNum, 1);
        // Add 100 items to the array
        for (let i = 0; i < 100; i++) {
            // Pick a random array symbol
            let sym = symChar[Math.floor(Math.random() * 8)];
            // If the sym is the same as the previous one, add a new symbol
            // Did this b/c if you simply generate a new random number you run the risk of them happening to be the same
            // And if you loop until you get a new number, you could (maybe - super unlikely) loop forever
            if (sym === symArray[i - 1]) {sym = '!'};
            symArray.push(sym);
        }
        // Replace every multiple of 9 with the answer
        for (let i = 0; i < 12; i++) {
            symArray.splice((i * 9), 1, this.finalAns);
        }
        // Format the output into num --> sym
        symArray.map((item, idx) => this.output += `${idx} --> ${item} `);
        console.log(this.finalAns);
        // return this.setState({outputSym: this.output});
    }

    render() {
        return 'Test';
    }
}

export default SymbolArray;