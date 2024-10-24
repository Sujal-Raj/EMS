import React, { useState } from 'react'
import FormHeader from './FormHeader'

function AdminForm() {

    const [tasktitle, setTasktitle] = useState("");
    const [duedate, setDuedate] = useState("");
    const [assignedto, setAssignedto] = useState("");
    const [priority, setPriority] = useState("");
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");

    const [task, setTask] = useState({})


    const SubmitHandler=(e)=>{
        e.preventDefault();

        // setTask({tasktitle: tasktitle, category: category, taskdescription: description, priority: priority, assignedto: assignedto, date: duedate, newtask:true,completed:false, accepted: false,failed: false})

        setTask({tasktitle,duedate,description,priority,category,assignedto,newtask:true,completed:false, accepted: false,failed: false})

        const data = JSON.parse(localStorage.getItem("employees"))

        data.forEach(val => {
            if(assignedto == val.name){
                val.tasks.push(task)
                val.taskNumbers.newTasks = val.taskNumbers.newTasks+1;
            }
        });

        localStorage.setItem("employees", JSON.stringify(data));

        // setAssignedto("");
        // setCategory("");
        // setDescription("");
        // setTasktitle("");
        // setPriority("");
        // setDuedate("");


    
    }
  return (
    <div className='min-h-[60vh]  py-4'>
        <FormHeader text="Create A Task"/>
        <form onSubmit={SubmitHandler} className=' flex justify-between items-center py-2 px-20'>
            <div className='right flex flex-col gap-5 '>
                <div className='flex flex-col'>
                    <label>Task Title:</label>
                    <input
                    value={tasktitle}
                    onChange={(e)=>{setTasktitle(e.target.value)}}
                    className=' bg-transparent border-2 border-white text-white' type="text" name="tasktitle" placeholder='Task Title'/>
                </div>
                <div className='flex flex-col'>
                    <label>Due Date:</label>
                    <input
                    value={duedate}
                    onChange={(e)=>{setDuedate(e.target.value)}}
                    className='bg-transparent border-2 border-white text-white' type="date" name="duedate" />
                </div>
                <div className='flex flex-col'>
                    <label>Assigned To:</label>
                    <input
                    value={assignedto}
                    onChange={(e)=>setAssignedto(e.target.value)}
                    className='bg-transparent border-2 border-white text-white' type="text" name="assignedto" placeholder='Assigned To' />
                </div>
                <div className='flex flex-col'>
                    <label>Priority:</label>
                    <select
                    value={priority}
                    onChange={(e)=>setPriority(e.target.value)}
                    className='bg-transparent border-2 border-white text-white' name="priority">
                        <option value="Low">Low</option>
                        <option value="Medium">Medium</option>
                        <option value="High">High</option>
                    </select>
                </div>
                <div className='flex flex-col'>
                    <label>Category:</label>
                    <input
                    value={category}
                    onChange={(e)=>setCategory(e.target.value)}
                    className='bg-transparent border-2 border-white text-white' type="text" placeholder='Design,blog,etc...'/>
                </div>
                
            </div>
            <div className='left flex flex-col gap-5'>
                <div className='flex flex-col'>
                <label>Description:</label>
                <textarea
                value={description}
                onChange={(e)=>setDescription(e.target.value)}
                className='bg-transparent border-2 border-white text-white' name="description" rows="4" cols="50"></textarea>
                </div>
                <div className='bg-emerald-500 flex justify-center items-center py-2 rounded-lg hover:cursor-pointer'>
                    {/* <button type="submit">Submit</button> */}
                    <input className=' hover:cursor-pointer' type="submit" />
                </div>
            </div>
        </form>
    </div>
  )
}

export default AdminForm