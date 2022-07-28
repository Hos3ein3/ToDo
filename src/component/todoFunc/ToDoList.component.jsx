import React, { useContext} from 'react';
import ToDoContext from './ToDo.context';
import ToDoListItem from './ToDoListItem.component';

const ToDoList = () => {

    const context=useContext(ToDoContext);

    return (
        // <Context.Consumer>
        //     {(context) => (

                <div>
                    {context.Jobs.map(x => (
                        <ToDoListItem
                            key={x.id}
                            id={x.id}
                            title={x.title}
                            isChecked={x.isChecked}
                            completeJobFunc={() => context.CompleteJob(x.id)}
                            deleteJobFuc={() => context.DeleteJob(x.id)}
                        />

                    ))}
                </div>
        //     )}
        // </Context.Consumer>

    );

}
export default ToDoList;
