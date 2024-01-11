const os=require('os')
//info about current user
const user=os.userInfo()
//console.log(user)

//metohd returns the system uptime in sec
console.log(`the system uptime is ${os.uptime()} seconds`)

const currentos ={
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freemam:os.freemem(),
}
console.log(currentos)

