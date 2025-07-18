import React, { useContext, useState } from 'react'
import AddItems from '../AddItems/AddItems'
import empServices from '../../../Services/empServices'
import { data, useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import { contextApi } from '../../context/Context'

const AddBills = () => {
 const navigate= useNavigate()
  let [Bill, setBill] = useState({
    companyName: "",
    PoNo: "",
    invoiceDate: new Date().toISOString().split("T")[0],
    workCompletionDate: "",
    address: "",
    PAN: "",
    GSTNo: "",
    clientBankName: ""
  })
  const [items, setItems] = useState([])
  const {globalState} = useContext(contextApi)
  
  let handleChange = (e) => {
    let { name, value } = e.target
    setBill({ ...Bill, [name]: value })

  }
  let handleSubmit = (e) => {
    e.preventDefault()
    // console.log(Bill);
    // console.log(items);
    let { companyName, PoNo, invoiceDate, workCompletionDate, address, PAN, GSTNo, clientBankName } = Bill
    let totalAmount = items.reduce((acc, val) => {
      const base = parseInt(val.amount)
      // console.lo);

      const cgst = base * Number(val.cgstPercent) / 100
      const sgst = base * Number(val.sgstPercent) / 100
      console.log(base,cgst,sgst);
      console.log(val);

      return acc + base + cgst + sgst

    }, 0)
    console.log(totalAmount);

    let payload = {
      companyName,
      workCompletionDate,
      PoNo,
      address,
      PAN,
      GSTNo,
      clientBankName,
      items,
      invoiceDate: new Date().toISOString().split("T")[0],
      totalAmount



    }
    console.log(payload);
    (async()=>{
      try {
      let data=await empServices.addBills(payload,globalState.token);
      console.log(globalState);
      
        // console.log(data);
        
        if(data.status==201){
          toast.success("Bills added Succesfully")
          navigate("/home")
        }else{
          toast.error("Something went wrong")
        }
      } catch (error) {
         toast.error("Something went Wrong") 
        
        
        
      }
    })()



  }
  const handleClick = (e) => {
    let newObj = {
      id: Date.now(),
      description: "",
      quantity: "",
      rate: "",
      cgstPercent: "",
      sgstPercent: "",
    }
    setItems((preval) => ([...preval, newObj]))
  }
  const removeItem = (id) => {
    setItems(items.filter((val) => val.id != id))
  }
  const updateItems = (id, name, value) => {
    setItems((preval) => {
      return preval.map((val) => {
        if (val.id == id) {
          const updateItems = {
            ...val, [name]: value
          }
          updateItems.amount = Number(val.rate)*Number(val.quantity)             
        // console.log(updateItems);
        
        //   console.log(updateItems);
          
          return updateItems
         
        }
        return val
      })

    })

  }


  return (
    <div className='bg-[#efef] w-full h-full flex items-center justify-center'>
      <form action="" className='w-1/2 h-[90%] flex items-center flex-col gap-4 bg-white py-15rounded-2xl px-10 py-10  max-sm:w-[90%] overflow-scroll shadow-2xl ' onSubmit={handleSubmit}  >
        <div className='w-full  flex justify-center items-center h-10 '>
          <h1 className='text-2xl font-bold max-sm:text-sm'>Add Bill</h1>
        </div>
        <div className='w-full flex justify-center items-center h-10 border-[2px] px-[10px]  '>
          <input type="text" name='companyName' placeholder='companyName' className='w-full outline-0 text-md px-5 font-bold ' onChange={handleChange} />

        </div>
        <div className='w-full flex justify-center items-center h-10 border-[2px] px-[10px]'>
          <input type="text" name='PoNo' placeholder='Enter PoNo' className='w-full outline-0 text-md px-5 font-bold ' onChange={handleChange} />

        </div>
        {/* <div className='w-full flex justify-center items-center h-10  border-[2px] px-[10px]'>
          <input type="email" name="invoiceDate" placeholder='Enter Your invoiceDate' className='w-full outline-0 text-md px-5 font-bold ' onChange={handleChange} />
        </div> */}
        <div className='w-full flex justify-center items-center h-10  border-[2px] px-[10px]'>
          <input type="date" name="workCompletionDate" placeholder='Enter Your workCompletionDate' className='w-full outline-0 text-md px-5 font-bold ' onChange={handleChange}
            max={new Date().toISOString().split("T")[0]} />

        </div>
        <div className='w-full flex justify-center items-center h-10  border-[2px] px-[10px]'>
          <input type="text" name="address" placeholder='Enter Your address' className='w-full outline-0 text-md px-5 font-bold ' onChange={handleChange} />

        </div>
        <div className='w-full flex justify-center items-center h-10  border-[2px] px-[10px]'>
          <input type="text" name="PAN" placeholder='Enter Your PAN' className='w-full outline-0 text-md px-5 font-bold ' onChange={handleChange} />

        </div>

        <div className='w-full flex justify-center items-center h-10  border-[2px] px-[10px]'>
          <input type="text" name="GSTNo" placeholder='Enter Your GSTNo' className='w-full outline-0 text-md px-5 font-bold ' onChange={handleChange} />

        </div>
        <div className='w-full flex justify-center items-center h-10  border-[2px] px-[10px]'>
          <input type="text" name="clientBankName" placeholder='Enter Your clientBankName' className='w-full outline-0 text-md px-5 font-bold ' onChange={handleChange} />

        </div>
        {
          items.map((val) => <AddItems
            key={val.id}
            removeItem={removeItem}
            val={val}
            updateItems={updateItems}
          >
          </AddItems>
          )
        }
        <div className='border-2  w-full flex justify-center items-center px-3 rounded-sm bg-black hover:bg-[#555] active:bg-lime-500 active:scale-[0.9]'>
          <button className='h-10 text-white font-bold text-md tracking-widest w-full outline-0' type='button' onClick={handleClick}>Click to Add Items</button>
        </div>
        <div className='border-2  w-full flex justify-center items-center px-3 rounded-sm bg-black hover:bg-[#555] active:bg-lime-500 active:scale-[0.9]'>
          <button className='h-10 text-white font-bold text-md tracking-widest w-full outline-0'>Click</button>
        </div>

      </form>
    </div>
  )
}

export default AddBills