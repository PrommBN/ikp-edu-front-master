import React from 'react'


export default function QuizHeader({children} : {children : React.ReactNode }) {
  return (
    <div className="w-[1120px] max-h-[100vh] px-[48px] mb-3">
       <h6 className="text-[16px] mt-5"> {children}</h6>
      </div>
  )
}