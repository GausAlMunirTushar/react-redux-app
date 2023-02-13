import React, { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, setCustom} from '../../redux/state/counter/counterSlice';

const Counter = () => {
    const myNumber = useRef()
    const count = useSelector((state)=> state.counter.value)
    const dispatch = useDispatch();
    return (
        <div>
            <div className="card">
                <div className="card-header bg-secondary">
                    <h3 className='text-uppercase text-white'>My Counter App</h3>
                </div>
                <div className="card-body p-4">
                    <h1 className='mx-2'>{count}</h1>
                    <div onClick={()=>{dispatch(increment())}} className="btn btn-success mx-2">Increase</div>
                    <div onClick={()=>{dispatch(decrement())}} className="btn btn-danger">Decrease</div>
                </div>
                <div className='mx-2'>
                    <input ref={myNumber} className='form-control w-50 m-2' type="number" placeholder='Enter a Number'/>
                    <button onClick={()=>{dispatch(setCustom(myNumber.current.value))}} className='m-2 w-50 btn btn-danger'>Set Custom</button>
                </div>
            </div>
        </div>
    );
};

export default Counter;