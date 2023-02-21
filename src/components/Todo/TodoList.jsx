import React from 'react';
import { useSelector } from 'react-redux';
import TodoDeleteAlert from './TodoDeleteAlert';

const TodoList = () => {
    const todoItems = useSelector((state)=>state.todo.value)
    return (
        <div>
            <div className="container my-5">
                <div className="row">
                    <div className="col-12">
                        <table className='table'>
                            <thead>
                                <tr className='table-light'>
                                    <th>No</th>
                                    <th>Task Name</th>
                                    <th>Edit</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                            {
                                todoItems.map((item, i)=>{
                                    return(
                                        <tr key={i.toString()}>
                                            <td>{i}</td>
                                            <td>{item}</td>
                                            <td> 
                                                <button className="btn btn-secondary">Edit</button>
                                            </td>
                                            <td> 
                                                <button onClick={()=>{TodoDeleteAlert(i)}} className="btn btn-danger">Delete</button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                                
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TodoList;