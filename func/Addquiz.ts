'use server'

import { revalidatePath } from "next/cache"


export async function AddquizFunc(id : string){
        try{
                await fetch('http://localhost:3313/addq',{
                        method : 'POST' ,
                        body : JSON.stringify({ id : id}),
                        headers: {
                                'Content-Type': 'application/json',
                              },
                })
                     revalidatePath('/addquiz')
        }catch(err){
                console.log(err)
        }
}
export async function funcDeletequiz(deleteId : any) {
        try {
            const url = `http://localhost:3313/addq/${deleteId}`;
    
            await fetch(url, {
                method: 'DELETE',
                headers: {
                        'Content-Type': 'application/json',
                      },
                cache : 'no-store'
            });
    
            revalidatePath('/addquiz')
    
        } catch (err) {
            console.log(err);
        }
    }
    