let isDone:boolean = false
let age: number = 0b1111;
let name1: string = 'sss'
let u:undefined = undefined;
let n:null = null

let notSure: any = 4
notSure = true

let numberOrString :number | string
numberOrString = 12
numberOrString = '234'

let arrayOfNumbers :number[] = [12,343,44]
arrayOfNumbers.push(5)

function test() {
    console.log(arguments)
}

// 元组
let user: [string, number] = ['23', 3]

// interface
interface Person {
    readonly id:number;
    name: string;
    age: number;
    gender?:string
}

let tom:Person = {
    id:1111,
    name: 'tom',
    age: 20,
    gender:'male'
}
tom.id = '222' // error

// function
function add(x:number, y:number,z?:number):number {
    if(typeof z === 'number') {
        return x+y+z
    }else {
        return x + y
    }
}

let result = add(2,3,4)

const add2:(x:number,y:number,z?:number)=>number = add;