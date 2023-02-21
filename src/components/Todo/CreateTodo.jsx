import React from 'react';

const CreateTodo = () => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-10">
                        <input type="text" placeholder='Task Name' className='form-control' />
                    </div>
                    <div className="col-2">
                        <button className="btn btn-primary text-uppercase fw-bold">
                        Add To Do
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateTodo;