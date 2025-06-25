import React, { useState } from 'react'

const AddBills = () => {
  let [Bill,setBill]=useState({})
  let handleChange=(e)=>{
    let {name,value}=e.target
    setBill({...Bill,[name]:value})
  }
  let handleSubmit=(e)=>{
    e.preventDefault()
    console.log(Bill);
    

  }
  return (
    <div className='bg-[#efef] w-full h-full flex items-center justify-center'>
         <form action="" className='w-1/2 h-[70%] flex items-center flex-col gap-2 bg-white py-10 rounded-2xl px-10 max-sm:w-[90%] overflow-scroll  ' onSubmit={handleSubmit} >
           <div className='w-full  flex justify-center items-center h-10 '>
             <h1 className='text-2xl font-bold max-sm:text-sm'>Register Form</h1>
           </div>
           <div className='w-full flex justify-center items-center h-10 border-[2px] px-[10px]  '>
             <input type="text" name='name' placeholder='Enter Name' className='w-full outline-0 text-md px-5 font-bold ' onChange={handleChange} />
           
           </div>
           <div className='w-full flex justify-center items-center h-10 border-[2px] px-[10px]'>
             <input type="text" name='userName' placeholder='Enter userName' className='w-full outline-0 text-md px-5 font-bold ' onChange={handleChange} />
           
           </div>
           <div className='w-full flex justify-center items-center h-10  border-[2px] px-[10px]'>
             <input type="email" name="email" placeholder='Enter Your email' className='w-full outline-0 text-md px-5 font-bold ' onChange={handleChange} />
           
           </div>
          
          
           <div className='w-full  flex justify-center items-center h-10 bg-black text-amber-50 '>
             <button className='font-bold tracking-widest w-full h-full hover:bg-blue-300'>click</button>
           </div>
   
         </form>
       </div>
  )
}

export default AddBills