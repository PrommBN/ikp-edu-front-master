'use client'
import React, { useCallback } from 'react'
import { useRouter } from 'next/navigation'
import { SendtoDbforSave } from '../../../../../func/SendtoDbforSave'
import toast from 'react-hot-toast'

function BtnNext({ id, question }: { id: string, question: string }) {
  const router = useRouter()
  const AddtoPreview = async () => {
    const outline = sessionStorage.getItem('lecture' + id)
    const exam = sessionStorage.getItem('quizNumber' + id + 'lecture 0exam')
    let savedata = []
    for (let i = 0; i < sessionStorage.length; i++) {
      const sessionquiz = sessionStorage.getItem(`quizNumber${question.trim()}${(i + 1)}lecture 0${(i + 1)}`)
      if (sessionquiz) {
        savedata.push({ [`quiz${i + 1}`]: sessionquiz });
      }
    }
    savedata.push({ [`exam`]: exam });
    savedata.push({ [`outline`]: outline });
    const res = await SendtoDbforSave(savedata)
    const { msg, data } = res
    if (msg) {
      toast.success('Success')
      sessionStorage.clear()
      router.push(`/preview?id=${data}`)
    }


  }

  return (
    <div className='flex gap-x-7'>
      <button className='w-[147px] h-[37px] rounded-[14px] border border-[#F48C06] py-1 px-4 text-[14px] bg-[#FFFFFF]' type='button' onClick={AddtoPreview}>บันทึก</button>
      <button className='w-[147px] h-[37px] rounded-[14px] border border-[#F48C06] py-1 px-4 text-[14px]  bg-[#FFFFFF]' onClick={() => router.push('/exam?id=' + id)} type='button'>ถัดไป</button>
    </div>
  )
}

export default BtnNext