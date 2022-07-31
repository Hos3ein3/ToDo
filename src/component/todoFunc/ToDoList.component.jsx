import React, { useContext, useEffect } from 'react';
import ToDoContext from './ToDo.context';
import ToDoListItem from './ToDoListItem.component';

const ToDoList = () => {
    const context = useContext(ToDoContext);
    const { Jobs } = context;
    //Works All time
    // useEffect(() => {
    //     console.log("ToDoListComponent useEffect()");
    //     setTimeout(() => {
    //         alert("Data saved");
    //     }, 1000);
    // });

    //Use effect looks at array and if it changed, execute useEffect call back func
    //if we use empty array as second parameter, it's run just once as Mount 
    // useEffect(() => {
    //     console.log("ToDoListComponent useEffect(),[changed]");
    //     setTimeout(() => {
    //         alert("Data saved");
    //     }, 1000);
    // },[Jobs]);

    //we use as return annonymous function to use as Unmount 
    // useEffect(() => {
    //     console.log("ToDoListComponent useEffect(),[Unmount]");
    //     const timer = setTimeout(() => {
    //         console.log("Data saved");
    //     }, 1000);
    //     return () => {
    //         clearTimeout(timer);
    //     };
    // }, [Jobs]);


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
