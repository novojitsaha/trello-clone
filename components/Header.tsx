
import React from 'react'
import Image from 'next/image'
import {MagnifyingGlassIcon, UserCircleIcon} from "@heroicons/react/24/solid"
function Header() {
  return (
    <header>
        <div className='flex flex-col md:flex-row items-center p-5 bg-gray-500/10 rounded-b-2xl'>
            
            <div className='
            absolute 
            top-0
            left-0
            w-full
            h-96
            bg-gradient-to-br
            from-indigo-500
            via-purple-500
            to-pink-500
            
            filter
            blur-3xl
            opacity-50
            -z-50
            '

            />
            
            <Image
            src="https://links.papareact.com/c2cdd5"
            alt="Trello Logo"
            width={300}
            height={100}
            className='w-44 md:w-56 pb-10 md:pb-0 object-contain'/>

            <div className='flex items-center space-x-5 flex-1 justify-end w-full'>
                {/*search*/}

                <form className='flex items-center space-x-5 bg-white rounded-md p-2 shadow-md flex-1 md:flex-initial'>
                    <MagnifyingGlassIcon className="h-6 w-6 text-gray-400"/>
                    <input type='text' placeholder="Search" className='flex-1 outline-none p-2'/>
                    <button hidden type='submit' >Search</button>
                </form>


            </div>

        </div>

        <div className='flex items-center justify-center px-5 py-3 md:py-5'>
            <p className='flex items-center text-sm font-light pr-5 rounded-xl w-fit bg-white italix max-w-3xl shadow-xl'>
            <UserCircleIcon className='inline-block h-10 w-10 mr-1'/>
            GPT is summarising your day!
            </p>
            
        </div>


    </header>
  )
}

export default Header