import { useContext } from 'react'
import { activeUserContext } from '../../context/AuthProvider'

const AcceptTask = () => {

    const { activeUser, updateTaskStatus } = useContext(activeUserContext)

    return (
        <>
            {activeUser.employee.tasks.map((task, index) => {
                if (task.newTask) {
                    return (
                        <div key={index} className={`h-70 w-70 rounded-lg shrink-0 bg-cyan-400 relative`}>
                            <div className='p-4 text-white flex flex-col gap-4 h-full overflow-hidden'>
                                <div className='flex justify-between items-center'>
                                    <p className={`px-4 py-1 text-sm font-bold rounded bg-red-800`}>{task.category}</p>
                                    <p className='font-medium text-gray-200'>{task.date}</p>
                                </div>
                                <div>
                                    <h2 className='text-2xl font-bold line-clamp-2'>{task.title}</h2>
                                    <p className='mt-2 text-gray-200'>{task.description}</p>
                                </div>
                                {/* button bnana hai jo click hony pr marked as completed or failed ho jayega */}
                                <div className='flex justify-center items-center p-6 '>
                                    <button
                                        onClick={() => {
                                            updateTaskStatus(index, { active: true, newTask: false, completed: false, failed: false })
                                        }}
                                        className='h-10 px-6 font-medium rounded bg-cyan-500 text-white active:scale-95 absolute bottom-4' >
                                        Accept</button >
                                </div>
                            </div>
                        </div>
                    )
                }
            })}
        </>
    )
}

export default AcceptTask