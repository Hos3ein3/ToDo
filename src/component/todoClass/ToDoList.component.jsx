import React, { Component } from 'react';
import ToDoContext from './ToDo.context';
import ToDoListItem from './ToDoListItem.component';
import PropTypes from 'prop-types';

class ToDoList extends Component {
    static contextType = ToDoContext;
    render() {
        return (
            <ToDoContext.Consumer>
                {(contextType) => (

                    <div>
                        {contextType.state.Jobs.map(x => (
                            <ToDoListItem
                                key={x.id}
                                id={x.id}
                                title={x.title}
                                isChecked={x.isChecked}
                                completeJobFunc={() => contextType.CompleteJob(x.id)}
                                deleteJobFuc={() => contextType.DeleteJob(x.id)}
                            />

                        ))}
                    </div>
                )}
            </ToDoContext.Consumer>
        );
    }
}

ToDoList.propTypes={

};
export default ToDoList;