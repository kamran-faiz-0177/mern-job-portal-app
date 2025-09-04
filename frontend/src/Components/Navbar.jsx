import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='bg-black w-full h-[10vh]'>
            <div className='w-[80%] mx-auto flex items-center justify-around py-5 border-b-white border-b-2 text-white'>
                <div>
                    <h1 className='text-3xl font-bold'>JOBLANE</h1>
                </div>
                <div className='flex gap-3'>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/job">Jobs</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/about">About</Link></li>
                </div>
                <div className='flex gap-2'>
                    <button className='bg-purple-600 py-1 px-3 rounded-md'>Login</button>
                    <button className='bg-purple-600 py-1 px-3 rounded-md'>Register</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar