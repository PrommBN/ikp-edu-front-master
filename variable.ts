import { useMemo } from "react";




export const  Variable = ()=>{
        const Quiz_Data = useMemo(()=>{

                const onechap = [
                    { 
                        title : 'What is the primary goal of machine learning? 1' ,
                        choice1 : 'To mimic human intelligence' ,
                        choice2 : 'To automate repetitive tasks' ,
                        choice3 : 'To find patterns in data and make predictions' ,
                        choice4 : 'To perform complex calculations' 
            },
            { 
                title : 'What is the primary goal of machine learning?  2' ,
                choice1 : 'To mimic human intelligence 2' ,
                choice2 : 'To automate repetitive tasks 2' ,
                choice3 : 'To find patterns in data and make predictions 2' ,
                choice4 : 'To perform complex calculations 2' 
    },
    { 
        title : 'What is the primary goal of machine learning? 3 ' ,
        choice1 : 'To mimic human intelligence 3' ,
        choice2 : 'To automate repetitive tasks 3' ,
        choice3 : 'To find patterns in data and make predictions 3' ,
        choice4 : 'To perform complex calculations 3' 
},
{ 
    title : 'What is the primary goal of machine learning?  4' ,
    choice1 : 'To mimic human intelligence 4' ,
    choice2 : 'To automate repetitive tasks 4' ,
    choice3 : 'To find patterns in data and make predictions 4' ,
    choice4 : 'To perform complex calculations 4' 
},
{ 
    title : 'What is the primary goal of machine learning? 5' ,
    choice1 : 'To mimic human intelligence5' ,
    choice2 : 'To automate repetitive tasks5' ,
    choice3 : 'To find patterns in data and make predictions5' ,
    choice4 : 'To perform complex calculations5' 
},

        ]
            return onechap

        }
        ,[])

        return Quiz_Data
}