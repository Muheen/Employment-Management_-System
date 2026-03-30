import React from 'react'
import { useContext } from 'react'
import { activeUserContext, AuthContext } from '../../context/AuthProvider'
import AcceptTask from './AcceptTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'
import NewTasks from './NewTask'

const TaskList = () => {

    // const { activeUser } = useContext(activeUserContext)
    // // const task = activeUser.employee.tasks.map()

    return (
        <div id='task-list' className='h-full w-full bg-black gap-3 py-6 px-8 flex overflow-x-auto'>
            <NewTasks />
            <AcceptTask />
            <CompleteTask />
            <FailedTask />

        </div>
    )
}

export default TaskList
//${task.active ? 'bg-green-400' : task.failed ? 'bg-red-400' : task.newTask ? 'bg-yellow-400' : 'bg-gray-700'}