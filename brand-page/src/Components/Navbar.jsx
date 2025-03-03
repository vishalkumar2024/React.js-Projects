import React from 'react'

export default function Navbar() {
  return (
    <>
      <div className=" h-18 flex items-center justify-around">
        <div>
          <img src="https://images.seeklogo.com/logo-png/9/1/nike-logo-png_seeklogo-99478.png" className="h-20 w-25 " alt="Logo mage" />
        </div>
        <div className=''>
          <ul className='flex h-20 gap-4 items-center text-[18px] font-semibold'>
            <li>Menu</li>
            <li>Location</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
        <button className='bg-red-700 text-white rounded py-2 px-4'>Login</button>
      </div>
    </>
  )
}
