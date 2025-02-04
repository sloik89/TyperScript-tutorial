interface Book {
    readonly isbn:number;
    title:string;
    author:string;
    genre?:string;
    printAuthor():void;
    printTitle(message:string):string
}
const deepWork:Book = {
    isbn:123,
    title:'deep work',
    author:'cal newport',
    genre:'self-help',
    printAuthor(){
        console.log(this.author)
    },
    printTitle(message){
        return `random message ${message}`
    }
}
// extends
interface Person {
    name:string;
    getDetails():string
}
interface DogOwner {
    dogName:string;
    getDogDetails():string
}
interface Person {
    age:number
}
interface Employee extends Person{
    employeeId:number
}
const person:Person = {
    name:"seba",
    getDetails(){
        return 'string'
    },
    age:56
}
const employee :Employee= {
    employeeId:6666,
    age:36,
    name:'seba',
    getDetails(){
        return 'fff'
    }
}