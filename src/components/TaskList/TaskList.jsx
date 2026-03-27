import React from 'react'
import { useState, useContext } from 'react'
import { activeUserContext, AuthContext } from '../../context/AuthProvider'

const TaskList = () => {

    const { activeUser } = useContext(activeUserContext)
    const { employeeData } = useContext(AuthContext)

    const id = activeUser.employee.id
    const emp = employeeData.find(emp => emp.id === id);

    return (
        <div id='task-list' className='h-full w-full bg-black gap-3 py-6 px-8 flex overflow-x-auto'>

            {emp.tasks.map((task, index) => {
                return (
                    <div key={index} className={`h-70 w-70 rounded-lg shrink-0 ${task.active ? 'bg-green-400' : task.failed ? 'bg-red-400' : task.new ? 'bg-yellow-400' : 'bg-gray-700'}`}>
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
            })}

        </div>
    )
}

export default TaskList
