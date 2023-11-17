import React from 'react'
import Navbarofquiz from '../preview/Navbarofquiz'
import './style.css'
import Image from 'next/image'
import AddLectureBtn from './components/AddLectureBtn'

import MainAddExam from './components/MainAddQuizExam'
import BtnNext from './components/BtnNext'
import LoopLearningPath from './components/LoopLearningPath'





async function Outline({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }) {
    const { id } = searchParams
    const url = 'http://localhost:3313/api/courseGPT'
    const fetchData = await fetch(url ,{
            cache : 'no-store',
            method : 'POST',
            body : JSON.stringify({id : id }),
            headers: {
                'Content-Type': 'application/json',
              },
    })

    const fetchData_result = await fetchData.json()
    const titleFetch = fetchData_result.question
    return (
        <div className='flex flex-col max-h-[600vh] '>
            <form action="" className='' >
                <Navbarofquiz />
                <MainAddExam title={'Course Outline'}>
                    <h4 className='text-start mt-[28px] text-[18px] font-medium'> Course Thumbnail</h4>
                    <div className='flex gap-x-10 items-center mt-2'>
                        <Image alt='logo' src={'/Img.svg'} width={200} height={200} />
                        <p className='block w-[414px] text-start'>
                            Upload your course Thumbnail here.
                            Important guidelines: 0000x000 pixels or 00:0 Ratio.
                            Supported format: .jpg, .jpeg, or .png
                            <button className='flex items-center justify-center gap-x-4 w-[147px] h-[37px] border mt-5 border-[#F48C06] rounded-[14px] px-3 py-2 text-[14px] text-[#F48C06] bg-[#FFFFFF]'>UPLOAD  <Image alt='upload' src={'/Upload.svg'} width={11} height={14} /> </button>
                        </p>
                    </div>
                    <div className='w-full'>
                        <h4 className='text-start mt-[28px] text-[18px] font-medium'>Course Title </h4>
                        <div>
                            {/* <input type="text" className='w-full  h-[48px] border border-[#E9EAF0] mt-3 px-4 py-2 outline-none placeholder:flex placeholder:justify-between rounded-[14px]' placeholder='You course tittle' defaultValue={''} onChange={(e) => setNumberOfTitle(e.target.value)}/> */}
                            <span>{}</span>
                        </div>
                        <input type="text" className='w-full  h-[48px] border border-[#E9EAF0] mt-3 px-[1.5em] py-2 outline-none placeholder:flex placeholder:justify-between rounded-[14px]' placeholder='You course tittle' defaultValue={fetchData_result.question} />
                    </div>
                    <div className='w-full'>
                        <h4 className='text-start mt-[28px] text-[18px] font-medium'>Course Description</h4>
                        <textarea id="w3review" name="w3review" rows={4} cols={50} placeholder='Enter your course description' className='px-[1.5em] py-4 w-full h-[364px] outline-none mt-3 rounded-[14px]' defaultValue={fetchData_result.description}>
                        </textarea>
                    </div>
                    <div className='w-full'>
                        <h4 className='text-start mt-[28px] text-[18px] font-medium'>Requirements</h4>
                        <textarea rows={4} cols={50} placeholder='Enter your course requirements' className='px-[1.5em] py-4 w-full h-[364px] outline-none mt-2 rounded-[14px]' defaultValue={fetchData_result.requirement}>
                        </textarea>
                    </div>
                    <div className='flex flex-col gap-y-3'>
                        <h4 className='text-start mt-[28px] text-[18px] font-medium'>Learning Path</h4>
                        <LoopLearningPath id={id as string} datafetch={fetchData_result} title={titleFetch} />
                    </div>
                </MainAddExam>
                <AddLectureBtn id={id as string} />
                <div className=' flex justify-between h-[13vh] items-center w-full  '>
                    <div>
                        <button className='w-[147px] h-[37px] rounded-[14px] border border-[#F48C06] py-1 px-4 text-[14px] bg-[#FFFFFF] '>ย้อนกลับ</button>
                    </div>
                    <BtnNext id={id as string} question={titleFetch} />
                </div>
            </form>

        </div>
    )
}

export default Outline