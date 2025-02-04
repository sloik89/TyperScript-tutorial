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
interface Person {
    name:string;
    getDetails():string
}
interface DogOwner {
    dogName:string;
    getDogDetails():string
}