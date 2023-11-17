"use client";
import React, { useCallback, useState } from "react";
import Image from "next/image";
import localFont from "next/font/local";
import { FieldValues, useForm } from "react-hook-form";
export const NotoTH = localFont({
  src: "../../../../public/fonts/static/NotoSansThai-Regular.ttf",
});



export default function RegisterForm() {
  const [Namevalid, setNamevalid] = useState(false);
  const [emailValid, setemailValid] = useState(false);
  const [passwordvalid, setPasswordvalid] = useState(false);
  const [repassvalid, setRepassvalid] = useState(false);
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors, isSubmitting },
  } = useForm();
  const onSubmit = (data : any) => {
    alert(data);
    console.log(data);
  };

  

  const handleName = useCallback((event : any) => {
    const name = event.target.value;
    setNamevalid(name.length >= 8);
  }, []);

  const emailhandle = useCallback((event : any )=>{
      const email = event.target.value
      setemailValid(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/.test(email))
  },[])
  
  const passwordhandle = useCallback((event : any )=>{
      const pwd  = event.target.value
      setPasswordvalid(pwd.length >= 8 )
  },[])
  const resswordhandle = useCallback((event : any)=>{
    const re  = event.target.value
    
      setRepassvalid(re.length >=8)
},[])
  
  return (
    <main className="w-screen h-[1400px] flex justify-center items-center ">
      <div className="absolute 3xl:bottom-[0px] 3xl:left-[190px] destop:left-[-50px] destop:bottom-[0px]">
        <Image
          src={"./Teacher explaining while sitting.svg"}
          width={464}
          height={464}
          alt="Teacher"
        />
      </div>
      <div className="w-[539px] h-[1200px] py-[90px]   bg-[#FFFFFF] flex flex-col shadow-login rounded-[40px] px-[44px] items-center">
        <div className="w-[162px] h-[75px] text-[40px] font-medium flex  ">
          <h6 className=""> Register</h6>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <section className="w-[452px] h-[339px] flex flex-col pt-[10px]   ">
            <div className="h-[92px] w-full flex flex-col gap-y-[7px] mb-[36px]">
              <label htmlFor={"Name-Surname"} className="text-[16px] font-bold">
                {" "}
                Name-Surname
              </label>
              <input
                type="text"
                id={"Name-Surname"}
                className={`w-full input-field  h-[57px] rounded-[9px] placeholder:text-[14px] placeholder:font-light  ${errors.NameSurname ? 'input-field error' : (Namevalid ? 'input-field valid' :  '')}`}
                placeholder={"Example Example"}
                {...register("NameSurname", { required: true, minLength: 8 })}
                onChange={handleName}
              />
              {errors.NameSurname && (
                  <p className={`text-red-500 ${NotoTH.className}`}> กรุณากรอกข้อมูลให้ครบ 8 ตัว</p>
              ) }
            </div>
            <div className="h-[92px] w-full flex flex-col gap-y-[7px] mb-[36px]">
              <label htmlFor={"Email"} className="text-[16px] font-bold">
                {" "}
                Email
              </label>
              <input
                type="text"
                id={"Email"}
                className={`w-full input-field  h-[57px] rounded-[9px] placeholder:text-[14px] placeholder:font-light  ${errors.email ? 'input-field error' : (emailValid ? 'input-field valid' :  '')}`}
                placeholder={"Example@yahoo.com"}
                {...register('email'  , { required : true , pattern: {
                  value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/,
                  message: 'รูปแบบ Email ไม่ถูกต้อง'
                }})}
                onChange={emailhandle}
              />
              {errors.email && (
                     <p className={`text-red-500 ${NotoTH.className}`}>{errors?.email?.message?.toString( ) ? errors?.email?.message?.toString( ) : 'กรุณากรอกข้อมูลให้ครบ'}</p>
              ) }
            </div>
            <div className="h-[92px] w-full flex flex-col gap-y-[7px] mb-[36px]">
              <label htmlFor={"Password"} className="text-[16px] font-bold">
                {" "}
                Password
              </label>
              <input
                type="password"
                id={"Password"}
                className={`w-full input-field  h-[57px] rounded-[9px] placeholder:text-[14px] placeholder:font-light  ${errors.password ? 'input-field error' : ( passwordvalid ?  'input-field valid': '' )}`}
                placeholder={"********"}
                {...register('password', { required : true , minLength  : 8 })}
                onChange={passwordhandle}
              />
              {errors.password && (
                     <p className={`text-red-500 ${NotoTH.className}`}>กรุณากรอกข้อมูลให้ครบ 8 ตัวอักษร </p>
              ) }
            </div>
            <div className="h-[92px] w-full flex flex-col gap-y-[7px] mb-[36px]">
              <label
                htmlFor={"Confirm Password"}
                className="text-[16px] font-bold"
              >
                {" "}
                Confirm Password
              </label>
              <input
                type="password"
                id={"Confirm Password"}
                className={`w-full input-field  h-[57px] rounded-[9px] placeholder:text-[14px] placeholder:font-light  ${errors.repassword ? 'input-field error' : ( repassvalid ?  'input-field valid': '' )}`}
                placeholder={"********"}
                {...register('repassword', {
                  required: true,
                  minLength: 8,
                  validate: (Repass) => { return Repass === getValues('password') || 'รหัสผ่านไม่ตรงกัน'},
                })}
                onChange={resswordhandle}
               
              />
              {errors.repassword && (
                     <p className={`text-red-500 ${NotoTH.className}`}>{ errors.repassword.message?.toString() ?  errors.repassword.message.toString()  : 'กรุณากรอกข้อมูลให้ครบ 8 ตัวอักษร'  }</p>
              )}
            </div>
            <div className="flex w-full">
              <div className="w-[203px] h-[92px]">
                <label htmlFor="" className="">
                  Date of birth
                </label>
                <div className="w-[153px] h-[56px] mt-4 bg-[#FFFFFF] border-[#ADADAD] border-[1px] border-solid rounded-[9px] flex justify-center items-center px-2">
                  <input
                    type="date"
                    className={`${NotoTH.className} dateForm`}
                    {...register('date'  , { required : true})}
                  />
                </div>
              </div>
              <div className="flex justify-center items-center flex-col">
                <label htmlFor="" className="self-start">
                  Gender
                </label>
                <div className=" flex flex-wrap  mt-4 gap-x-6 gap-y-2">
                  <div className="flex items-center gap-x-3 relative">
                    <input
                      type="radio"
                      id="male"
                      className="radio-input cursor-pointer"
                      value={'male'}
                      {...register('sex' , { required : true})}
                    />
                    <label htmlFor="male" className="custom-radio">
                      Male
                      <span className="checker"> </span>
                    </label>
                   
                  </div>
                  <div className="flex items-center gap-x-3 relative">
                    <input
                      type="radio"
                      id="female"
                      className="radio-input cursor-pointer"
                      value={'female'}
                      {...register('sex' , { required : true})}
                     

                    />
                    <label htmlFor="female" className="custom-radio">
                      Female
                      <span className="checker"> </span>
                    </label>
                    
                  </div>
                  <div className="flex items-center gap-x-3 relative">
                    <input
                      type="radio"
                      id="other"
                      className="radio-input cursor-pointer"
                      value={'other'}
                      {...register('sex' , { required : true})}
                    />
                    <label htmlFor="other" className="custom-radio">
                      Prefer not to say
                      <span className="checker"> </span>
                    </label>
                    
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div className="w-[451px] h-[92px] pt-5 gap-y-[15px] flex flex-col mt-[260px] ">
            <label htmlFor="">Occupation</label>
            <input
              type="text"
              className="w-full input-field  h-[57px] rounded-[9px] placeholder:text-[14px] placeholder:font-light"
              placeholder={"fill in your occupation"}
              {...register('Occupation' , {required : true})}
            />
          </div>
          <div className=" w-full h-[44px] flex justify-center items-center mt-5 ">
            <p
              className={`text-center font-normal text-[16px]  mt-[50px] ${NotoTH.className}`}
            >
              {" "}
              โดยการเปิดบัญชีท่านรับทราบและตกลงตาม ข้อกำหนด <br />{" "}
              และเงื่อนไขในการใช้เว็บไซต์และ แอปพลิเคชัน เพื่อที่จะใช้บริการ
            </p>
          </div>
          <button
            type="submit"
            className={`mt-[70px] w-full h-[54px] bg-[#F48C06] bgbtn-reset rounded-[10px] text-[#FFFFFF] ${NotoTH.className}`}
            disabled={isSubmitting}
          >
            Register
          </button>
        </form>
      </div>
    </main>
  );
}

