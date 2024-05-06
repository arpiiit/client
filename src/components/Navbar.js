import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='border-b-4 text-center fixed top-0 bg-black font-bold w-full text-white'>
        <ul>
            <li className='inline-block py-4'>
                <Link to="/" className='pl-6 pr-8'>Home</Link>
            </li>
            <li className='inline-block py-4'>
                <Link to="/about" className='pl-6 pr-8'>About</Link>
            </li>
            <li className='inline-block py-4'>
                <Link to="/artical-list" className='pl-6 pr-8'>Articals</Link>
            </li>
        </ul>
      
    </nav>
  )
}

export default Navbar
