'use client'
import React from 'react'
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { Noto_Sans } from 'next/font/google'
import { useRouter } from "next/navigation";
// @ts-ignore
import { experimental_useFormStatus as useFormStatus } from 'react-dom'
import { Create_Outline } from '../../../../../func/Generate';
import toast from 'react-hot-toast';


const Noto = Noto_Sans({ subsets: ['cyrillic'] , weight : ['600'] })

type Props = {
  
}

export default function GenerateForm({ }: Props) {   
    const router = useRouter()

  return (
    <form  action={async (data: FormData) => {
              const res = await Create_Outline(data);
              if (res._id) {
                router.push("/course_outline?id=" + res._id);
              } else {
                toast.error('Try again')
              }
            }}
            className="w-full flex flex-col items-center"
          >
            <textarea
              name="question"
              id=""
              cols={50}
              rows={10}
              className="w-full mt-7 border border-[#ADADAD] rounded-[9px] px-10 py-6"
              placeholder="Learn how to optimize your webpages for different screen sizes and platforms."
            ></textarea>
            <BtnStatus/>
          </form>
    
  )
}


function BtnStatus() {
  const { pending } = useFormStatus() 

  return(
    <button  disabled={pending} type='submit'  className={`w-[147px] h-[37px] mt-5 border rounded-[14px] border-[#F48C06] ${Noto.className} text-[14px] text-[#F48C06] bg-[#FFFFFF] flex items-center justify-center gap-x-2 ${pending ?'cursor-not-allowed' : ''}`}> GENERATE  {pending ? <AiOutlineLoading3Quarters className={pending ? 'animate-spin ' : null}/> : ''}</button>
  )
}