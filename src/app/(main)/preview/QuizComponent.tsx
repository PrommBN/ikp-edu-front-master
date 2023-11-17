'use client'
import React, { useCallback, useState } from 'react'
import Image from 'next/image'
import { poppins } from './page'
import { NotoTH } from './layout'
import { useForm } from 'react-hook-form'
import { MdKeyboardArrowUp } from 'react-icons/md';
import './style.css'
import {Notofont} from './page'






export default function QuizComponent({children , Chapter,detail , unit} : {children : React.ReactNode , Chapter : any  , detail : string , unit : any}) {
    const {register, handleSubmit , formState : {errors , isSubmitting}}  = useForm()
    const [isOpenQuiz , setIsOpenQuiz] = useState(false)
    const [start , setStart] = useState(false)
    
    
    
      const OpenQuiz =useCallback((e : any)=>{
        setStart(true)
        if(isOpenQuiz){
          setIsOpenQuiz(false)
          return
        }
        setIsOpenQuiz(true)
      },[isOpenQuiz])
  
      
return (
  <div className="w-full max-h-[1700px] flex flex-col ">
    <button onClick={OpenQuiz} className="w-full bg-[#F5F7FA] flex justify-between h-[62px] items-center rounded-t-[14px]">
    <span className="px-[20px] text-[#2F327D] flex items-center gap-x-3">
             <MdKeyboardArrowUp className={`scale-[2] duration-200 ${isOpenQuiz ?   'rotate-180' : ''} `}/> <span className={`${Notofont.className} font-bold`}>{unit}</span>  <span className={poppins.className}>{detail} </span>
            </span>
    <Image
      alt="correct"
      width={31}
      height={31}
      src={"/Check Box.svg"}
      className="mr-4"
    />
  </button>
  <div className={`bg-[#FFFFFF] w-full flex flex-col border-[1px] rounded-b-[14px] max-h-[0em]  overflow-hidden ${ start && (isOpenQuiz ? 'slide-out ' : 'slide-in')}`} >
      {children}
  </div>
  <div className={`w-full h-[62px] flex justify-center items-center bg-[#FFFFFF] border-b-[1] ${isOpenQuiz ?  'hidden' : 'flex'}`}>
      <h1 className={`font-bold ${NotoTH.className} text-[#6E7485]`} > {Chapter}</h1>
  </div>
</div>
)
}



