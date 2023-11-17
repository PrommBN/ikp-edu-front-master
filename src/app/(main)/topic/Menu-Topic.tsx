'use client'
import React, { useCallback, useState } from 'react'




export default function Menu_Topic() {
    const [Topic_data, setTopicData] = useState<string[]>([]); // Specify that Topic_data is an array of strings
  const [colorBtn, setColorBtn] = useState<{ [key: string]: string }>({});
    const [textBtn , setTextBtn] = useState<any>({})
    const storeTopic = useCallback((e : any) => {
      const topicValue = e.currentTarget.value
      if (!Topic_data.includes(topicValue)) {
          setTopicData((prev) => [...prev, topicValue]);
          setColorBtn((prevColors) => ({
              ...prevColors,
              [topicValue]: '#F48C06',
          }));
          setTextBtn((prev : any)=>({
                      ...prev,
                  [topicValue] : '#FFFFFF'
          }) )
      }else{
          setTopicData((prev) => prev.filter(item => item !== topicValue));
          setColorBtn((prevColors) => ({
              ...prevColors,
              [topicValue]: '',
          }));
          setTextBtn((prev : any)=>({
                  ...prev,
                  [topicValue] : ''
          }) )
       }

      return
  }, [Topic_data]);
    const functionNext = useCallback(()=>{
                        if(Topic_data.length >= 1 ) {
                                alert('Do something')
                       }else{
                            alert('Choose at least 1 thing')
                       }
    },[Topic_data.length])
  return (
    <div className='w-[539px] h-full pt-[50px] pb-[67px]  bg-[#FFFFFF] flex flex-col shadow-login rounded-[40px] px-[44px] items-center'>
                <header className='w-[459px] flex justify-between items-start h-[44px] '>
                        <span className='text-[20px] font-normal '> Welcome.. </span>     
                </header>
                <div className='w-[494px] h-[54px] text-[40px] font-medium flex self-start '>
                    <h6 className=''> Which topic do you like..</h6>
                </div>
                <section className='w-[452px] h-[339px] grid grid-cols-2  place-items-center gap-y-[38px] gap-x-[50px] my-[64px] text-[#]'>
                    <button onClick={storeTopic} className='w-[179px] h-[55px] border-[0.5px] border-[#6C6C6C] rounded-[10px] border-solid flex justify-center items-center text-[18px] duration-200 shadow-md' style={{ backgroundColor :colorBtn['Computer'] , color : textBtn['Computer'] }} value={'Computer'}>Computer </button>
                    <button onClick={storeTopic}  className='w-[179px] h-[55px] border-[0.5px] border-[#6C6C6C] rounded-[10px] border-solid flex justify-center items-center text-[18px] duration-200 shadow-md ' value={'Languages'} style={{ backgroundColor :colorBtn['Languages'] , color : textBtn['Languages'] }}>Languages</button>
                    <button onClick={storeTopic}  className='w-[179px] h-[55px] border-[0.5px] border-[#6C6C6C] rounded-[10px] border-solid flex justify-center items-center text-[18px] duration-200 shadow-md ' value={'Design'} style={{ backgroundColor :colorBtn['Design'] , color : textBtn['Design'] }}>Design </button>
                    <button onClick={storeTopic}  className='w-[179px] h-[55px] border-[0.5px] border-[#6C6C6C] rounded-[10px] border-solid flex justify-center items-center text-[18px] duration-200 shadow-md ' value={'Business'} style={{ backgroundColor :colorBtn['Business'] , color : textBtn['Business'] }}>Business</button>      
                    <button onClick={storeTopic}  className='w-[179px] h-[55px] border-[0.5px] border-[#6C6C6C] rounded-[10px] border-solid flex justify-center items-center text-[18px] duration-200 shadow-md ' value={'Music'} style={{ backgroundColor :colorBtn['Music'] , color : textBtn['Music'] }}>Music</button>      
                    <button onClick={storeTopic}   className='w-[179px] h-[55px] border-[0.5px] border-[#6C6C6C] rounded-[10px] border-solid flex justify-center items-center text-[18px] duration-200 shadow-md ' value={'Marketing'}style={{ backgroundColor :colorBtn['Marketing'] , color : textBtn['Marketing'] }} >Marketing</button>      
                    <button onClick={storeTopic}  className='w-[179px] h-[55px] border-[0.5px] border-[#6C6C6C] rounded-[10px] border-solid flex justify-center items-center text-[18px] duration-200 shadow-md ' value={'Finance'} style={{ backgroundColor :colorBtn['Finance'] , color : textBtn['Finance'] }}>Finance</button>      
                    <button onClick={storeTopic}  className='w-[179px] h-[55px] border-[0.5px] border-[#6C6C6C] rounded-[10px] border-solid flex justify-center items-center text-[18px] duration-200 shadow-md ' value={'Lifestyle'} style={{ backgroundColor :colorBtn['Lifestyle'] , color : textBtn['Lifestyle'] }}>Lifestyle</button>      
                </section>
                <button onClick={functionNext} className='w-[179.5px] h-[55px] bg-[#F48C06] rounded-[10px] btn-next text-[#FFFFFF]'>
                    Next
                </button>
        </div>
  )
}