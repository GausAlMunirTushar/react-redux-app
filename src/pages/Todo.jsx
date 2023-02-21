import React from 'react';
import CreateTodo from '../components/Todo/CreateTodo'
import TodoList from '../components/Todo/TodoList';
const Todo = () => {
    return (
        <div>
            <div className="container my-5">
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-header">
                                <h3 className='text-center text-uppercase'>Todo App</h3>
                            </div>
                            <div className="card-body">
                                <CreateTodo></CreateTodo>
                                <TodoList></TodoList>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Todo;