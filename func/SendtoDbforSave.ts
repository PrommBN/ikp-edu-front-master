'use server'
export async function SendtoDbforSave(data : any) {
    try {
      const url = 'http://localhost:3313/outline/add'
      const res =await fetch(url, {
        method: 'POST',
        cache : 'no-store' ,
        body : JSON.stringify({ dataCourse : data}),
        headers: {
            'Content-Type': 'application/json', 
          },
      });
      return await res.json()

    } catch (err) {
      console.log('err', err);
      return err
    }
  }
  
 