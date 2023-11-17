
import React from 'react'
import Navbarofquiz from '../preview/Navbarofquiz'
import './style.css'
import BtnSummit from '../addquiz/BtnSummit'
import MainAddQuiz from '../addquiz/MainAddQuiz'

export default  async  function AddQuiz({searchParams} : { searchParams: { [key: string]: string | string[] | undefined }}) {
    const { id } = searchParams

  
  return (
    <div className='pl-[157px] pr-[180px] h-full '>
         <form  className='h-full flex flex-col'>
        <Navbarofquiz/>
        <MainAddQuiz question={id as string} lecture={'exam'} title='Examination'/>
        <BtnSummit/>
        </form>
    </div>
  )
}