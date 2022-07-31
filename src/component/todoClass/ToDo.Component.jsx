import React, { Component, Fragment, createRef } from 'react';
import ToDoContext from './ToDo.context';
import ToDoCreate from './ToDoCreate.component';
import ToDoList from './ToDoList.component';
import ToDoListCount from './ToDoListCount.component';
import ToDoHOC from '../../HOC/ToDo.HOC';
import ToDoHOC2 from '../../HOC/ToDo2.HOC';


class ToDO extends Component {

    static contextType = ToDoContext;
    render() {
        return (
            <ToDoContext.Consumer>
                {(contextType) => (
                    <Fragment>
                        <h3 className='text-center'>Class Component</h3>
                        <ToDoHOC classes="container rtl text-center">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="card card-white" >
                                        <div className="card-body">
                                            <ToDoCreate />
                                            <div className="todo-list">
                                                <ToDoList />
                                            </div>
                                        </div>
                                        {
                                            contextType.state.Jobs.length > 0 ? <ToDoListCount JobsCount={contextType.state.Jobs.length} /> : null
                                        }

                                    </div>
                                </div>
                            </div>
                        </ToDoHOC>
                    </Fragment >
                )}
            </ToDoContext.Consumer>



        );
    }
}

export default ToDoHOC2(ToDO, "");