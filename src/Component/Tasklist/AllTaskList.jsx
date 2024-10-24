import React from "react";
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import CompletedTask from "./CompletedTask";
import FailedTask from "./FailedTask";

function AllTaskList({ data }) {
  // console.log(data.tasks)
  return (
     <>
      {/* <AcceptTask/> */}
      {/* <NewTask/> */}
      {/* <CompletedTask/> */}
      {/* <FailedTask/>  */}
      {/* {data.task.map((elem)=>{
            console.log(elem)
            if(elem.accepted){
                return <div><AcceptTask/></div>
            }
            if(elem.newtask){
                return <NewTask/>
            }
            if(elem.completed){
                return <CompletedTask/>
            }
            if(elem.failed){
                return <FailedTask/>
            }

        })} */}
    <div>
      {data.tasks.map((elem, index) => {
        return (
          <div
            key={`task-${index}`}
            id="alltask"
            className="mt-20 w-full flex flex-nowrap overflow-x-auto gap-5 py-5 px-4"
          >
            {elem.accepted && <AcceptTask data = {elem}/>}
            {elem.newtask && <NewTask data = {elem}/>}
            {elem.completed && <CompletedTask data = {elem}/>}
            {elem.failed && <FailedTask data = {elem}/>}
          </div>
        );
      })}
      </div>
    </>
  );
}

export default AllTaskList;
