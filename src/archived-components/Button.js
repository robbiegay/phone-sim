import React from 'react';

class Button extends React.Component {
    render() {
        if (this.props.text === '') {
            return <button style={{visibility: 'hidden'}}></button>
        }
        return <button onClick={this.props.onClick}>{this.props.text}</button>
    }
}

export default Button;