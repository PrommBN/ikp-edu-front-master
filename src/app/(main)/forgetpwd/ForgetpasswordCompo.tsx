'use client'
import React, { useCallback } from 'react'
import Image from "next/image";
import { useForm} from 'react-hook-form'
import { NotoTH } from '../register/RegisterForm';


export default function ForgetpasswordCompo({}) {
        const {register , handleSubmit , formState : { errors , isSubmitting}} = useForm()

        const onSubmit = useCallback((data : any)=>{
                alert(data)
                console.log(data)
        },[])
  return (
    <main className="w-screen h-[741px] flex justify-center items-center ">
        <div className="absolute 3xl:bottom-[100px] 3xl:left-[190px] destop:left-[-50px] destop:bottom-[100px]">
          <Image
            src={"./Teacher explaining while sitting.svg"}
            width={464}
            height={464}
            alt="Teacher"
          />
        </div>
        <div className="w-[539px] h-full pt-[90px] pb-[67px]  bg-[#FFFFFF] flex flex-col shadow-login rounded-[40px] px-[44px] items-center">
          <header className="w-full flex justify-center items-center h-[54px] mb-[18px] ">
            <span className="text-[40px] font-normal "> Forget password? </span>
          </header>
          <div className="w-full h-[22px] text-[16px] font-medium self-start mb-[16px]  text-[#8D8D8D]">
            <h6> Please fill you email to change password</h6>
          </div>
          
          <section className="flex flex-col  items-start w-full gap-y-3 mb-[36px]">
          <form onSubmit={handleSubmit(onSubmit)} className='w-full'>
            <label htmlFor="email" className='text-[16px] font-bold w-full'>
              Email
            </label>
            <input
              type="text"
              id="email"
              className={`w-full input-field  h-[57px] rounded-[9px] placeholder:text-[14px] placeholder:font-light mt-3 ${errors.email ? 'err'  : null}`}
              placeholder="Example@yahoo.com"
              {...register('email' , { required : true} )}
            />
            {errors.email  ? (<p className={`text-red-500 ${NotoTH.className} mt-3`}> กรุณากรอกให้ครบ</p>)   : null}
            <button disabled={isSubmitting} className="w-full h-[54px] bg-[#F48C06] rounded-[10px] btn-reset text-[#FFFFFF] mt-10">
             Reset password
          </button>
            </form>
          </section>
         
         
        </div>
      </main>
  )
}