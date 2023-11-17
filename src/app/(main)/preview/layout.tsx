import React from 'react'
import localFont from 'next/font/local'
export const NotoTH = localFont({src : '../../../../public/fonts/static/NotoSansThai-Regular.ttf'})

import './style.css'

export default function layout({children} : { children : React.ReactNode}) {
  return (
    <body suppressHydrationWarning={true} className={NotoTH.className}>
        {children}
    </body>
  )
}