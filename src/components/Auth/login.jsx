import React from 'react'
import { useState } from 'react'

const login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()
        console.log('btn')
        console.log(email, password)
        setEmail('')
        setPassword('')
    }

    return (
        <div className='bg-black text-white flex h-screen w-screen justify-center items-center'>
            <div className='border-2 border-green-500 rounded-2xl p-20'>
                <form
                    onSubmit={(e) => submitHandler(e)}
                    className='flex flex-col justify-center items-center gap-6'>
                    <input
                        value={email}
                        onChange={(e) => { setEmail(e.target.value) }}
                        required
                        className='w-80 border-2 outline-none border-green-300 rounded-full p-4 text-center'
                        type="email" placeholder='Your Email' />
                    <input
                        value={password}
                        onChange={(e) => { setPassword(e.target.value) }}
                        required
                        className='w-80 border-2 outline-none border-green-300 rounded-full p-4 text-center'
                        type="password" placeholder='Your Password' />

                    <button
                        // disabled={!email || !password}
                        className='text-lg bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 w-80 rounded-full'>
                        Login
                    </button>
                </form>

            </div>
        </div>
    )
}

export default login
