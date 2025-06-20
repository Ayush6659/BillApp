import React, { useState } from 'react'
import { CgNametag } from "react-icons/cg";
import { MdOutlineDriveFileRenameOutline } from "react-icons/md";
import { MdAttachEmail } from "react-icons/md";
import { TbPassword } from "react-icons/tb";
import { FaRepeat } from "react-icons/fa6";
import {validatePassword} from "val-pass"

const Register = () => {
const [formdata,setformdata] = useState({
  username:"",
  password:"",
  email:"",
  name:""
})

const[matched,setMatched]=useState(true)
const {validateAll,getAllValidationErrorMessage}=validatePassword("password",8)

const handleChange=(e)=>{
  let {name,value} =e.target
  setformdata({...formdata,[name]:value})

}
const handleSubmit=(e)=>{
  e.preventDefault()
  console.log(formdata);
  
  
}
const handleRepeatPass=(e)=>{
  const {value}=e.target
  formdata.password!=value?setMatched(false):setMatched(true)
  value==""&&setMatched(true)

}


  return (
    <div className='bg-[#efef] w-full h-full flex items-center justify-center '>
     <form action="" className='w-1/2  flex items-center justify-center flex-col gap-2 bg-white py-10 rounded-2xl px-10 max-sm:w-[90%] ' onSubmit={handleSubmit} >
      <div className='w-full  flex justify-center items-center h-10 '>
        <h1 className='text-2xl font-bold max-sm:text-sm'>Register Form</h1>
      </div>
      <div className='w-full flex justify-center items-center h-10 border-[2px]  '>
        <input type="text" name='name' placeholder='Enter Name' className='w-full outline-0 text-md px-5 font-bold p' onChange={handleChange}/>
        <span><CgNametag /></span>
      </div>
      <div className='w-full flex justify-center items-center h-10 '>
        <input type="text" name='username' placeholder='Enter Username' className='w-full outline-0 text-md px-5 font-bold p' onChange={handleChange}/>
        <span><MdOutlineDriveFileRenameOutline /></span>
      </div>
      <div className='w-full flex justify-center items-center h-10 '>
        <input type="email" name="email" placeholder='Enter Your email'  className='w-full outline-0 text-md px-5 font-bold p'onChange={handleChange}/>
        <span><MdAttachEmail /></span>
      </div>
      <div className='w-full flex justify-center items-center h-10 '>
        <input type="password" name='password' placeholder='Enter Password'  className='w-full outline-0 text-md px-5 font-bold p'onChange={handleChange}/>
        <span><TbPassword /></span>
      </div>
      <div className={`w-full border-2 flex justify-center items-center h-10 ${!matched? `border-red-700`: `border-black`} `}>
        <input type="password" placeholder='Re-type your password'  className='w-full outline-0 text-md px-5 font-bold p' onChange={handleRepeatPass}/>
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