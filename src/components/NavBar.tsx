import React from 'react'
import Image from 'next/image'

function NavBar() {
  return (
    <nav className='flex items-center justify-between h-full'>
      <div className='bg-white/1 backdrop-blur-md h-[50%] rounded-r-xl'>
        <ul className='flex flex-col h-full justify-around px-1 items-center'>
          <li className='flex items-center pl-2'>
            <Image src='/image.png' alt='Icon' width={50} height={50} className='rounded-full'/>
            <a href='/' className='pl-2 pr-2'>Tobias Pasinato</a>
          </li>
          <li className='hover:underline underline-offset-8 decoration-2 decoration-slate-400'>
            <a href='projects' className='block py-2 px-1'>Projects</a>
          </li>
          <li className='hover:underline underline-offset-8 decoration-2 decoration-slate-400'>
            <a href='aboutme' className='block py-2 px-1'>About Me</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar