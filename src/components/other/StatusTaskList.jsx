import React from 'react'
import { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider'
import { activeUserContext } from '../../context/AuthProvider'

const StatusTaskList = () => {

    const { employeeData } = useContext(AuthContext)
    const { activeUser } = useContext(activeUserContext)
    // console.log(id)
    
    // active employee ki id k bases pr, us employee k tasks ko find kr rhy hain 
    const id = activeUser.employee.id
    const emp = employeeData.find(emp => emp.id === id);

    // jo bhi current active employee hai uske tasks me se active, 
    // pending, completed aur failed tasks ko filter kar rahe hain
    const activeTasks = emp.tasks.filter(task => task.active)
    const pendingTasks = emp.tasks.filter(task => task.newTask)
    const completedTasks = emp.tasks.filter(task => task.completed)
    const failedTasks = emp.tasks.filter(task => task.failed)

    return (
        <div className='px-8 py-4 bg-black gap-4 flex'>
            <div className='h-40 w-[45%] bg-orange-400 rounded-lg p-10 text-white'>
                <h1 className='text-5xl font-bold'>{activeTasks.length}</h1>
                <h1 className='text-xl mt-2 font-bold'>Active Task</h1>
            </div>
            <div className='h-40 w-[45%] bg-blue-400 rounded-lg p-10 text-white'>
                <h1 className='text-5xl font-bold'>{pendingTasks.length}</h1>
                <h1 className='text-xl mt-2 font-bold'>Pending Task</h1>
            </div>
            <div className='h-40 w-[45%] bg-emerald-400 rounded-lg p-10 text-white'>
                <h1 className='text-5xl font-bold'>{completedTasks.length}</h1>
                <h1 className='text-xl mt-2 font-bold'>Completed Task</h1>
            </div>
            <div className='h-40 w-[45%] bg-cyan-400 rounded-lg p-10 text-white'>
                <h1 className='text-5xl font-bold'>{failedTasks.length}</h1>
                <h1 className='text-xl mt-2 font-bold'>Failed Task</h1>
            </div>

        </div>
    )
}

export default StatusTaskList
