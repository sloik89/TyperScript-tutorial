type Student = {
    name:string;
    study:() =>void
}
type User = {
    name:string;
    login:() =>void
}
type Person = Student | User
const randomPerson = ():Person => {
    return Math.random() > 0.5
            ? {name:'john',study:() => console.log('Studdying')}
            : {name:'mary',study:() => console.log('Logging in')}
}
const person = randomPerson()
console.log(person)
function isStudent(person:Person):person is Student{
    return (person as Student).study !== undefined
}
if(isStudent(person)){
    person.study()
} else {
    person.login()
}

type IncrementAction = {
    amount:number;
    timestamp:number;
    user:string
}
type DecrementAction = {
    amount:number;
    timestamp:number;
    user:string
}
type Action = IncrementAction | DecrementAction

function reducer(state:number,action:Action){}

const newState = reducer(15,{user:'john',amount:5,timestamp:12345})