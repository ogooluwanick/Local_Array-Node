let fs=require("fs")
let concat=require("concat-stream")


let streamFileRead = fs.createReadStream('test.txt', 'utf-8')

streamFileRead.on("error",()=>{
        console.log(error)
        process.exit(1)
})

let addAndManageChunksData = concat( (totalText) =>{
        console.log('There are ' + totalText.split(' ').length + ' words in the file')
        console.log(totalText.split(' '))
      }) // returns a writable stream
      
      streamFileRead.pipe(addAndManageChunksData) ;
