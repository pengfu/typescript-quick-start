function sum(x:number,y:number):number{
    return x+y
}

const sum2 :(x:number,y:number)=>number = sum


// 类型别名
type PlusType = (x:number,y:number)=>number
function sum3(x:number,y:number):number{
    return x+y
}

const sum4 :PlusType = sum3

type Func = () => string
type Uni = Func | string
function getName(n:Uni):string{
    if(typeof n === 'string') {
        return n
    }else {
        return n()
    }
}

// type assertion


// 声明文件

jQuery()