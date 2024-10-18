import React from 'react'
import FormHeader from './FormHeader'

function AdminForm() {
  return (
    <div className='min-h-[60vh]  py-4'>
        <FormHeader text="Create A Task"/>
        <form className=' flex justify-between items-center py-2 px-20'>
            <div className='right flex flex-col gap-5 '>
                <div className='flex flex-col'>
                    <label>Task Title:</label>
                    <input className='text-black' type="text" name="tasktitle" />
                </div>
                <div className='flex flex-col'>
                    <label>Due Date:</label>
                    <input className='text-black' type="date" name="duedate" />
                </div>
                <div className='flex flex-col'>
                    <label>Assigned To:</label>
                    <input className='text-black' type="text" name="assignedto" />
                </div>
                <div className='flex flex-col'>
                    <label>Priority:</label>
                    <select className='text-black' name="priority">
                        <option value="Low">Low</option>
                        <option value="Medium">Medium</option>
                        <option value="High">High</option>
                    </select>
                </div>
                <div className='flex flex-col'>
                    <label>Category:</label>
                    <input className='text-black' type="text" placeholder='Design,blog,etc...'/>
                </div>
                
            </div>
            <div className='left flex flex-col gap-5'>
                <div className='flex flex-col'>
                <label>Description:</label>
                <textarea className='text-black' name="description" rows="4" cols="50"></textarea>
                </div>
                <div className='bg-emerald-500 flex justify-center items-center py-2 rounded-lg'>
                    {/* <button type="submit">Submit</button> */}
                    <input type="submit" />
                </div>
            </div>
        </form>
    </div>
  )
}

export default AdminForm