import { useContext, useRef, useEffect } from "react";
import { Button } from "react-bootstrap";
import ToDoContext from "./ToDo.context";
import PropTypes from 'prop-types';

const ToDoCreate = () => {
    const focus = useRef(null);
    const context = useContext(ToDoContext);
    useEffect(() => {
        focus.current.focus();
    });
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
                <input ref={focus} type="text" id="" className="form-control add-task col-9" placeholder="کار جدید..."  onChange={context.SetNewJob} value={context.Job} />
                <Button type='submit' variant='primary ' onClick={context.AddJob}>
                    <i className='fa fa-plus-square'></i>
                </Button>
            </div>
        </form>

    )
}
ToDoCreate.propTypes = {
    //title:PropTypes.string,

}
export default ToDoCreate;