import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'
import { activeEmpContext } from '../../context/AuthProvider'

const AllTasks = () => {

    const { activeEmp } = useContext(activeEmpContext)
    const { employeeData } = useContext(AuthContext)
    // console.log(employeeData)

    employeeData.forEach(emp => {
        emp.tasks.map(task => {
            console.log('hello')
        })
    })

    return (
        <div id='All-tasks' className='h-55 mt-4 bg-gray-900 px-8 py-4 flex flex-col gap-4 overflow-auto rounded'>

            {/* {employeeData.map(emp =>
                emp.tasks.map((e, idx) => {
                    return (
                        <div
                            key={idx}
                            className='px-12 py-4 w-full bg-yellow-800 rounded text-white font-medium flex gap-8'
                        >
                            <h2 className='font-medium w-50 overflow-hidden line-clamp-1'>
                                {emp.email}
                            </h2>

                            <h2 className='font-medium w-40 overflow-hidden line-clamp-1 text-center'>
                                {e.active ? "Active" :
                                    e.completed ? "Completed" :
                                        e.failed ? "Failed" : "New"}
                            </h2>

                            <h2 className='font-medium w-full overflow-hidden line-clamp-1'>
                                {e.title}
                            </h2>
                        </div>
                    );
                })
            )} */}

            {employeeData.map(emp =>
                emp.tasks.map((e,idx) => {
                    return (<div key={idx} className='px-12 py-4 w-full bg-yellow-800 rounded text-white font-medium flex gap-8 '>
                        <h2 className='font-medium w-50 overflow-hidden line-clamp-1 '>{e.name}</h2>
                        <h2 className='font-medium w-40 overflow-hidden line-clamp-1 text-center'>Status</h2>
                        <h2 className='font-medium w-full overflow-hidden line-clamp-1'>{e.title}</h2>
                    </div>)
                })
            )}

            {/* <div className='px-12 py-4 w-full bg-yellow-800 rounded text-white font-medium flex gap-8 '>
            <h2 className='font-medium w-50 overflow-hidden line-clamp-1 '>Name</h2>
            <h2 className='font-medium w-40 overflow-hidden line-clamp-1 text-center'>Status</h2>
            <h2 className='font-medium w-full overflow-hidden line-clamp-1'>Task</h2>
        </div>
        <div className='px-12 py-4 w-full bg-orange-800 rounded text-white font-medium flex gap-8 '>
            <h2 className='font-medium w-50 overflow-hidden line-clamp-1 '>Name</h2>
            <h2 className='font-medium w-40 overflow-hidden line-clamp-1 text-center'>Status</h2>
            <h2 className='font-medium w-full overflow-hidden line-clamp-1'>Task</h2>
        </div>
        <div className='px-12 py-4 w-full bg-green-800 rounded text-white font-medium flex gap-8 '>
            <h2 className='font-medium w-50 overflow-hidden line-clamp-1 '>Name</h2>
            <h2 className='font-medium w-40 overflow-hidden line-clamp-1 text-center'>Status</h2>
            <h2 className='font-medium w-full overflow-hidden line-clamp-1'>Task</h2>
        </div>
        <div className='px-12 py-4 w-full bg-blue-800 rounded text-white font-medium flex gap-8 '>
            <h2 className='font-medium w-50 overflow-hidden line-clamp-1 '>Name</h2>
            <h2 className='font-medium w-40 overflow-hidden line-clamp-1 text-center'>Status</h2>
            <h2 className='font-medium w-full overflow-hidden line-clamp-1'>Task</h2>
        </div> */}
        </div>
    )
}

export default AllTasks
