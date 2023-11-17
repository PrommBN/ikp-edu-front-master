'use client'
import React, { useCallback, useEffect, useState } from 'react'
import { inter } from './page'
import QuizBtnNext from './QuizBtnNext'
import { Variable } from '../../../../variable'
import QuizBtnprev from './QuizBtnprev'
import { useForm } from 'react-hook-form'
import { Notofont} from './page'
import { useResult} from '../../hook/store'
import { LearningPathPreviewType, QuizType } from '@/app/types'


export default function QuizChiose({title,numberQuiz , unique , preview  ,exam} : {title : string , numberQuiz : string , unique : string , preview? : LearningPathPreviewType , exam? : QuizType }) {
  const {register , handleSubmit ,reset, formState : { isSubmitSuccessful}} = useForm()
  const [choice_navigate , setchoice_navigate] = useState(1)
    const Quiz_Data  = useCallback(()=>{
            const Quiz_Data  = Variable()
            return Quiz_Data
    },[])
    const one  = Quiz_Data()
    const {setResultStore,resultStore ,numberofQuizStore } = useResult()
  const onSubmit = useCallback((data : any)=>{
    let newResult = 0;
    for (let i = 0; i < 5; i++) {
        if(data["choice" +i] == 'true'){
          newResult++
        }
    }
    setResultStore(newResult)
   
      },[])

      useEffect(()=>{
          if(isSubmitSuccessful){
              reset()
          }
      },[isSubmitSuccessful, reset, resultStore])
      if(resultStore){
          return(
              <div className={`w-full h-[300px] flex flex-col gap-y-5 duration-200 opacity-1 ${resultStore ?  'opacity-1'  : 'opacity-0'}`}>
              <h3 className={`w-full text-center text-[16px] font-bold ${Notofont.className} text-[#2F327D]`}> Chapter 1 Quiz</h3>
              <h5 className={`w-full text-center ${inter.className} font-bold text-[16px] text-[#2F327D]`}> Quiz 5/5</h5>
                <h2 className={`w-full text-center ${inter.className} text-[32px] font-bold text-[#2F327D]`}> Overall {(resultStore/5)*100+'%'} </h2>
                <div className='w-full flex justify-center items-center'>
                <button className={`w-[147px] h-[37px] text-center mt-4   border-[1px] border-[#F48C06] text-[14px] rounded-[14px] ${Notofont.className} text-[#F48C06]`}> RETRY</button>
                </div>
              </div>
          )
      }else{
        return(
          <div className="w-full px-[108px] max-h-[700px] flex flex-col duration-200">
          <h4 className="text-center  text-[16px] font-bold text-[#2F327D]">{title} </h4>
          <h5 className="text-center text-[16px] font-bold text-[#2F327D]">Quiz {numberofQuizStore}/5 </h5>
              <form onSubmit={handleSubmit(onSubmit)}>
        {/* { one && one.map((item,index)=>{
            return   <div key={index}  className={`flex flex-col mt-[44px] w-[836px] max-h-[520px] gap-y-[36px] mb-20 ${ choice_navigate == index+1 ? 'flex'  : 'hidden' }`} >
                      <h6 className={`${inter.className} font-bold text-[16px] text-[#696984]`}>{item.title}</h6>
                       <label htmlFor={'ch'+(index+1)+'a'+unique} className='label-radio' >
                        <input  type="radio" {...register(`choice${index}`)} value={'true'} id={'ch'+(index+1)+'a'+unique} />{" "}
                        <span className='custom-radio'> {item.choice1}</span>
                      </label>
                      <label htmlFor={'ch'+(index+2)+'b'+unique} className='label-radio'   >
                        <input type="radio" {...register(`choice${index}`)} value={'false'} id={'ch'+(index+2)+'b'+unique} />{" "}
                        <span className='custom-radio'> {item.choice2}</span>
                      </label>
                      <label htmlFor={'ch'+(index+3)+'c'+unique} className='label-radio' >
                        <input type="radio" {...register(`choice${index}`)} value={'false'} id={'ch'+(index+3)+'c'+unique} />{" "}
                        <span className='custom-radio'> {item.choice3}</span>
                      </label>
                      <label htmlFor={'ch'+(index+4)+'d'+unique} className='label-radio' >
                        <input type="radio" {...register(`choice${index}`)} value={'false'} id={'ch'+(index+4)+'d'+unique} />{" "}
                        <span className='custom-radio'> {item.choice4} </span>
                      </label>
                   </div>
               
          })}    */}

{ preview?.quiz && preview?.quiz.map((previewquiz,indexs : number)=>{
            return   <div key={indexs}  className={`flex flex-col mt-[44px] w-[836px] max-h-[520px] gap-y-[36px] mb-20 ${ choice_navigate == indexs+1 ? 'flex'  : 'hidden' }`} >
                      <h6 className={`${inter.className} font-bold text-[16px] text-[#696984]`}>{previewquiz?.question_text}</h6>
                      {
                          previewquiz?.options.map((option , index : number)=>{
                              return <>  
                                  <label htmlFor={String(previewquiz._id)+index} className='label-radio' >
                                  <input  type="radio" {...register(`choice${index}`)} value={'true'} id={String(previewquiz._id)+index} name={'ch'+indexs+previewquiz._id} />{" "}
                                  <span className='custom-radio'> {option.ans}</span>
                                 </label>
                                   </>
                          })
                      }
                   </div>
               
          })}


      { 

      }  
          <div className='flex justify-end w-full'>
          { choice_navigate > 1 && 
          <QuizBtnprev choice_navigate={choice_navigate} setchoice_navigate={setchoice_navigate}  > Prev</QuizBtnprev>
          }
          { choice_navigate == 5  ?
          <button type='submit' className='className="self-end mr-[20px] mb-[20px] w-[147px] h-[37px] rounded-[14px] border-[#F48C06] border-[1px] text-center text-[#F48C06] text-[14px] py-2 hover:bg-[#F48C06] duration-200 hover:text-[white] '> SUBMIT </button>  : 
          <QuizBtnNext choice_navigate={choice_navigate} setchoice_navigate={setchoice_navigate}  > Next </QuizBtnNext>
          }
          </div>
          </form>
        </div>
        
        )

      }
  
}