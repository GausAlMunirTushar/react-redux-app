import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../redux/state/todo/todoSlice';

const CreateTodo = () => {
    const dispatch = useDispatch();
    const inputTask = useRef();
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-10">
                        <input ref={inputTask} type="text" placeholder='Task Name' className='form-control' />
                    </div>
                    <div className="col-2">
                        <button onClick={()=>{dispatch(addTodo(inputTask.current.value))}} className="btn btn-primary text-uppercase fw-bold">
                        Add To Do
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateTodo;