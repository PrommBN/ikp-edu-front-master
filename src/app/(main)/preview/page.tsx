import React from "react";
import Image from "next/image";
import { Poppins, Inter } from "next/font/google";
import QuizComponent from "./QuizComponent";
import Navbarofquiz from './Navbarofquiz'
import QuizHeader from "./QuizHeader";
import QuizContent from "./QuizContent";
import QuizList from "./QuizList";
import QuizChiose from "./QuizChiose";
import QuizcoverHead from "./QuizcoverHead";
import localFont from 'next/font/local'
import { PreviewType } from "@/app/types";
export const poppins = Poppins({ weight: "700", subsets: ["latin"] });
export const inter = Inter({ weight: '700', subsets: ['latin'] })
export const Notofont = localFont({ src: '../../../../public/fonts/static/NotoSansThai-Regular.ttf' })

type Props = {
  searchParams: { [key: string]: string | string[] | undefined }
}






export default async function Page({ searchParams }: Props) {
  const { id } = searchParams
  let res = await fetch('http://localhost:3313/outline/preview', {
    body: JSON.stringify({ id: id }),
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    cache: 'no-store'
  })
  const preview: PreviewType = await res.json()
  return (
    <>
      <Navbarofquiz />
      <main>
        <section className={`mt-[45px] flex flex-col justify-center text-[16px] text-[#696984] `}>
          <h6 className={`text-[16px] font-normal ${Notofont.className}`}>
            ไอทีและซอฟต์แวร์ {">"} Machine learning
          </h6>
          <h1 className={`${poppins.className} text-[40px] text-[#2F327D]`}>
            Introduction to Machine Learning{" "}
          </h1>
          <div className="flex w-full h-[28px] justify-start items-center gap-x-[25px]">
            <div className=" flex justify-start items-center gap-x-2">
              <Image alt="star" width={19.5} height={18.76} src={"/star.svg"} />
              4.2
            </div>
            <div className="flex justify-start items-center">
              <Image alt="user" width={24} height={24} src={"/Users.svg"} /> 1356
            </div>
            <p className={`${Notofont.className}`}> By Mr.John Stark</p>
            <p className={`${Notofont.className}`}>เผยแพร่เมื่อ 12 มิถุนายน 2566</p>
          </div>
        </section>
        <section className="w-full h-[42px] mt-[35px] mb-[40px]">
          <ul className="w-full list-none flex justify-around    ">
            <li className="grow text-center   h-full  cursor-pointer border-b-2 pb-3  focus:border-[#F48C06]"> Overview</li>
            <li className="grow text-center   h-full cursor-pointer border-b-2 pb-3"> Curriculum</li>
            <li className="grow text-center  h-full cursor-pointer border-b-2  pb-3"> Requirements</li>
            <li className="grow text-center  h-full cursor-pointer border-b-2  pb-3"> Course Creator</li>
          </ul>

        </section>

        <section className="w-[1105px] h-[206px] mb-[40px] ">
          <h4 className="font-semibold text-[24px] text-[#2F327D]">Overview </h4>
          <p className="text-[14px] block text-start">
            Welcome to the `&quot;`Introduction to Machine Learning`&quot;`
            course! In this comprehensive journey, you will delve into the
            fascinating world of machine learning and gain a strong foundation in
            understanding its concepts, techniques, and applications. Whether
            you`&#39;`re a curious beginner or an aspiring data scientist, this
            course is designed to empower you with the skills needed to embark on
            your machine learning adventure. <br />
            <br /> Machine learning is revolutionizing industries, from healthcare
            and finance to entertainment and beyond. This course is your gateway
            to unlocking the potential of machine learning and harnessing its
            power for real-world problem-solving. You`&#39;`ll explore the entire
            machine learning lifecycle, from data preparation and model training
            to evaluation and deployment. Each step is carefully crafted to
            provide you with practical knowledge that can be applied immediately.
          </p>
        </section>

        <section className="w-[1120] max-h-[10000px]  ">
          <div className="flex justify-between w-full items-center mb-[24px]">
            <h6 className="text-[24px] font-semibold text-[#2F327D]">
              Learning Path{" "}
            </h6>
            <h6 className="text-[16px] font-semibold text-[#23BD33]">
              เรียนไปแล้ว 12%{" "}
            </h6>
          </div>
          {preview &&
            preview.lectureDetails.map((data , index:number) => {
              return <>
                <QuizComponent unit={`บทที่ ${index+1}`} detail={data.lectureTitle} Chapter={`Chapter ${index+1} Quiz`}>
                  <QuizcoverHead>
                    <QuizHeader>Objectives : </QuizHeader>
                    <QuizContent>
                      <QuizList>Definition of machine learning and its applications. </QuizList>
                      <QuizList> Understanding supervised, unsupervised, and reinforcement learning.</QuizList>
                      <QuizList> The role of data in machine learning.</QuizList>
                    </QuizContent>
                    <QuizHeader> Recommended Resources: </QuizHeader>
                    <QuizContent>
                      <QuizList>Machine Learning by Stanford University (Coursera) - Provides a solid foundation in machine learning concepts by Andrew Ng. </QuizList>
                      <QuizList>Machine Learning Mastery - Offers tutorials and practical tips on machine learning techniques.</QuizList>
                    </QuizContent>
                  </QuizcoverHead>
                  <hr className="w-full mb-5 mt-5" />
                  <QuizChiose title={"Chapter 1 Quiz"} numberQuiz={"Quiz 1/5"} unique={'1'} preview={data} />
                </QuizComponent>
              </>

            })
          }
          
                         {/* <QuizComponent unit={`บทที่ ${index+1}`} detail={exam.question_text} Chapter={`Chapter ${index+1} Quiz`}>
                  <QuizcoverHead>
                    <QuizHeader>Objectives : </QuizHeader>
                    <QuizContent>
                      <QuizList>Definition of machine learning and its applications. </QuizList>
                      <QuizList> Understanding supervised, unsupervised, and reinforcement learning.</QuizList>
                      <QuizList> The role of data in machine learning.</QuizList>
                    </QuizContent>
                    <QuizHeader> Recommended Resources: </QuizHeader>
                    <QuizContent>
                      <QuizList>Machine Learning by Stanford University (Coursera) - Provides a solid foundation in machine learning concepts by Andrew Ng. </QuizList>
                      <QuizList>Machine Learning Mastery - Offers tutorials and practical tips on machine learning techniques.</QuizList>
                    </QuizContent>
                  </QuizcoverHead>
                  <hr className="w-full mb-5 mt-5" />
                  <QuizChiose title={"Chapter 1 Quiz"} numberQuiz={"Quiz 1/5"} unique={'1'} exam={exam} />
                </QuizComponent> */}
              
              
          

          

        

        </section>
      </main>
    </>

  );
}
