
import React from 'react'
import Navbarofquiz from '../preview/Navbarofquiz'
import './style.css'
import MainAddQuiz from './MainAddQuiz'
import BtnSummit from './BtnSummit'

export default  async  function AddQuiz({searchParams} : { searchParams: { [key: string]: string | string[] | undefined }}) {
    const { id, number } = searchParams
  return (
    <div className='pl-[157px] pr-[180px] h-full w-full '>
         <form  className='h-full flex flex-col'>
        <Navbarofquiz/>
        <MainAddQuiz  question={id as string} lecture={number as string} title='Quiz'/>
        <BtnSummit/>
        </form>
    </div>
  )
}