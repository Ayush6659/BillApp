import React from 'react'
import { CgNametag } from "react-icons/cg";

const Register = () => {
  return (
    <div className='bg-amber-50 w-full h-full flex items-center justify-center '>
     <form action="" className='w-1/2  flex items-center justify-center flex-col gap-2 ' >
      <div className='w-full bg-amber-300 flex justify-center items-center h-10 '>
        <h1>Register Form</h1>
      </div>
      <div className='w-full bg-amber-300 flex justify-center items-center h-10 '>
        <input type="text" name="" placeholder='Enter Name' className='w-full outline-0 text-md px-5'/>
        <span><CgNametag /></span>
      </div>
      <div className='w-full bg-amber-300 flex justify-center items-center h-10 '>
        <input type="text" name="" placeholder='Enter Username' />
      </div>
      <div className='w-full bg-amber-300 flex justify-center items-center h-10 '>
        <input type="email" name="" placeholder='Enter Your email' />
      </div>
      <div className='w-full bg-amber-300 flex justify-center items-center h-10 '>
        <input type="password" placeholder='Enter Password'/>
      </div>
      <div className='w-full bg-amber-300 flex justify-center items-center h-10 '>
        <input type="password" placeholder='Re-type your password'/>
      </div>
      <div className='w-full bg-amber-300 flex justify-center items-center h-10 '>
        <button>click</button>
      </div>
     </form>
    </div>
  )
}

export default Register