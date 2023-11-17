'use client'
import React from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

function MainAddExam({children,title } : { children? : React.ReactNode , title? : any }) {
    const pathname = usePathname()

  return (
    <main className='pt-[90px] grow basis-auto ' >
        
    <div className=' flex justify-center items-center '>
      <h2 className=' text-center text-[40px] font-bold'> {title}</h2>
    </div>
    <div className='grid grid-cols-5   place-content-center mt-[28px]  place-items-stretch  pb-3  '>
    <Link  className='w-full' href={'/plan_your_course'}>  <button type='button' className={`text-center h-[43px]  pb-3  duration-200 w-full  ${pathname == '/plan_your_course'? 'border-[#F48C06] border-b-[1px]' : 'border-b-[0.2px] border-[#D5D6D9]'} `}> Plan your course</button></Link> 
       <Link className='w-full'  href={'/course_outline'}> <button type='button' className={`text-center h-[43px]  pb-3  duration-200 w-full ${pathname == '/course_outline' ? 'border-[#F48C06] border-b-[1px]' : 'border-b-[0.2px] border-[#D5D6D9]'} `}>Course Outline</button></Link>
       <Link className='w-full' href={'/addquiz'}>  <button type='button' className={`text-center h-[43px]  pb-3  duration-200 w-full ${pathname == '/addquiz' ?  'border-[#F48C06] border-b-[1px]' : 'border-b-[0.2px] border-[#D5D6D9]'} ` }>Quiz</button> </Link>
       <Link className='w-full' href={'/exam'}>  <button type='button' className={`text-center h-[43px]  pb-3  duration-200  w-full ${pathname == '/exam' ? 'border-[#F48C06] border-b-[1px]' : 'border-b-[0.2px] border-[#D5D6D9]'} `}>Examination</button> </Link>
       <Link className='w-full'  href={'/preview'}> <button type='button' className={`text-center h-[43px]  pb-3  duration-200  w-full  ${pathname == '/preview'? 'border-[#F48C06] border-b-[1px]' : 'border-b-[0.2px] border-[#D5D6D9]'}`}>Preview</button>  </Link>
    </div>

      {children}
  
  
    
</main>
  )
}

export default MainAddExam