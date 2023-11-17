'use server'
export async function Create_Outline(data : FormData) {
    try {
      const question = data.get('question')?.toString()
      const res = await fetch('http://localhost:3313/api/message', {
        method: 'POST',
        cache : 'no-store' ,
        body : JSON.stringify({ question : question}),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const dataRes = await res.json();
      return dataRes
      
    } catch (err) {
      console.log('err', err);
      return err
    }
  }
  


  export async function GenerateQuizfunc(title : string) {
    try {
      const url = 'http://localhost:3313/addq'
      const res = await fetch(url, {
        method: 'POST',
        cache : 'no-store' ,
        body : JSON.stringify({ question : String(title) , lecture_id : String(2)}),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await res.json();
      console.log(data, 'log_response');
      return data;
    } catch (err) {
      console.log('err', err);
      return err
    }
  }
  
  