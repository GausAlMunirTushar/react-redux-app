import React from 'react';

const Counter = () => {
    return (
        <div>
            <div className="card">
                <div className="card-header bg-secondary">
                    <h3 className='text-uppercase text-white'>My Counter App</h3>
                </div>
                <div className="card-body p-4">
                    <h1 className='mx-2'>00</h1>
                    <div className="btn btn-success mx-2">Increase</div>
                    <div className="btn btn-danger">Decrease</div>
                </div>
            </div>
        </div>
    );
};

export default Counter;