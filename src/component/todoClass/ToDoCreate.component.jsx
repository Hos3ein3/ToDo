import { Component, createRef } from "react";
import { Button } from "react-bootstrap";
import ToDoContext from "./ToDo.context";

class ToDoCreate extends Component {
    constructor(params) {
        super();
        this.AddJobAuto = createRef();
    }
    componentDidMount() {
        //this.AddJobAuto.current.onfocusout();
    }



    static contextType = ToDoContext;
    render() {
        //let contextValue = this.context;
        return (
            <ToDoContext.Consumer>
                {(contextType) => (
                    <form className='form-group col-12 ' onSubmit={(event) => event.preventDefault()}>
                        <div className='row'>
                            <input ref={this.AddJobAuto} type="text" id="AddNewJob" className="form-control add-task col-9" placeholder="کار جدید..." onChange={contextType.SetNewJob} value={contextType.state.Job} />
                            <Button type='submit' variant='primary ' onClick={contextType.AddJob}>
                                <i className='fa fa-plus-square'></i>
                            </Button>
                        </div>
                    </form>
                )}
            </ToDoContext.Consumer>

        );
    }
}
export default ToDoCreate;