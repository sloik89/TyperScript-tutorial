type Book = {id:number; name:string; price:number}
const book1:Book = {
    id:1,
    name:"how to cook a dragon",
    price:15
}

const discountedBook: Book & {
    discount:number
} = {
    id:3,
    name:'how to tranin horse',
    price:22,
    discount:0.15
}
// Type assertion
let someValue: any = 'some value'
const example1 = (someValue as string).length
console.log(example1)
// JSON PARSE
let birdString = '{"name":"Eagle"}'
let dogString = '{"breed":"Podle"}'
let birdObject = JSON.parse(birdString)
//  Type unkown
let unknownValue :unknown
unknownValue = 'hellow'
unknownValue = [2,34,3]
unknownValue = 234324
if(typeof unknownValue === 'number'){
    console.log(unknownValue.toFixed(2))
}
function runSomeCode(){
    let random = Math.random()
    if(random < 0.5){
        throw new Error('there was error....')
    } else {
        throw 'some error' 

    }
}
try{
    runSomeCode()
} catch(err){
    if(err instanceof Error){
        console.log(err.message)
    }
    else {
        console.log(err)
    }
}
enum Color {
    red,blue
}
function getColor(color:Color){
    switch(color){
        case Color.red:
            return 'Red'
        case Color.blue:
            return 'Blue'
    }
}
// Type Guard
type ValueType = string | number | boolean
let value :ValueType
const random = Math.random()
value = random < 0.33 ? 'Hello' : random <0.66 ? 123.456 : true
function checkValue(value:ValueType){
    if(typeof value === 'string'){
        console.log(value.toLocaleLowerCase())
        return
    }
    if(typeof value === 'number'){
        console.log(value.toFixed(2))
        return
    }
    console.log(`boolean : ${value}`)

}
type Dog = {type:'dog';name:string;bark:()=>void}
type Cat = {type:'cat';name:string;meow:()=>void}
type Animal = Dog | Cat
function makeSound(animal:Animal){
    if(animal.type === 'dog'){
        animal.bark()
    }else{
        animal.meow()
    }
    }
    makeSound({type:'dog',name:'xx',bark:()=>console.log('bark')})
    
    function makeSound1(animal:Animal){
        if('bark' in animal){
            animal.bark()
        }else{
            animal.meow()
        }
        }
        makeSound1({type:'dog',name:'xx',bark:()=>console.log('bark')})

        function printLength(str:null | undefined | string){
            if(str){
                console.log(str.length)
            } else {
                console.log('no stgring provided')
            }
        }
        try {
            throw new Error('This is an error')
        }catch(err){
            if(err instanceof Error){
                console.log(err.message)
            } else {
                console.log('unknown error...')
            }
        }