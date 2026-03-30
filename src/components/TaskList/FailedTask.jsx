import { useContext } from 'react'
import { activeUserContext } from '../../context/AuthProvider'

const FailedTask = () => {

    const { activeUser } = useContext(activeUserContext)

    return (
        <>
            {activeUser.employee.tasks.map((task, index) => {
                if (task.failed) {
                    return (
                        <div key={index} className={`h-70 w-70 rounded-lg shrink-0 bg-red-400`}>
                            <div className='p-4 text-white flex flex-col gap-4 h-full overflow-hidden'>
                                <div className='flex justify-between items-center'>
                                    <p className={`px-4 py-1 text-sm font-bold rounded bg-red-800`}>{task.category}</p>
                                    <p className='font-medium text-gray-200'>{task.date}</p>
                                </div>
                                <div>
                                    <h2 className='text-2xl font-bold line-clamp-2'>{task.title}</h2>
                                    <p className='mt-2 text-gray-200'>{task.description}</p>
                                </div>
                            </div>
                        </div>
                    )
                }
            })}
        </>
    )
}

export default FailedTask
