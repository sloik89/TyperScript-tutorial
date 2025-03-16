function genericFunction<T>(arg:T):T{
    return arg
}
const someStringValue = genericFunction<string>('Hello world')
const someNumberValue = genericFunction<number>(5)

interface GenericInterface<T>{
    value:T;
    getValue:()=>T

}
const genericString :GenericInterface<string> = {
    value:'Hello',
    getValue(){
        return this.value
    }
}
function generateStringArray(length:number,value:string):string[]{
    let result : string[] = []
    result = Array(length).fill(value)
    return result
}
const result = generateStringArray(5,'xx')
console.log(result)

function createArray<T>(length:number,value:T):T[]{
    let result : T[] = []
    result = Array(length).fill(value)
    return result
}
const result1 = createArray<string>(5,'xxx')
console.log(result1)