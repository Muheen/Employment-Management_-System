import { useContext } from 'react'
import { activeUserContext } from '../../context/AuthProvider'

const NewTasks = () => {

    const { activeUser, updateTaskStatus } = useContext(activeUserContext)

    return (
        <>
            {activeUser.employee.tasks.map((task, index) => {
                if (task.active) {
                    return (
                        <div key={index} className={`h-70 w-70 rounded-lg shrink-0 bg-orange-400 relative`}>
                            <div className='p-4 text-white flex flex-col gap-4 h-full overflow-hidden'>
                                <div className='flex justify-between items-center'>
                                    <p className={`px-4 py-1 text-sm font-bold rounded bg-red-800`}>{task.category}</p>
                                    <p className='font-medium text-gray-200'>{task.date}</p>
                                </div>
                                <div>
                                    <h2 className='text-2xl font-bold line-clamp-2'>{task.title}</h2>
                                    <p className='mt-2 text-gray-200'>{task.description}</p>
                                </div>
                                {/* button bnana hai jo click hony pr accept ho jayega */}
                                < div className='flex justify-center items-center absolute gap-5 bottom-4' >
                                    <button
                                        onClick={() => { updateTaskStatus(index, { active: false, failed: true , completed: false, newTask: false}) }}
                                        className='px-4 py-2 bg bg-red-400 rounded'>
                                        Failed</button>
                                    <button
                                        onClick={() => { updateTaskStatus(index, { active: false, completed: true, failed: false, newTask: false }) }}
                                        className='px-4 py-2 bg bg-green-400 rounded'>
                                        Completed</button>
                                </ div >
                            </div>
                        </div>
                    )
                }
            })}
        </>
    )
}

export default NewTasks
