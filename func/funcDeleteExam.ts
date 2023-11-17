
'use server'

import { revalidatePath } from "next/cache"

export async function funcDeleteExam(id : string){
    try{
            const res = await fetch('http://localhost:3313/exam/'+id,{
                    method : 'DELETE' ,
                    cache : 'no-store' ,
                    headers: {
                            'Content-Type': 'application/json',
                          },
            })
            revalidatePath('/exam')
            return res
    
    }catch(err){
            console.log(err)
    }
}