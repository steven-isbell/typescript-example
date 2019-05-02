// Basic Types

// string
let fname: string = 'Steven';

// number
let age: number = 26;

// boolean
let isMarried: boolean = true;

// void
function doTheThing(name: string): void {
  console.log(name);
  //   return true;
}

doTheThing('Steven');
// doTheThing() // expected 1 argument, got 0
// doTheThing(5) // invalid type

// undefined
let imUseless: undefined;

// null
let empty: null = null;

// implicit `any` (can be disabled with noImplicitAny in tsconfig)
let whoKnows = 8;

// or explicit `any`
let iCanBeAnything: any = [];
