import { Component, memo, PureComponent } from 'react';
import ToDoContext from './ToDo.context';

// class ToDoListCount extends Component {

//info :pure Component has shouldComponentUpdate by default
class ToDoListCount extends PureComponent {
    //static contextType = ToDoContext;

    // this hooks didn't work with context API so 
    // we should use Props instead of API
    // shouldComponentUpdate(nextProps, nextState) {

    //     if (this.props.JobsCount !== nextProps.JobsCount) {
    //         console.log("ToDoListCount.Component.Class Updated");
    //         return true;
    //     }
    //     console.log("ToDoListCount.Component.Class NOT Updated");
    //     return false;
    // }


    render() {
        console.log("ToDoListCount.Component.Class Rendered");
        return (
            // <ToDoContext.Consumer>
            //     {(contextType) => (
            <p>
                تعداد کارها
                &nbsp;
                <span className='badge badge-pill badge-success'>{this.props.JobsCount}</span>
                &nbsp;
                است</p>

            //     )}
            // </ToDoContext.Consumer>
        );
    }
}

//info: memo(ClassName) has should componentUpdate by default
// export default memo(ToDoListCount);
export default ToDoListCount;
