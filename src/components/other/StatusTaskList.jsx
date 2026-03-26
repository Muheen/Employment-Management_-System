import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'
import { activeEmpContext } from '../../context/AuthProvider'

const StatusTaskList = () => {

    const { activeEmp } = useContext(activeEmpContext)
    const { employeeData } = useContext(AuthContext)
    // console.log(activeEmp)



    return (
        <div className='px-8 py-4 bg-black gap-4 flex'>
            <div className='h-40 w-[45%] bg-orange-400 rounded-lg p-10 text-white'>
                <h1 className='text-5xl font-bold'>0</h1>
                <h1 className='text-xl mt-2 font-bold'>Active Task</h1>
            </div>
            <div className='h-40 w-[45%] bg-blue-400 rounded-lg p-10 text-white'>
                <h1 className='text-5xl font-bold'>0</h1>
                <h1 className='text-xl mt-2 font-bold'>Pending Task</h1>
            </div>
            <div className='h-40 w-[45%] bg-emerald-400 rounded-lg p-10 text-white'>
                <h1 className='text-5xl font-bold'>0</h1>
                <h1 className='text-xl mt-2 font-bold'>Completed Task</h1>
            </div>
            <div className='h-40 w-[45%] bg-cyan-400 rounded-lg p-10 text-white'>
                <h1 className='text-5xl font-bold'>0</h1>
                <h1 className='text-xl mt-2 font-bold'>Failed Task</h1>
            </div>

        </div>
    )
}

export default StatusTaskList
