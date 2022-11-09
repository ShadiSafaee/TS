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

