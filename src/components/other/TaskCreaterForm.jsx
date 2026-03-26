import { useState } from 'react'

const TaskCreaterForm = () => {

    const [title, setTitle] = useState('')
    const [date, setDate] = useState('')
    const [assign, setAssign] = useState('')
    const [category, setCategory] = useState('')
    const [description, setDescription] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()
        console.log('form is submit')
        setTitle('')
        setDate('')
        setAssign('')
        setCategory('')
        setDescription('')
    }

    return (
        <div className='px-8 py-4'>
            <form
                onSubmit={(e) => { submitHandler(e) }}
                className='bg-gray-900 h-full text-white flex justify-between py-4 px-12 rounded '>

                <div className='w-1/3 flex flex-col gap-2'>
                    <div className='flex flex-col gap-2'>
                        <p>Task Title</p>
                        <input
                            onChange={(e) => { setTitle(e.target.value) }}
                            value={title}
                            className='w-full py-1 px-2 border-2 border-gray-600 rounded outline-none' type="text" placeholder='Enter Task Title' />
                    </div>

                    <div className='flex flex-col gap-1'>
                        <p>Date</p>
                        <input
                            value={date}
                            onChange={(e) => { setDate(e.target.value) }}
                            className='w-full py-1 px-2 border-2  border-gray-600 rounded outline-none' type="date" />
                    </div>

                    <div className='flex flex-col gap-1'>
                        <p>Assign to</p>
                        <input
                            value={assign}
                            onChange={(e) => { setAssign(e.target.value) }}
                            className='w-full py-1 px-2 border-2 border-gray-600 rounded outline-none' type="text" placeholder='Enter Assignee Name' />
                    </div>

                    <div className='flex flex-col gap-1'>
                        <p>Category</p>
                        <input
                            value={category}
                            onChange={(e) => { setCategory(e.target.value) }}
                            className='w-full py-1 px-2 border-2 border-gray-600  rounded outline-none' type="text" placeholder='Enter Task Category' />
                    </div>
                </div>

                <div className='flex flex-col gap-4 w-[40%]'>
                    <div className='h-full flex flex-col gap-2'>
                        <p>Description</p>
                        <textarea
                            value={description}
                            onChange={(e) => { setDescription(e.target.value) }}
                            className='w-full h-full p-2 border-2 border-gray-600 rounded outline-none' placeholder='Enter Task Description'></textarea>
                    </div>
                    <button
                        disabled={!title || !date || !assign || !category || !description}
                        type='submit'
                        className='bg-green-500 px-4 py-2 rounded font-medium text-white active:scale-95'>Create Task</button>
                </div>
            </form>
        </div>
    )
}

export default TaskCreaterForm
