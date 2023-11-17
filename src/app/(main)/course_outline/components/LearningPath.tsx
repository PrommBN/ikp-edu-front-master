'use client'
import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { DeleteLearningP } from '../../../../../func/DeleteLearningP'
import { LearningPathType } from '@/app/types'

export default function LearningPath({index , data , authors , title } : { index  : number , data : LearningPathType  , authors : string  , title : string}) {
    const router = useRouter()
      
  return (
  <div>
      <div className='w-full flex flex-col h-[260px] px-6 bg-[#FFFFFF] rounded-[14px] py-2 '>
        <div className='w-full justify-between flex '>
                <div className=' flex gap-x-2 h-[72px] items-center '>
                <p className='flex gap-x-5 '> <Image alt='menu' src={'/Menu.svg'} width={20} height={20}/> <span> Lecture { index > 9 ? index : '0' + index }:   </span> </p>
                <input type="text" className=' outline-none' placeholder='Topic name' defaultValue={data.lectureTitle}/>
                </div>
                <div className='flex gap-x-7'>
                        <Image alt='edit' width={24} height={24} src={'/PencilLine.svg'}/>
                        <Image alt='edit' width={24} height={24} src={'/Trash.svg'} className='cursor-pointer' onClick={()=> DeleteLearningP('s')}/>
                </div>
        </div>
        <textarea  defaultValue={data.lectureWebsite} rows={4} cols={50} placeholder='Enter lecture details' className='px-5 py-3 w-full h-[144px] outline-none mt-3 border rounded-[14px]'>
        </textarea>
    </div>
    <button className='w-full h-[70px] text-center  rounded-[14px] mt-2 bg-[#FFFFFF]' type='button' onClick={()=>  router.push('/addquiz?id='+title+index+'&&number=' + index ) }> Add quiz </button>
  </div>
  )
}