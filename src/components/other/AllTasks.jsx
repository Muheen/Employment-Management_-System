import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTasks = () => {

    const { employeeData } = useContext(AuthContext)

    return (
        <div id='All-tasks' className='h-55 mt-4 bg-gray-900 px-8 pb-4 flex relative flex-col gap-4 overflow-auto rounded'>
            <div className='px-12 py-4 w-full rounded border-4 bg-gray-900 sticky top-0 text-white font-medium flex gap-8'>
                <h2 className='font-medium w-50 overflow-hidden line-clamp-1 '>Name</h2>
                <h2 className='font-medium w-40 overflow-hidden line-clamp-1 text-center'>Status</h2>
                <h2 className='font-medium w-full overflow-hidden line-clamp-1'>Title</h2>
            </div>
            {employeeData.map(emp =>
                emp.tasks.map((e, idx) => {
                    return (<div key={idx} className={`px-12 py-4 w-full ${e.active ? 'bg-green-400' : e.failed ? 'bg-red-400' : e.newTask ? 'bg-yellow-400' : 'bg-gray-700'} rounded text-white font-medium flex gap-8`}>
                        <h2 className='font-medium w-50 overflow-hidden line-clamp-1 '>{emp.name}</h2>
                        <h2 className='font-medium w-40 overflow-hidden line-clamp-1 text-center'>{e.active ? "Active" : e.failed ? "Failed" : e.newTask ? "Pending" : "Completed"}</h2>
                        <h2 className='font-medium w-full overflow-hidden line-clamp-1'>{e.title}</h2>
                    </div>)
                })
            )}
        </div>
    )
}

export default AllTasks
