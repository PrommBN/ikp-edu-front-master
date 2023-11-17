import React from 'react'
import Image from 'next/image'


export default function Navbarofquiz() {
  return (
    <nav className='flex justify-between grow-0 basis-auto'>
            <div className='flex justify-between gap-x-[44px] items-center '>
                    <div>
                            <Image alt='logo' width={82} height={62} src={'/logo.svg'}></Image>
                    </div>
                    <div className='w-[711px] h-[24px]'>
                        <ul className='list-none flex gap-x-[40px]'>
                            <li>HOME </li>
                            <li> COURSE</li>
                            <li> MY COURSE</li>
                            <li> CERTIFICATE</li>
                            <li> LEARNING PATH</li>
                            <li> FAQs </li>
                        </ul>

                    </div>

            </div>
            <div className=''>
                    <Image alt='photo' width={56} height={56} src={'/profile.svg'}></Image>

            </div>

    </nav>
  )
}