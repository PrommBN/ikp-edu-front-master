import React from 'react'
import { poppins } from '../../preview/page'
type Props = {
    optionData? : any
    label? : string
}

export default function DropDownPlan({label,optionData}: Props) {
  return (
    <div className='flex w-full items-center mb-4'>
        <p className={`${poppins.className} text-[16px] font-semibold text-[#2F327D] w-[200px]`}>{label}</p>
        <select name="" id="" className='px-5 py-2 rounded-[14px] w-[10vw]'>
                <option value="">Category</option>
                <option value="">B</option>
                <option value="">C</option>
        </select>
    </div>
  )
}