
const square = (num:number):number=>{
    return num * num
}


const error = (err: string): never =>{
    throw new Error('msg')
}
console.log('hi');     