class Animal {
    readonly color: string;
    public name: string;
    static category:number = 2;
    constructor(name:string) {
        this.name = name
    }
    run() {
        return `${this.name} is running`
    }
}

const snake = new Animal('lily')
console.log(snake.run())
console.log(snake.name)

class Cat extends Animal {
    constructor(name){
        super(name)
        console.log(this.name)
    }
    run() {
        return `${this.name} is running`
    }
}

const maomao = new Cat('mamao')
console.log(maomao.run())


// interface
interface Radio {
    switchRadio(triggerL: boolean):void;
}
interface Battery {
    checkBatteryStatus();
}


class Car implements Radio,Battery {
    switchRadio(){}
    checkBatteryStatus(){};
}