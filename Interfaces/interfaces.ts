// type Point = {
//     x:number,
//     y:number
// }
interface Point {
    x:number,
    y:number
}
const pt: Point = {x:123, y:133}


interface Person {
    readonly id: number;
    firstName: string;
    lastName: string;
    nickname?:string;
}

const thomas: Person = {
    id: 344,
    firstName:'Thomas',
    lastName: 'Hardy',
    nickname: 'Tom'
}
interface Cat {
name:string;
age:number;
mewo():string
}

const kitty:Cat = {
   name: 'Shadi',
   age:4,
   mewo(){
    return 'MEWWWWOOOO'
}
}

interface People {
    name: string
}
interface Employee {
    readonly id: number;
}
interface Engineer extends People, Employee {
    level: string,
    languages: string[]
}

const eng1:Engineer = {
name: 'Asghar',
id: 3232,
level: 'B',
languages: ['JS', 'TS']
}

