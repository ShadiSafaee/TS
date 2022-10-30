const cat = {
    name: 'Nabaut',
    age: 1,
    breed: 'Persian',
}

const printName = (animal:{name:string, age:number, breed:string})=>{
   return animal.age
}

console.log(printName(cat));

let myFavCar:{model:string, year:number} = {model: 'Honda', year: 2003}

const randomCord = (x: number, y:boolean)=>{
return {x:Math.random(), y:Math.random()}
}