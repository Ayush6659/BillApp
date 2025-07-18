import React, { useContext, useState } from 'react'
import { MdAttachEmail } from "react-icons/md";
import { TbPassword } from "react-icons/tb";
import {toast} from 'react-hot-toast'
import empServices from '../../Services/empServices';
import { Link, useNavigate } from 'react-router-dom';
import { contextApi } from '../context/Context';

const Login = () => {
 const {globalState,setGlobalState} =useContext(contextApi)
//  console.log(globalState);
 
  const [formdata, setformdata] = useState({
      email: "",
      password: ""
     
    })
    const navigate=useNavigate()
  const handleChange = (e) => {
      let { name, value } = e.target
      setformdata({ ...formdata, [name]: value })
  
    }
    const handleSubmit = (e) => {
    e.preventDefault()
    
    let {userName,name,password,email}=formdata
    if(!password||!email){
      toast.error("check all fields")
      return
    }
     (async()=>{
      let data=await empServices.loginUser(formdata)
    try {
    

      if(data.status==200){
        toast.success("loggedin  Successfully")
        setGlobalState((preval)=>({...preval,token:data.data.token}))
        navigate("/home")
        // console.log(formdata);
     }else{
        toast.error(`${data.response.data.message}`)
     }
      
    } catch (error) {
     toast.error("something went Wrong")
      
      
    }
    })()
    
    
    
    
    
   

  }

  return (
    <div className='bg-[#efef] w-full h-full flex items-center justify-center'>
      <form action="" className='w-1/2 h-[70%] flex items-center flex-col gap-4 bg-white py-10 rounded-2xl px-10 max-sm:w-[90%] overflow-scroll  ' onSubmit={handleSubmit} >
        <div className='w-full  flex justify-center items-center h-10 '>
          <h1 className='text-2xl font-bold max-sm:text-sm'>Login Form</h1>
        </div>
        <div className='w-full flex justify-center items-center h-10  border-[2px] px-[10px]'>
          <input type="email" name="email" placeholder='Enter Your email' className='w-full outline-0 text-md px-5 font-bold ' onChange={handleChange} />
          <span><MdAttachEmail /></span>
        </div>
        <div className='w-full flex justify-center items-center h-10  border-[2px] px-[10px]'>
          <input type="password" name='password' placeholder='Enter Password' className='w-full outline-0 text-md px-5 font-bold ' onChange={handleChange} />
          <span><TbPassword /></span>
        </div>
        <div className='w-full  flex justify-center items-center h-10 bg-black text-amber-50 '>
          <button className='font-bold tracking-widest w-full h-full hover:bg-blue-300'>click</button>
        </div>
      <div className='hover:underline'>Click here to<Link to="register"> Register</Link></div>
      </form>
    </div>
  )
}

export default Login