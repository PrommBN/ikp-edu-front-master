'use server'

import { revalidatePath } from "next/cache"

export async function AddExam(id : string){
    try{
            const res = await fetch('http://localhost:3313/exam/' + id,{
                    method : 'POST' ,
                    body : JSON.stringify({ id : id}),
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