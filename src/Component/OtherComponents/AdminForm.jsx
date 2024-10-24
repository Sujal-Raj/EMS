import React, { useState } from 'react'
import FormHeader from './FormHeader'

function AdminForm() {

    const [tasktitle, setTasktitle] = useState("");
    const [duedate, setDuedate] = useState("");
    const [assignedto, setAssignedto] = useState("");
    const [priority, setPriority] = useState("");
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");


    const SubmitHandler=(e)=>{
        e.preventDefault();
        // console.log("submit")

        setAssignedto("");
        setCategory("");
        setDescription("");
        setTasktitle("");
        setPriority("");
        setDuedate("");
    
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
                    className='text-black' type="text" name="tasktitle" />
                </div>
                <div className='flex flex-col'>
                    <label>Due Date:</label>
                    <input
                    value={duedate}
                    onChange={(e)=>{setDuedate(e.target.value)}}
                    className='text-black' type="date" name="duedate" />
                </div>
                <div className='flex flex-col'>
                    <label>Assigned To:</label>
                    <input
                    value={assignedto}
                    onChange={(e)=>setAssignedto(e.target.value)}
                    className='text-black' type="text" name="assignedto" />
                </div>
                <div className='flex flex-col'>
                    <label>Priority:</label>
                    <select
                    value={priority}
                    onChange={(e)=>setPriority(e.target.value)}
                    className='text-black' name="priority">
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
                    className='text-black' type="text" placeholder='Design,blog,etc...'/>
                </div>
                
            </div>
            <div className='left flex flex-col gap-5'>
                <div className='flex flex-col'>
                <label>Description:</label>
                <textarea
                value={description}
                onChange={(e)=>setDescription(e.target.value)}
                className='text-black' name="description" rows="4" cols="50"></textarea>
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