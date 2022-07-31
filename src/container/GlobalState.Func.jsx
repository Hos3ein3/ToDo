import React, { useState } from "react";
import ToDoContext from "../component/todoFunc/ToDo.context";
import { toast } from "react-toastify";

const GlobalStateFunc = (props) => {
    const [GetJobs, SetJobs] = useState([]);
    const [GetJob, SetJob] = useState("");
    const [GetStatus, SetStatus] = useState(0);

    const AddJob = () => {
        let newJobTextInState = GetJob;
        if (newJobTextInState) {
            const myJobs = GetJobs;
            const newJob = {
                id: Math.floor(Math.random() * 1000),
                title: GetJob,
                isChecked: false,
            };
            myJobs.push(newJob);
            SetJobs(myJobs);
            SetJob("");

            toast.success(".با موفیقت اضافه شد", {
                position: "top-right",
                closeButton: true,
                closeOnClick: true,
                autoClose: 4000,
            });
            //document.getElementById("AddNewJob").focus();
            return;
        }
        toast.error("فیلد را پر کنید", {
            position: "top-right",
            closeButton: true,
            closeOnClick: true,
            autoClose: 4000,
        });
    };

    const SetNewJob = (event) => {
        
        SetJob(event.target.value);
        //this.setState({ Job: event.target.value });
    };

    const DeleteJob = (id) => {
        const copyJobs = [...GetJobs];
        const filter = copyJobs.filter((x) => x.id !== id);
        SetJobs(filter);
        toast.warning(".با موفیقت حذف شد", {
            position: "top-right",
            closeButton: true,
            closeOnClick: true,
            autoClose: 4000,
        });
        //this.setState({ Jobs: filter });
    };

    const CompleteJob = (id) => {
        const copyList = [...GetJobs];
        const findIndex = copyList.findIndex((x) => x.id === id);
        if (copyList[findIndex] != null) {
            const copyJob = copyList[findIndex];
            copyJob.isChecked = !copyJob.isChecked;
            const newCopyList = [...copyList];
            newCopyList[findIndex] = copyJob;
            SetJobs(newCopyList);
            //this.setState({ Jobs: newCopyList });
        }
    };

    const ShowJobs = (status) => {
        const copyJobs = [...GetJobs];
        const showJobs =
            status === 0
                ? copyJobs
                : status === 1
                    ? copyJobs.filter((x) => x.isChecked === false)
                    : copyJobs.filter((x) => x.isChecked === true);

        SetJobs(showJobs);
        SetStatus(0);
        //this.setState({ Jobs: showJobs, Status: 0 });
    };
    return (
        <ToDoContext.Provider
            value={{
                Jobs: GetJobs,
                Job: GetJob,
                DeleteJob: DeleteJob,
                CompleteJob: CompleteJob,
                SetNewJob: SetNewJob,
                AddJob: AddJob,
            }}
        >

            {props.children}
        </ToDoContext.Provider>);
}
export default GlobalStateFunc;