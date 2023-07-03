import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between px-[40px] content-center'>
      <div className="logo text-3xl text-[#ff6042] font-bold"><h2>Reorg</h2></div>
      <div className="">
        <ul className="flex justify-evenly py-[12px] gap-x-[13px] bg-[#ff6012] rounded-[12px]">
            <li>home</li>
            <li>about us</li>
            <li>Contact us</li>
            <li>login</li>
            <div className=""></div>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
