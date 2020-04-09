import React from 'react';

class Square extends React.Component {
    render() {
        return <div className='col-4 border' onClick={() => alert('hi')}>Test</div>
    }
}

export default Square;
