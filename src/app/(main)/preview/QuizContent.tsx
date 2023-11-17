import React from 'react'



export default function QuizContent({children} : { children : React.ReactNode}) {
  return (
    <ul className="list-disc ml-[30px]">
            {children}
    </ul>
  )
}