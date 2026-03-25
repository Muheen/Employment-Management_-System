import React from 'react'

const AllTasks = () => {
  return (
    <div id='All-tasks' className='h-55 mt-4 bg-gray-900 px-8 py-4 flex flex-col gap-4 overflow-auto rounded'>
                <div className='px-12 py-4 w-full bg-yellow-800 rounded text-white font-medium flex gap-8 '>
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
                </div>
            </div>
  )
}

export default AllTasks
