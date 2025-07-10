import React from 'react'

const FilterBills = () => {
  return (

    <div className="w-full min-h-screen p-6 bg-gray-100 flex flex-wrap gap-6 justify-center">
      <form action="" className='w-1/2 h-[90%] flex items-center flex-col gap-4 bg-white py-15rounded-2xl px-10 py-10  max-sm:w-[90%] overflow-scroll shadow-2xl '>
        <div className='w-full  flex justify-center items-center h-10 '>
          <h1 className='text-2xl font-bold max-sm:text-sm'>Filter Bill</h1>
        </div>
        <div className='w-full flex justify-center items-center h-10 border-[2px] px-[10px]'>
          <input type="text" name='PoNo' placeholder='Enter PoNo' className='w-full outline-0 text-md px-5 font-bold '/>
        </div>
        <div className='w-full flex justify-center items-center h-10  border-[2px] px-[10px]'>
          <input type="date" name="workCompletionDate" placeholder='Enter Your workCompletionDate' className='w-full outline-0 text-md px-5 font-bold '/>
        </div>
        <div className='w-full flex justify-center items-center h-10  border-[2px] px-[10px]'>
          <input type="date" name="workCompletionDate" placeholder='Enter Your workCompletionDate' className='w-full outline-0 text-md px-5 font-bold '/>
        </div>
        <div className='w-full flex justify-center items-center h-10  border-[2px] px-[10px]'>
          <input type="email" name="invoiceDate" placeholder='Enter Your invoiceDate' className='w-full outline-0 text-md px-5 font-bold '  />
        </div>
        <div className='w-full flex justify-center items-center h-10  border-[2px] px-[10px]'>
          <input type="email" name="invoiceDate" placeholder='Enter Your invoiceDate' className='w-full outline-0 text-md px-5 font-bold '  />
        </div>



      </form>

    </div>



  )
}

export default FilterBills