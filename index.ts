/********  Basic Types *********/

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

// Array

const arrayOfStrings: string[] = ['Hello', 'World', 'Bye'];

// arrayOfStrings.push(7) // typeError

const arrayOfAnything = [];

// arrayOfAnything.push(1, 'World', {name: 'Jeff'}); // can't change const intialization, valid

const myPromise: Promise<boolean> = new Promise(function(resolve, reject) {
  resolve(true);
});

/********  Custom Types *********/

// A mix of required and optional properties
type Attendee = {
  fname: string;
  lname: string;
  age?: number;
  languages: string[];
  contactInfo?: {
    email?: string;
    phone?: string;
  };
};

// Composing types
type Meetup = {
  attendees: Attendee[];
  location?: string;
  attendeeCount: number;
};

// Missing Required Property

// const meetupList: Meetup[] = [
//   {
//     attendees: [
//       {
//         fname: 'Steven',
//         languages: ['JavaScript']
//       }
//     ],
//     attendeeCount: 58
//   }
// ];

const meetupList: Meetup[] = [
  {
    attendees: [
      {
        fname: 'Steven',
        lname: 'Isbell',
        languages: ['JavaScript']
      }
    ],
    attendeeCount: 58
  }
];

/********  Union Types *********/

// When you don't want to use any, but could have multiple types as a value

// create optional properties
let optionalProp: string | undefined;

optionalProp = 'Here I am';

// handle method output
const users = ['Steven', 'Spencer', 'Jordan'];

let selectedUser: string | undefined = users.find(user => user === 'Jeff');

// handle various inputs
function square(num: string | number): number | string {
  if (typeof num === 'string') {
    let parsed: number = parseInt(num);
    if (isNaN(parsed)) return 'Invalid String Argument';
    // potential mistake one could make ignoring your parsed variable
    // return num ** 2
    return parsed ** 2;
  }
  return num ** 2;
}

/********  Interfaces *********/

// Extending from other interfaces
interface Animal {
  type: string;
}
interface Horse extends Animal {
  breed: string;
  sayBreed(): string;
}

// implementing in a class
class Horse implements Horse {
  type = 'Horse';
  breed = 'Quarterhorse';
  sayBreed() {
    return `I'm a ${this.breed}`;
  }
}

const fido: Horse = new Horse();

console.log(fido.sayBreed());

// Interfaces Merge on Duplicate Declarations
interface UserDetails {
  name: string;
  age: number;
}

interface UserDetails {
  height: number;
  weight: number;
}

const userDetails: UserDetails = {
  name: 'John',
  age: 26,
  height: 72,
  weight: 180
};
