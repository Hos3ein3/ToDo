import {  useContext } from 'react';
import ToDoContext from './ToDo.context';


const ToDoListCount = () => {
    const context = useContext(ToDoContext);
    return (
        // <Context.Consumer>
        //     {(context) => (
        //         <p>
        //             تعداد کارها
        //             &nbsp;
        //             <span className='badge badge-pill badge-success'>{context.Jobs.length}</span>
        //             &nbsp;
        //             است</p>

        //     )}

        // </Context.Consumer>

        <p>
            تعداد کارها
            &nbsp;
            <span className='badge badge-pill badge-success'>{context.Jobs.length}</span>
            &nbsp;
            است</p>


    );
}
export default ToDoListCount;