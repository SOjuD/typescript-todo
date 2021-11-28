import React from 'react';

const Error = () => {
    const currentPath = window.location.href;
    return (
        <div className='movies_error'>
           <h2>Oh no!</h2>
           <h3>Something went wrong</h3>
            <p>please try to <a href={currentPath}>refresh</a> the page or contact administrator</p>
        </div>
    );
};

export default Error;
