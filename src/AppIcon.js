import React, { useState, useEffect, useRef } from 'react';
import MindReader2 from './MindReader2';

function AppIcon() {
    const [appRender, setAppRender] = useState('~M~');

    return (
        <>
            <div className='container bg-success rounded' onClick={() => setAppRender(<MindReader2 />)}>
                <div className='row'>
                    {appRender}
                </div>
            </div>
        </>
    );
}

export default AppIcon;
