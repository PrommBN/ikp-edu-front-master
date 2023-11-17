'use server'

import { revalidatePath } from "next/cache"

export async function AddLectureFunc(id : string){
    try{
            const res = await fetch('http://localhost:3313/outline/learningP',{
                    method : 'POST' ,
                    body : JSON.stringify({ id : id}),
                    headers: {
                            'Content-Type': 'application/json',
                          },
            })
            revalidatePath('/course_outline')
            return res
    
    }catch(err){
            console.log(err)
    }
}