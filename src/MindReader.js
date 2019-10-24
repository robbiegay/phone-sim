import React from 'react';
import TextBox from './TextBox';
import Button from './Button';

class MindReader extends React.Component {
    constructor(props) {
        super(props);
        this.nextPage = this.nextPage.bind(this);
        this.resetPage = this.resetPage.bind(this);
        this.state = {
            page: this.pageContent[0],
        }
    }

    finalAns = 'DEFAULT';
    currentPage = 0;

    genSym() {
        let symArray = [];
        let output = '';
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
        symArray.map((item, idx) => output += `${idx} --> ${item} `);
        console.log(this.finalAns);
        return output;
    }

    resetImg() {
        // return <img src='../public/undo-solid.svg' alt='reset'></img>;
        return 'RESET';
    }

    nextPage() {
        this.currentPage++;
        this.setState({ page: this.pageContent[this.currentPage] });
    }

    resetPage() {
        this.genSym();
        this.currentPage = 0;
        this.setState({ page: this.pageContent[this.currentPage] });
    }

    pageContent = [
        { 'text': 'I can read your mind', 'subtext': '', 'btn': 'GO', 'reset': '' },
        { 'text': 'Pick a number from 01-99', 'subtext': 'When you have your number, click next', 'btn': 'NEXT', 'reset': `${this.resetImg()}` },
        { 'text': 'Add both digits together to get a new number', 'subtext': `Ex: 25 is 2 + 5 = 7 || Ex: 05 is 0 + 5 = 5 || Click next to proceed`, 'btn': 'NEXT', 'reset': `${this.resetImg()}` },
        { 'text': 'Subtract your new number from your old number', 'subtext': 'Ex: 25 - 07 = 18 || Ex: 05 - 05 = 0 || Click next to proceed', 'btn': 'NEXT', 'reset': `${this.resetImg()}` },
        { 'text': `${this.genSym()}`, 'subtext': '', 'btn': 'REVEAL', 'reset': `${this.resetImg()}` },
        { 'text': `${this.finalAns}`, 'subtext': `Your symbol is: ${this.finalAns}`, 'btn': '', 'reset': `${this.resetImg()}` },
    ]

    render() {
        return (
            <React.Fragment>
                <TextBox text={this.state.page.text} />
                <Button text={this.state.page.btn} onClick={this.nextPage} />
                <TextBox text={this.state.page.subtext} />
                <Button text={this.state.page.reset} onClick={this.resetPage} />
            </React.Fragment>
        );
    }
}

export default MindReader;

/* 
Issues:
- Change || to <br>
- Won't update to a new number, might need to use state

*/