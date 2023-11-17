"use client";
import React, { useCallback, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {useForm } from "react-hook-form";
import { NotoTH } from "./register/RegisterForm";



export default function MainForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();
  const onSubmit = useCallback((data : any) => {
      console.log(data)
    //   จะเอา data ไปทำอะไรต่อ
    alert(data);
    console.log(data);
  }, []);
  return (
    <main className="w-screen h-[741px] flex justify-center items-center ">
      <div className="absolute 3xl:bottom-[100px]  3xl:left-[190px] destop:left-[-50px] destop:bottom-[100px]">
        <Image
          src={"./Teacher explaining while sitting.svg"}
          width={464}
          height={464}
          alt="Teacher"
        />
      </div>
      <div className="w-[539px] h-full pt-[50px] pb-[67px]  bg-[#FFFFFF] flex flex-col shadow-login rounded-[40px] px-[44px] items-center ">
        <header className="w-[459px] flex justify-between items-start h-[44px]  ">
          <span className="text-[20px] font-normal ">Welcome.. </span>
          <span className="flex flex-col mr-[33px]">
            <h6 className="font-normal text-[16px]">No account?</h6>
            <Link href={"/register"}>
              <h6 className="text-[#F48C06] font-bold text-[16px]">
                {" "}
                Register
              </h6>
            </Link>
          </span>
        </header>
        <div className="w-[162px] h-[75px] text-[55px] font-medium flex self-start  ">
          <h6 className=""> Log in</h6>
        </div>
        <section className="w-[452px] h-[339px] flex flex-col mt-[48px]   ">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="h-[92px] w-full flex flex-col gap-y-[15px] mb-[36px]">
              <label htmlFor="Email" className="text-[16px] font-bold">
                {" "}
                Email
              </label>
              <input
                type="text"
                id=""
                className={`w-full input-field  h-[57px] rounded-[9px] placeholder:text-[14px] placeholder:font-light ${errors.email ?  'input-field error'   :  '' }`}
                placeholder="Example@yahoo.com"
                {...register("email", { required: true })}
              />
              {errors.email ? <p className={`text-red-500 ${NotoTH.className}`}> กรุณากรอกข้อมูลให้ถูกต้อง</p> : null}
            </div>
            <div className="h-[124px] w-full flex flex-col gap-y-[15px]  mb-[36px] relative mt-2">
              <label htmlFor="password" className="text-[16px] font-bold">
                Password
              </label>
              <input
                type="password"
                id="password"
                className={`w-full input-field  h-[57px] rounded-[9px] placeholder:text-[14px] placeholder:font-light ${errors.password ?  'input-field error'   :  '' }`}
                placeholder="*******"
                {...register('password' , { required : true})}
              />
              {errors.password ? ( <p className={`text-red-500 ${NotoTH.className}`}>กรุณากรอกข้อมูลให้ถูกต้อง  </p>)      :  null}

              <Link href={"/forgetpwd"} className="self-end">
                <h6 className=" text-[13px] font-normal text-[#AD3113]">
                  {" "}
                  Forget password
                </h6>{" "}
              </Link>
            </div>
            <button
              className="bg-[#F48C06] w-full h-[54px] rounded-[10px] shadow-btn mt-2"
              disabled={isSubmitting}
            >
              Log in
            </button>
          </form>
        </section>
        <div className="mt-[33px] w-[17px] h-[22px] text-center text-[#ABABAB] text-[16px] font-normal">
          <p> or </p>
        </div>
        <footer className="flex w-[111.26px] h-[48.12px] justify-center items-center gap-x-[19px] mt-5">
          <Image
            height={40.48}
            width={40.48}
            alt="facebook"
            src={"/Facebook.svg"}
          />
          <Image
            height={40.48}
            width={40.48}
            alt="google"
            src={"/google.svg"}
          />
        </footer>
      </div>
    </main>
  );
}
