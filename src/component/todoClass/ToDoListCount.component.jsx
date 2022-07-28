import { Component } from 'react';
import ToDoContext from './ToDo.context';

export default class ToDoListCount extends Component {
    static contextType = ToDoContext;
    render() {
        return (
            <ToDoContext.Consumer>
                {(contextType) => (
                    <p>
                        تعداد کارها
                        &nbsp;
                        <span className='badge badge-pill badge-success'>{contextType.state.Jobs.length}</span>
                        &nbsp;
                        است</p>

                )}

            </ToDoContext.Consumer>
        );
    }
}
