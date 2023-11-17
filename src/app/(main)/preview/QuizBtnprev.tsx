
import React, {useCallback } from 'react'
import { useResult } from '../../hook/store';



export default function QuizBtnprev({children , choice_navigate , setchoice_navigate} : {children :React.ReactNode ,choice_navigate : any , setchoice_navigate : any  }) {
  const { setNumberofQuizPrevStore} = useResult()
  const PrevQuiz = useCallback(() => {
    if (choice_navigate < 1) {
      return;
    }
    setNumberofQuizPrevStore()
    setchoice_navigate((prev : number) => prev - 1);
  }, [choice_navigate, setchoice_navigate]);
  
 

  return (
    <button onClick={PrevQuiz}  type="button" className="self-end mr-[20px] mb-[20px] w-[147px] h-[37px] rounded-[14px] border-[#F48C06] border-[1px] text-center text-[#F48C06] text-[14px] py-2 hover:bg-[#F48C06] duration-200 hover:text-[white] "> {children}</button>
  )
}