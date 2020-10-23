// generics

function echo<T>(arg:T):T {
    return arg
}

const result1 = echo('helo')

function swap<T,U>(tuple:[T,U]):[U,T] {
    return [tuple[1],tuple[0]]
}
const result2 = swap([11,false])


function echoWithArr<T>(arg:T[]):T[]{
    console.log(arg.length)
    return arg
}


interface IWithLength {
    length: number
}
function echoWithLength<T extends IWithLength>(arg:T):T{
    console.log(arg.length)
    return arg
}
const obj = echoWithLength([1,24,4])
const obj2 = echoWithLength({length:22})

// error
const number = echoWithLength(3)


class Queue<T> {
    private data = []
    push(item:T) {
        return this.data.push(item)
    }
    pop():T {
        return this.data.shift()
    }
}

const q = new Queue<number>()
q.push(1)

// error
q.push('str')

const q2 = new Queue<string>()
q2.push('335')



interface KeyPair<T,U>{
    key: T;
    value:U;
}
let kp1:KeyPair<number,string> = {key:1,value:'222'}
let kp2:KeyPair<string,number> = {key:'1',value:22}


let arr:number[] = [1,2,34]

// same with up
let arr2: Array<number> = [22,45, 'dd']


interface IPlus<T> {
    (a:T,b:T):T
}

function plus(a:number, b:number):number {
    return a + b;
}
function connect(a:string,b:string):string {
    return a + b
}
const a:IPlus<number> = plus
const b:IPlus<string> = connect