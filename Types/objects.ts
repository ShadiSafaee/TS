const cat = {
    name: 'Nabaut',
    age: 1,
    breed: 'Persian',
}

const printName = (animal:{name:string, age:number, breed:string})=>{
   return animal.age
}

console.log(printName(cat));