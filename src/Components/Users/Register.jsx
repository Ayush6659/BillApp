import React from 'react'
import { CgNametag } from "react-icons/cg";
import { MdOutlineDriveFileRenameOutline } from "react-icons/md";
import { MdAttachEmail } from "react-icons/md";
import { TbPassword } from "react-icons/tb";
import { FaRepeat } from "react-icons/fa6";

const Register = () => {
  return (
    <div className='bg-[#efef] w-full h-full flex items-center justify-center '>
     <form action="" className='w-1/2  flex items-center justify-center flex-col gap-2 bg-white py-10 rounded-2xl px-10' >
      <div className='w-full  flex justify-center items-center h-10 '>
        <h1 className='text-2xl font-bold'>Register Form</h1>
      </div>
      <div className='w-full flex justify-center items-center h-10 border-[2px]  '>
        <input type="text" name="" placeholder='Enter Name' className='w-full outline-0 text-md px-5 font-bold p'/>
        <span><CgNametag /></span>
      </div>
      <div className='w-full flex justify-center items-center h-10 '>
        <input type="text" name="" placeholder='Enter Username' className='w-full outline-0 text-md px-5 font-bold p' />
        <span><MdOutlineDriveFileRenameOutline /></span>
      </div>
      <div className='w-full flex justify-center items-center h-10 '>
        <input type="email" name="" placeholder='Enter Your email'  className='w-full outline-0 text-md px-5 font-bold p'/>
        <span><MdAttachEmail /></span>
      </div>
      <div className='w-full flex justify-center items-center h-10 '>
        <input type="password" placeholder='Enter Password'  className='w-full outline-0 text-md px-5 font-bold p'/>
        <span><TbPassword /></span>
      </div>
      <div className='w-full  flex justify-center items-center h-10 '>
        <input type="password" placeholder='Re-type your password'  className='w-full outline-0 text-md px-5 font-bold p'/>
        <span><FaRepeat /></span>
      </div>
      <div className='w-full  flex justify-center items-center h-10 bg-black text-amber-50 '>
        <button className='font-bold tracking-widest'>click</button>
      </div>
     </form>
    </div>
  )
}

export default Register