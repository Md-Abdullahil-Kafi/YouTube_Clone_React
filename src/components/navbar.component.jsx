import React from 'react'
import { FaSearch, FaUserAstronaut } from 'react-icons/fa'
import { FaYoutube } from 'react-icons/fa6'
import { GiHamburgerMenu } from 'react-icons/gi'
import { GoBell } from 'react-icons/go'
import { LuPlus } from 'react-icons/lu'
import { MdKeyboardVoice } from 'react-icons/md'

function Navbar() {
  return (
    <div className='flex justify-between gap-3 lg:gap-16 mt-2 mb-4'>
        <div className="menu_logo flex items-center gap-6">
            <div className="menu text-white text-2xl lg:block hidden"> <GiHamburgerMenu/> </div>
            <div className='flex items-center gap-2'> <FaYoutube className='text-red-600 text-4xl'/> <span className='text-2xl font-bold text-white'>YouTube <sup className='font-light text-sm'>BD</sup></span> </div>
        </div>

        <div className="search flex flex-1 justify-end ">
                    <input
                    className=" border-zinc-500 w-full border-1 placeholder:text-zink-500 rounded-l-2xl placeholder:text-[18px] text-lg text-white px-4 py-1.5 focus:outline-none lg:block hidden"
                    type="search"
                    name="search"
                    id="search"
                    placeholder="Search"/> 
                    <span className='lg:py-3 lg:px-6 p-3 border-zinc-500 border-1  lg:rounded-l-2xl rounded-full bg-neutral-700 '><FaSearch className='text-zinc-200'/></span>
                    <span className='text-2xl border-zinc-500 ml-6 border-1 p-2 bg-neutral-700 rounded-full lg:block hidden'><MdKeyboardVoice /> </span>
        </div>

        <div className='flex text-2xl items-center gap-8'>
          <span className='lg:flex hidden items-center gap-2 border-zinc-500 p-1.5 border-1 font-light rounded-4xl text-[16px] px-4' > <LuPlus /> Create </span>
          <span className='lg:flex relative hidden '> <GoBell /> <span className='absolute top-[-10px] left-2 text-sm px-1 bg-red-600 rounded-full'>9+</span> </span>
          <span className='border-zinc-500 border-1 p-2 rounded-full bg-zinc-700'> <FaUserAstronaut /> </span>
        </div>


    </div>
  )
}

export default Navbar
