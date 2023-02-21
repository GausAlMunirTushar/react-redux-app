import React from 'react';

const TodoList = () => {
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
                            <tr>
                            <td>1</td>
                                <td>Task Name</td>
                                <td> 
                                    <button className="btn btn-secondary">
                                    Edit
                                    </button>
                                </td>
                                <td> 
                                    <button className="btn btn-danger">
                                    Delete
                                    </button>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TodoList;