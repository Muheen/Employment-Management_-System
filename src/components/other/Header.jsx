import React from 'react'

const Header = () => {
    return (
        <div>
            <div className='flex justify-between items-center px-8 py-6 bg-black text-white'>
                <h3 className='flex flex-col font-bold'>Hello <span className='text-3xl'>Muheen👋</span></h3>
                <button className='h-10 px-6 font-medium rounded bg-red-500 text-white active:scale-95'>Logout</button>
            </div>
        </div>
    )
}

export default Header