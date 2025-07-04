import React from 'react'
import { LiaAudioDescriptionSolid } from "react-icons/lia";
import { RiSortNumberDesc } from "react-icons/ri";
import { GiPriceTag } from "react-icons/gi";
import { PiSealPercentLight } from "react-icons/pi";
import { PiSealPercentThin } from "react-icons/pi";
import { HiDocumentRemove } from "react-icons/hi";


const AddItems = ({ removeItem, val, updateItems }) => {
    // console.log(removeItem, val);
    // console.log(val);
    // console.log(val.id);

    const handelSubmit = (e) => {
        let { name, value } = e.target
        updateItems(val.id, name, value)

    }







    return (
        <>
            <div className='w-full flex justify-end items-center py-1 px-2 gap-3.5'>
                <div
                    className='flex items-center gap-2 bg-red-400 px-4 py-1 rounded-xl hover:bg-red-600 text-amber-200 hover:text-amber-100 hover:font-medium cursor-pointer'

                    onClick={() => {
                        removeItem(val.id)
                    }}
                >
                    <div>Remove Item</div>
                    <HiDocumentRemove />

                </div>
            </div>

            <div className='w-full flex border-2 justify-center items-center py-1 px-2 rounded-sm'>
                <input
                    type='text'
                    name='description'
                    placeholder='Enter description'
                    className='outline-none w-full h-[30px]'
                    onChange={handelSubmit}
                    value={val.description}
                />
                <LiaAudioDescriptionSolid />
            </div>

            <div className='w-full flex border-2 justify-center items-center py-1 px-2 rounded-sm'>
                <input
                    type='number'
                    name='quantity'
                    placeholder='Enter quantity'
                    className='outline-none w-full h-[30px]'
                    onChange={handelSubmit}
                    value={val.quantity}
                />
                <RiSortNumberDesc />

            </div>

            <div className='w-full flex border-2 justify-center items-center py-1 px-2 rounded-sm'>
                <input
                    type='number'
                    name='rate'
                    placeholder='Enter rate'

                    className='outline-none w-full h-[30px]'
                    onChange={handelSubmit}
                    value={val.rate}
                />
                <GiPriceTag />

            </div>

            <div className='w-full flex border-2 justify-center items-center py-1 px-2 rounded-sm'>
                <input
                    type='number'
                    name='cgstPercent'
                    placeholder='Enter CGST %'
                    onChange={handelSubmit}
                    value={val.cgstPercent}
                    className='outline-none w-full h-[30px]'
                />
                <PiSealPercentLight />

            </div>

            <div className='w-full flex border-2 justify-center items-center py-1 px-2 rounded-sm'>
                <input
                    type='number'
                    name='sgstPercent'
                    placeholder='Enter SGST %'
                    onChange={handelSubmit}
                    value={val.sgstPercent}
                    className='outline-none w-full h-[30px]'
                />
                <PiSealPercentThin />
            </div>
        </>
    );
};

export default AddItems