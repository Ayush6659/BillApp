import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { IoMdMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";

const NavBar = () => {
const [show,setShow] = useState(false)
const handleShow=()=>{
  setShow(!show)
  // console.log(show);
}
  return (
     <div className={`w-full h-[80px] bg-black text-amber-50 flex justify-around items-center text-xl max-sm:justify-start max-[639px]:px-8 ${show?'h-[210px] flex flex-col justify-around gap-2.5 items-start py-2.5 text-white':""} sm:flex-row sm:h-[80px] sm:justify-around sm:items-center`}>


      <div className='hidden text-white max-sm:flex'>
       {
        show?<IoMdMenu onClick={handleShow}/>:<IoClose onClick={handleShow} />
       }
      </div>
      <div className={`max-sm:hidden${show?'block':""}`}>
      <NavLink className={({isActive})=>isActive?"bg-amber-50 p-2 rounded text-black":""
        }end to={"/home"}>Home</NavLink> 
      </div>
      <div  className={`max-sm:hidden${show?'block':""}`}>
      <NavLink className={({isActive})=>isActive?"bg-amber-50 p-2 rounded text-black":""} end to={"addBills"}>AddBills</NavLink></div>

      <div  className={`max-sm:hidden${show?'block':""}`}>
      <NavLink className={({isActive})=>isActive?"bg-amber-50 p-2 rounded text-black":""} end to={"filterBills"}>FilterBills</NavLink> 
      </div>
      <div  className={`max-sm:hidden${show?'block':""}`}>
       <NavLink className={({isActive})=>isActive?"bg-amber-50 p-2 rounded text-black":""} end to={"about"}> About</NavLink></div>
    </div>
  )
}

export default NavBar