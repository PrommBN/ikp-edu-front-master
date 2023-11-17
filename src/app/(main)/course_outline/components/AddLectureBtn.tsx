'use client'

import { useResult } from '@/app/hook/store'
import React, { useCallback, useEffect } from 'react'

type Props = {
  id : string
}

export default function AddLectureBtn({id }: Props) {
  const {setaddlecture} = useResult()
   
  return (
    <button type='button' className='w-full text-center h-[48px] border mt-9 rounded-[14px] py-2 bg-[#F48C06]' onClick={setaddlecture} >Add Lecture</button>
  )
} 