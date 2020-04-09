import React from 'react';

function BootstrapSizeDebugger() {
    // Displays the current Bootstrap size breakpoints

    return (
        <>
            <h1 className="d-block d-sm-none text-center">xs size</h1>
            <h1 className="d-none d-sm-block d-md-none text-center">sm size</h1>
            <h1 className="d-none d-md-block d-lg-none text-center">md size</h1>
            <h1 className="d-none d-lg-block d-xl-none text-center">lg size</h1>
            <h1 className="d-none d-xl-block text-center">xl size</h1>
        </>
    );
}

export default BootstrapSizeDebugger;
