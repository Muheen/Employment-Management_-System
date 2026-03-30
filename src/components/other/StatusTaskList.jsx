import { useContext } from 'react'
import { activeUserContext } from '../../context/AuthProvider'

const StatusTaskList = () => {

    const { activeUser } = useContext(activeUserContext)

    const tasks = activeUser.employee.tasks

    // counts calculate (no useState needed)
    const newTasks = tasks.filter(task => task.newTask).length
    const acceptedTasks = tasks.filter(task => task.active).length
    const completedTasks = tasks.filter(task => task.completed).length
    const failedTasks = tasks.filter(task => task.failed).length

    return (
        <div className='px-8 py-4 bg-black gap-4 flex'>

            <div className='h-40 w-[45%] bg-blue-400 rounded-lg p-10 text-white'>
                <h1 className='text-5xl font-bold'>{acceptedTasks}</h1>
                <h1 className='text-xl mt-2 font-bold'>Accepted Task</h1>
            </div>

            <div className='h-40 w-[45%] bg-green-400 rounded-lg p-10 text-white'>
                <h1 className='text-5xl font-bold'>{completedTasks}</h1>
                <h1 className='text-xl mt-2 font-bold'>Completed Task</h1>
            </div>

            <div className='h-40 w-[45%] bg-red-400 rounded-lg p-10 text-white'>
                <h1 className='text-5xl font-bold'>{failedTasks}</h1>
                <h1 className='text-xl mt-2 font-bold'>Failed Task</h1>
            </div>

            <div className='h-40 w-[45%] bg-orange-400 rounded-lg p-10 text-white'>
                <h1 className='text-5xl font-bold'>{newTasks}</h1>
                <h1 className='text-xl mt-2 font-bold'>New Task</h1>
            </div>

        </div>
    )
}

export default StatusTaskList