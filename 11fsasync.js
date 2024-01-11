const {readFile , writeFile}=require('fs')
console.log('start')

readFile('./content/first.txt','utf8',(err,result)=>{
    if(err){
        console.log(err)
        return
    }
    const first =result;
    readFile('./content/second.txt','utf8',(err,reuslt)=>{
       
            if(err){
                console.log(err)
                return
            }
            const second =result;
            writeFile('./content/third-async.txt',
            `here is the third file with ${first},${second}`,(err,result=>
                {
             if(err){
                console.log(err)
                return;
             }
             console.log(result)  

                }
            
                ))
                console.log('done')

    })
})

console.log('next')