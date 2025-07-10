import React, { useContext, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import empServices from '../../../Services/empServices';
import { contextApi } from '../../context/Context';
import AddItems from '../AddItems/AddItems';
import toast from 'react-hot-toast';

const UpdateBills = () => {
    const navigate = useNavigate()
    let { state } = useLocation()
    // console.log(state);

    const [bill, setBill] = useState({
        companyName: state.companyName,
        PoNo: state.PoNo,
        invoiceDate: new Date().toISOString().split("T")[0],
        workCompletionDate: state.workCompletionDate.split("T")[0],
        address: state.address,
        PAN: state.PAN,
        GSTNo: state.GSTNo,
        clientBankName: state.clientBankName
    })
    const { globalState } = useContext(contextApi)
    const [items, setItems] = useState(state.items)
    const handelChange = (e) => {
        let { name, value } = e.target
        setBill((preVal) => ({ ...preVal, [name]: value }))
    }
    const handelClick = e => {
        let newObj = {
            id: Date.now(),
            description: "",
            quantity: "",
            rate: "",
            cgstPercent: "",
            sgstPercent: ""
        }
        setItems((preVal) => ([...preVal, newObj]))
    }
    const handelSubmit = (e) => {
        e.preventDefault()
        // console.log(bill);
        // console.log(items);
        let { companyName, workCompletionDate, PoNo, address, PAN, GSTNo, clientBankName } = bill
        let totalAmount = items.reduce((acc, val) => {
            const base = parseInt(val.amount)
            const cgst = base * parseInt(val.cgstPercent) / 100
            const sgst = base * parseInt(val.sgstPercent) / 100

            // console.log(base,cgst,sgst,acc);

            return acc + base + cgst + sgst
        }, 0)
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
        };
        // console.log(payload);

        (async () => {
            try {
                let data = await empServices.updateBills(payload,globalState.token,state._id)
                console.log(data);
                
                if (data.status == 200) {
                    toast.success("Bill Updated successfully")
                    navigate("/home")
                } else {
                    toast.error("Something went wrong")
                }
            } catch (error) {
                console.log(error);
                
                toast.error("Something went wrong")
            }
        })();


    }

    // console.log(new Date().toISOString().split("T")[0]);

    const removeElement = (id) => {
        setItems(items.filter((val) => val.id != id))
    }

    const updateElements = (id, name, value) => {
        // console.log(id,name,value);

        setItems((preVal) => {
            return preVal.map((val) => {
                if (val.id == id) {


                    const updateItems = {
                        ...val, [name]: value
                    }
                    updateItems.amount = val.rate * val.quantity
                    return updateItems
                }

                return val
            })

        })
    }
    let { PAN, companyName, GSTNo, workCompletionDate, clientBankName, address, PoNo } = bill


    return (
        <div className='bg-[#efef] w-full h-full flex items-center justify-center'>
      <form action="" className='w-1/2 h-[90%] flex items-center flex-col gap-4 bg-white py-15rounded-2xl px-10 py-10  max-sm:w-[90%] overflow-scroll shadow-2xl ' onSubmit={handelSubmit}  >
        <div className='w-full  flex justify-center items-center h-10 '>
          <h1 className='text-2xl font-bold max-sm:text-sm'>Update Bill</h1>
        </div>
        <div className='w-full flex justify-center items-center h-10 border-[2px] px-[10px]  '>
          <input type="text" name='companyName' placeholder='companyName' className='w-full outline-0 text-md px-5 font-bold ' onChange={handelChange} value={companyName}/>

        </div>
        <div className='w-full flex justify-center items-center h-10 border-[2px] px-[10px]'>
          <input type="text" name='PoNo' placeholder='Enter PoNo' className='w-full outline-0 text-md px-5 font-bold ' onChange={handelChange} value={PoNo} />

        </div>
        {/* <div className='w-full flex justify-center items-center h-10  border-[2px] px-[10px]'>
          <input type="email" name="invoiceDate" placeholder='Enter Your invoiceDate' className='w-full outline-0 text-md px-5 font-bold ' onChange={handelChange} />
        </div> */}
        <div className='w-full flex justify-center items-center h-10  border-[2px] px-[10px]'>
          <input type="date" name="workCompletionDate" placeholder='Enter Your workCompletionDate' className='w-full outline-0 text-md px-5 font-bold ' onChange={handelChange} value={workCompletionDate}
            max={new Date().toISOString().split("T")[0]} />

        </div>
        <div className='w-full flex justify-center items-center h-10  border-[2px] px-[10px]'>
          <input type="text" name="address" placeholder='Enter Your address' className='w-full outline-0 text-md px-5 font-bold ' onChange={handelChange} value={address} />

        </div>
        <div className='w-full flex justify-center items-center h-10  border-[2px] px-[10px]'>
          <input type="text" name="PAN" placeholder='Enter Your PAN' className='w-full outline-0 text-md px-5 font-bold ' onChange={handelChange} value={PAN}/>

        </div>

        <div className='w-full flex justify-center items-center h-10  border-[2px] px-[10px]'>
          <input type="text" name="GSTNo" placeholder='Enter Your GSTNo' className='w-full outline-0 text-md px-5 font-bold ' onChange={handelChange} value={GSTNo}/>

        </div>
        <div className='w-full flex justify-center items-center h-10  border-[2px] px-[10px]'>
          <input type="text" name="clientBankName" placeholder='Enter Your clientBankName' className='w-full outline-0 text-md px-5 font-bold ' onChange={handelChange} value={clientBankName}/>

        </div>
        {
          items.map((val,inde) => <AddItems
            key={inde}
            removeItem={removeElement}
            val={val}
            updateItems={updateElements}
          >
          </AddItems>
          )
        }
        <div className='border-2  w-full flex justify-center items-center px-3 rounded-sm bg-black hover:bg-[#555] active:bg-lime-500 active:scale-[0.9]'>
          <button className='h-10 text-white font-bold text-md tracking-widest w-full outline-0' type='button' onClick={handelClick}>Click to Add Items</button>
        </div>
        
        <div className='border-2  w-full flex justify-center items-center px-3 rounded-sm bg-black hover:bg-[#555] active:bg-lime-500 active:scale-[0.9]'>
          <button className='h-10 text-white font-bold text-md tracking-widest w-full outline-0'>Click</button>
        </div>

      </form>
    </div>
    )
}

export default UpdateBills