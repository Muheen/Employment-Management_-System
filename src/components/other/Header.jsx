import { useContext } from 'react'
import { activeUserContext } from '../../context/AuthProvider'

const Header = () => {
    console.log()

    const { activeUser , setActiveUser } = useContext(activeUserContext)
    // console.log(activeUser.employee.tasks[0].name)

    // console.log(activeUser)

    return (
        <div>
            <div className='flex justify-between items-center px-8 py-6 bg-black text-white'>
                <h3 className='flex flex-col font-bold'>Hello <span className='text-3xl'>{activeUser.role === 'employee' ? activeUser.employee.name : 'Admin'}👋</span></h3>
                <button
                    onClick={() => {
                        localStorage.removeItem('activeUser')
                        setActiveUser(null)
                    }}
                    className='h-10 px-6 font-medium rounded bg-red-500 text-white active:scale-95'>Logout</button>
            </div>
        </div>
    )
}

export default Header