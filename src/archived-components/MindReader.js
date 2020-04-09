import React from 'react';
import TextBox from './TextBox';
import Button from './Button';
import SymbolArray from './SymbolArray';

class MindReader extends React.Component {
    constructor(props) {
        super(props);
        this.nextPage = this.nextPage.bind(this);
        this.resetPage = this.resetPage.bind(this);
        this.state = {
            page: this.pageContent[0],
            // outputSym: {'text': 'TEST'},
        }
    }

    // finalAns = 'DEFAULT';
    currentPage = 0;
    // output = '';

    // componentDidMount() {
    //     this.genSym();
    // }

    resetImg() {
        // return <img src='../public/undo-solid.svg' alt='reset'></img>;
        return 'RESET';
    }

    nextPage() {
        this.currentPage === 0 && SymbolArray.genSym();
        console.log(this.output);
        this.currentPage++;
        this.setState({ page: this.pageContent[this.currentPage] });
    }

    resetPage() {
        // this.genSym();
        // console.log('Reset Pressed');
        this.currentPage = 0;
        this.setState({ page: this.pageContent[this.currentPage] });
    }

    pageContent = [
        { 'text': 'I can read your mind', 'subtext': '', 'btn': 'GO', 'reset': '' },
        { 'text': 'Pick a number from 01-99', 'subtext': 'When you have your number, click next', 'btn': 'NEXT', 'reset': `${this.resetImg()}` },
        { 'text': 'Add both digits together to get a new number', 'subtext': `Ex: 25 is 2 + 5 = 7 || Ex: 05 is 0 + 5 = 5 || Click next to proceed`, 'btn': 'NEXT', 'reset': `${this.resetImg()}` },
        { 'text': 'Subtract your new number from your old number', 'subtext': 'Ex: 25 - 07 = 18 || Ex: 05 - 05 = 0 || Click next to proceed', 'btn': 'NEXT', 'reset': `${this.resetImg()}` },
        { 'text': '', 'subtext': '', 'btn': 'REVEAL', 'reset': `${this.resetImg()}` },
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