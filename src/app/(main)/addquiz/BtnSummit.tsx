import React from 'react'

function BtnSummit() {
  return (
    <div className='grow-0 basis-auto flex justify-between py-10 '>
                <div className='flex items-center'>
                            <button type='button' className='w-[147px] h-[37px]  border-[1px] border-[#F48C06] text-[#F48C06] rounded-[14px] duration-200 hover:bg-[#F48C06] hover:text-white bg-[#FFFFFF] '> ย้อนกลับ</button>
                </div>
                <div className='flex items-center gap-x-10'>
                    <button type='submit' className='w-[147px] h-[37px]  border-[1px] border-[#F48C06] text-[#F48C06] rounded-[14px] duration-200 bg-[#FFFFFF]'>บันทึก</button>
                </div>
    </div>
  )
}

export default BtnSummit