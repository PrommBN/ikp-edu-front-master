import Navbar from '@/app/components/Navbar'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import './style.css'
import Menu_Topic from './Menu-Topic'


type Props = {}

export default function Topic({}: Props) {
  return (
    <>
    <Navbar/>
    <main className='w-screen h-[741px] flex justify-center items-center '>
    <div className='absolute 3xl:bottom-[100px] 3xl:left-[190px]  destop:left-[-50px] destop:bottom-[100px]    '>
            <Image src={'./Teacher explaining while sitting.svg'} width={464} height={464} alt='Teacher'/>
    </div>
      <Menu_Topic/>
    </main>
    
    </>
  )
}



