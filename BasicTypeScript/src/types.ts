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