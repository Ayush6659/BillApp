import React, { useState } from 'react'
import { CgNametag } from "react-icons/cg";
import { MdOutlineDriveFileRenameOutline } from "react-icons/md";
import { MdAttachEmail } from "react-icons/md";
import { TbPassword } from "react-icons/tb";
import { FaRepeat } from "react-icons/fa6";
import { validatePassword } from "val-pass"
import {toast} from 'react-hot-toast'
import empServices from '../../Services/empServices';
import { useNavigate } from 'react-router-dom';

const Register = () => {
 const navigate= useNavigate()
  const [formdata, setformdata] = useState({
    userName: "",
    password: "",
    email: "",
    name: ""
  })

  const [matched, setMatched] = useState(true)
  const [errorMessage, setErrorMessage] = useState("")

  const handleChange = (e) => {
    let { name, value } = e.target
    if (name=="password") {
     let {validateAll,getAllValidationErrorMessage } = validatePassword(value,8)
    //  console.log(validateAll());
     
      validateAll()?setErrorMessage(""):setErrorMessage(getAllValidationErrorMessage())
      value==""&&setErrorMessage("")
    }


    setformdata({ ...formdata, [name]: value })

  }
  const handleSubmit = (e) => {
    e.preventDefault()
    
    let {userName,name,password,email}=formdata
    if(!name||!userName||!password||!email){
      toast.error("check all fields")
      return
    }
    let {validateAll,getAllValidationErrorMessage}=validatePassword(password)
    if(!validateAll){
      toast.error(`${getAllValidationErrorMessage()}`)
      
    }
    if(!matched){
      toast.error("password did not match")
      return

    }
    (async()=>{
      let something=await empServices.regisUser(formdata)
    try {
    

      if(something.status==201){
        toast.success("Registered Successfully")
        navigate("/")
     }else{
        toast.error("Something went Wrong")
     }
      
    } catch (error) {
      console.log(error);
      
      
    }
    })()
    
    
   

  }
  const handleRepeatPass = (e) => {
    const { value } = e.target
    formdata.password != value ? setMatched(false) : setMatched(true)
    value == "" && setMatched(true)

  }



  return (
    <div className='bg-[#efef] w-full h-full flex items-center justify-center'>
      <form action="" className='w-1/2 h-[70%] flex items-center flex-col gap-2 bg-white py-10 rounded-2xl px-10 max-sm:w-[90%] overflow-scroll  ' onSubmit={handleSubmit} >
        <div className='w-full  flex justify-center items-center h-10 '>
          <h1 className='text-2xl font-bold max-sm:text-sm'>Register Form</h1>
        </div>
        <div className='w-full flex justify-center items-center h-10 border-[2px] px-[10px]  '>
          <input type="text" name='name' placeholder='Enter Name' className='w-full outline-0 text-md px-5 font-bold ' onChange={handleChange} />
          <span><CgNametag /></span>
        </div>
        <div className='w-full flex justify-center items-center h-10 border-[2px] px-[10px]'>
          <input type="text" name='userName' placeholder='Enter userName' className='w-full outline-0 text-md px-5 font-bold ' onChange={handleChange} />
          <span><MdOutlineDriveFileRenameOutline /></span>
        </div>
        <div className='w-full flex justify-center items-center h-10  border-[2px] px-[10px]'>
          <input type="email" name="email" placeholder='Enter Your email' className='w-full outline-0 text-md px-5 font-bold ' onChange={handleChange} />
          <span><MdAttachEmail /></span>
        </div>
        <div className='w-full flex justify-center items-center h-10  border-[2px] px-[10px]'>
          <input type="password" name='password' placeholder='Enter Password' className='w-full outline-0 text-md px-5 font-bold ' onChange={handleChange} />
          <span><TbPassword /></span>
        </div>
        <div className={errorMessage?'w-full flex justify-center items-center px-3 rounded-sm':'hidden'}>
          <span className='text-red-700'>*{errorMessage}</span>
        </div>
        <div className={`w-full  flex justify-center items-center  border-[2px] px-[10px] h-10 ${!matched ? `border-red-700` : `border-black`} `}>
          <input type="password" placeholder='Re-type your password' className='w-full outline-0 text-md px-5 font-bold  ' onChange={handleRepeatPass} />
          <span><FaRepeat /></span>
        </div>
        <div className='w-full  flex justify-center items-center h-10 bg-black text-amber-50 '>
          <button className='font-bold tracking-widest w-full h-full hover:bg-blue-300'>click</button>
        </div>

      </form>
    </div>
  )
}

export default Register