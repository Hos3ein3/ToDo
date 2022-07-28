import {  useContext } from "react";
import { Button } from "react-bootstrap";
import ToDoContext from "./ToDo.context";

const ToDoCreate = () => {
    const context = useContext(ToDoContext);
    return (
        // <Context.Consumer>
        //     {(context) => (
        //         <form className='form-group col-12 ' onSubmit={(event) => event.preventDefault()}>
        //             <div className='row'>
        //                 <input type="text" id="AddNewJob" className="form-control add-task col-9" placeholder="کار جدید..."  onChange={context.SetNewJob}  value={context.Job} />
        //                 <Button type='submit' variant='primary ' onClick={context.AddJob}>
        //                     <i className='fa fa-plus-square'></i>
        //                 </Button>
        //             </div>
        //         </form>
        //     )}
        // </Context.Consumer>

        <form className='form-group col-12 ' onSubmit={(event) => event.preventDefault()}>
            <div className='row'>
                <input type="text" id="AddNewJob" className="form-control add-task col-9" placeholder="کار جدید..." onChange={context.SetNewJob} value={context.Job} />
                <Button type='submit' variant='primary ' onClick={context.AddJob}>
                    <i className='fa fa-plus-square'></i>
                </Button>
            </div>
        </form>

    )
}
export default ToDoCreate;