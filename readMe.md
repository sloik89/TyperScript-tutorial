### Intersection type

```ts
type Book = { id: number; name: string; price: number };
const book1: Book = {
  id: 1,
  name: "how to cook a dragon",
  price: 15,
};

const discountedBook: Book & {
  discount: number;
} = {
  id: 3,
  name: "how to tranin horse",
  price: 22,
  discount: 0.15,
};
```

### Interface vs Type Alias

Type

A type alias is a way to give a name to a type. It can represent primitive types, union types, intersection types, tuples, and any other types. Once defines, the alias can be used anywhere in place of the actual types.

```ts
type Person = {
  name: string;
  age: number;
};
```

Interface

An interface is a way to define a contract for a cerain structyre of an object.

```ts
interface Person {
  name: string;
  age: number;
}
```

Key Differences

- Type aliases can represent primitive types, union types, intersection types, tuples, etc,. while interfaces are primarily used to represent the shape of an object.

```ts
type Score = number;
type NumberOrString = number | string;
//   Type alias for literal types
type Direction = "up" | "down" | "left" | "right";
```

- Interfaces can be merged using declaration merging. If you define an interface with the same name more than once, TypeScript will merge their defininition. Type aliases can't merged in this way.
- Interfaces can be implmented by classes, whle type aliases cannot.
- Type aliases can use computed properties, while interface cannot
