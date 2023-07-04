import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between px-[40px] content-center items-center py-[20px] mb-[2px] mb-[black] shadow-b-[black]'>
      <div className="logo text-3xl text-[#ff6042] font-bold cursor-pointer"><h2>Reorg</h2></div>
      <div className="flex justify-between w-[40%] items-center">
      <div className=""><button className="bg-[#ff6012] rounded-[12px] py-[8px] px-[10px] text-[#ffffff] hover:text-[#ff6012] hover:bg-[white]">Login</button></div>
        <ul className="flex justify-between py-[12px] px-[10px] gap-x-[13px] bg-[#ff6012] rounded-[12px] text-[#ffffff]">
            <li className='cursor-pointer p-[4px] hover:text-[black] hover:bg-[white] hover:p-[5px] hover:rounded-[10px]'>home</li>
            <li className='cursor-pointer p-[4px] hover:text-[black] hover:bg-[white] hover:p-[5px] hover:rounded-[10px]'>about us</li>
            <li className='cursor-pointer p-[4px] hover:text-[black] hover:bg-[white] hover:p-[5px] hover:rounded-[10px]'>Contact us</li>
            <li className='cursor-pointer p-[4px] hover:text-[black] hover:bg-[white] hover:p-[5px] hover:rounded-[10px]'>Services</li>
            {/* <div className=""></div> */}
        </ul>
      </div>
    </div>
  )
}

export default Navbar
