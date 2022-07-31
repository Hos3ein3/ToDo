import React, { Component } from "react";
import { toast } from 'react-toastify';
import ToDoContext from "../component/todoClass/ToDo.context";

class GlobalStateClass extends Component {


    constructor(params) {
        super();

    }

    static getDerviedStateFromProps(props, state) {
        return state;
    }

    componentDidMount() {
        //after all render and childs rendered
        //ready to show details

    }
    shouldComponentUpdate(nextProps, nextState) {
        //validation
        return true;
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        // before update, save something 
        const snapshot = { prevProps, prevState };
        return snapshot;
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        //best place to connecting to server
    }
    componentDidCatch() {

    }
    componentWillUnmount() {
        //hazf shodan
    }

    state = {
        Jobs: [
            // {id:1,title:'Create theme',isChecked:true},
            // {id:2,title:'Work on wordpress',isChecked:false},
            // {id:3,title:'Organize office main department',isChecked:false},
            // {id:4,title:'Error solve in HTML template',isChecked:false},
        ],
        Job: '',
        Status: 0
    };

    //static contextType = ToDoContext;

    AddJob = () => {
        let newJobTextInState = this.state.Job;
        if (newJobTextInState) {
            const myJobs = this.state.Jobs;
            const newJob = {
                id: Math.floor(Math.random() * 1000),
                title: this.state.Job,
                isChecked: false
            };
            myJobs.push(newJob);
            this.setState({ Jobs: myJobs, Job: '' });
            toast.success('.با موفیقت اضافه شد', {
                position: 'top-right',
                closeButton: true,
                closeOnClick: true,
                autoClose: 4000
            });
            document.getElementById('AddNewJob').focus();
            return;
        }
        toast.error('فیلد را پر کنید', {
            position: 'top-right',
            closeButton: true,
            closeOnClick: true,
            autoClose: 4000
        });
    };

    SetNewJob = (event) => {
        this.setState({ Job: event.target.value });
    }

    DeleteJob = (id) => {
        const copyJobs = [...this.state.Jobs];
        const filter = copyJobs.filter(x => x.id !== id);
        this.setState({ Jobs: filter });
        toast.warning(".با موفیقت حذف شد", {
            position: "top-right",
            closeButton: true,
            closeOnClick: true,
            autoClose: 4000,
        });
    };


    CompleteJob = (id) => {
        const copyList = [...this.state.Jobs];
        const findIndex = copyList.findIndex(x => x.id === id);
        if (copyList[findIndex] != null) {
            const copyJob = copyList[findIndex];
            copyJob.isChecked = !copyJob.isChecked;
            const newCopyList = [...copyList];
            newCopyList[findIndex] = copyJob;
            this.setState({ Jobs: newCopyList });
        }

    };

    ShowJobs = (status) => {
        const copyJobs = [...this.state.Jobs];
        const showJobs = status === 0 ? copyJobs :
            status === 1 ? copyJobs.filter(x => x.isChecked === false) :
                copyJobs.filter(x => x.isChecked === true);
        this.setState({ Jobs: showJobs, Status: 0 });
    };

    render() {
        return (
            <ToDoContext.Provider value={{
                state: this.state,
                DeleteJob: this.DeleteJob,
                CompleteJob: this.CompleteJob,
                SetNewJob: this.SetNewJob,
                AddJob: this.AddJob
            }}>
                {this.props.children}

            </ToDoContext.Provider>
        );
    }

}
export default GlobalStateClass;