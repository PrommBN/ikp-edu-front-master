'use client'
import React from "react";
import Image from "next/image";
import { LearningPathType } from "@/app/types";
import { AddquizFunc, funcDeletequiz } from "../../../../../func/Addquiz";

type Props ={ 
  lecture : any
  dataQuiz : LearningPathType
  id : string
}




export default function Coursecompo({lecture , dataQuiz , id} : Props) {
  return (
    <div className={`flex flex-col max-h-[5000px]   ` }>
      <div className={` duration-200 px-6 border-[#E9EAF0] border-[0.5px] bg-[#FFFFFF] max-h-[4000px] py-5 rounded-[14px]`}>
      <div   className={` rounded-t-[14px] flex justify-between items-center gap-x-10 px-5 h-[62px] w-full h-f `}>
          <p className=""> {lecture}</p>
         <button className="w-[147px] h-[37px] px-4 py-1    border border-[#F48C06] text-[#F48C06] rounded-[14px]" type="button"> Generate all</button>
      </div>
       {
        dataQuiz ? 
        dataQuiz?.addq?.map((data : any,index : number)=>{
              return <QuizAdd indexs={index} idInput={data} key={'in' + index}> Question {'0'+(index+1)} </QuizAdd>
        })
        : null
       }
        <button  type="button" className="mt-9 w-full bg-addquiz h-[48px] rounded-[14px] text-[#F48C06] " onClick={()=>AddquizFunc(id)}>Add Quiz</button>
      </div>
    </div>
  );
}

function QuizAdd({ children , idInput ,indexs} : { children : React.ReactNode , idInput : any , indexs : number}) {

  return (
    <div className="px-[40px] border-[#E9EAF0]">
           <BoxQuiz>
        <HeadQuiz deleteid={idInput}>  {children}</HeadQuiz>
         <QuizAddContent>
       <InputQuiz  value={false} nameRadio={'correct'+indexs } idInput={'idinput'+indexs+idInput._id} placeHolderInput={'Choice 01'} nameInput={'input'+indexs} />
       <InputQuiz  value={false} nameRadio={'correct'+indexs} idInput={'idinput'+(indexs+1)+idInput._id} placeHolderInput={'Choice 01'} nameInput={'input'+indexs} />
       <InputQuiz  value={false} nameRadio={'correct'+indexs} idInput={'idinput'+(indexs+2)+idInput._id} placeHolderInput={'Choice 01'} nameInput={'input'+indexs} />
       <InputQuiz  value={false} nameRadio={'correct'+indexs} idInput={'idinput'+(indexs+3)+idInput._id} placeHolderInput={'Choice 01'} nameInput={'input'+indexs} />
          </QuizAddContent>
          </BoxQuiz>
          
     
    </div>
  );
}


function InputQuiz({ nameRadio , idInput ,placeHolderInput,nameInput,value } : { nameRadio : any , idInput : any , placeHolderInput : any , nameInput : any , value : any}){

  return(
    <div className="flex items-center gap-x-3 ">
    <label htmlFor={idInput} className="radio_label ">
      <input type="radio" id={idInput} className="radio" name={nameRadio} value={String(value+1)}/>
      <span className="checker"></span>
    </label>
    <input type="text" className="border rounded-[12px] w-full px-3 py-2  focus:border-orange-300 focus:border-[1px] focus:outline-none" placeholder={placeHolderInput} name={nameInput}/>
  </div>
  )
}

function BoxQuiz({children} : { children : React.ReactNode}){
  return(
    <div className="flex flex-col justify-center mt-11 border-[#E9EAF0]">
      {children}
   </div>
  )
}

function HeadQuiz({children ,deleteid} : { children : React.ReactNode , deleteid : any }){
  return(
    <div className="flex w-full justify-between ">
       <div className="flex gap-x-2">
       <h3 className="text-[#2F327D]"> {children}:</h3>
       <input type="text" className="border px-2" placeholder="Question"   />
       </div>
        <div className="flex gap-x-4  ">
           <Image className="cursor-pointer duration-75 hover:animate-spin" alt="gen" width={24} height={24} src={'/Synchronize.svg'} />
           <Image className="cursor-pointer duration-200 hover:scale-110" onClick={()=> funcDeletequiz(deleteid)} alt="pencil" width={24} height={24} src={'/Trash.svg'} />
        </div>
  </div>
  )
}

function QuizAddContent({children} : {children : React.ReactNode}){
    return(
      <div className="flex flex-col gap-y-3 justify-center mt-5">
      {children}
      </div>
    )

}