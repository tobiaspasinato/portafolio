import React from 'react'
import Image from 'next/image'
import { InfoIcon, LibraryBig } from 'lucide-react'

function NavBar() {
  return (
    <nav className='flex items-center justify-between h-full'>
      <div className='bg-black/40 backdrop-blur-xl h-[50%] rounded-r-xl'>
        <ul className='flex flex-col h-full justify-around px-1 items-center'>
          <li className='flex items-center pl-2'>
            <Image src='/image.png' alt='Icon' width={50} height={50} className='rounded-full'/>
            <div className='flex flex-col items-center justify-center text-lg'>
              <a href='/' className='pl-2 pr-2'>Tobias Pasinato</a>
              <span className='text-sm'>Full Stack Developer</span>
            </div>
          </li>
          <li className='flex items-center hover:underline underline-offset-8 decoration-2 decoration-slate-400'>
            <LibraryBig className='inline-block mr-1'/>
            <a href='projects' className='block py-2 px-1 text-xl'>Projects</a>
          </li>
          <li className='flex items-center hover:underline underline-offset-8 decoration-2 decoration-slate-400'>
            <InfoIcon className='inline-block mr-1'/>
            <a href='aboutme' className='block py-2 px-1 text-xl'>About Me</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar