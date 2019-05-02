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

const arrayOfAnything: any[] = [];

const myPromise: Promise<boolean> = new Promise(function(resolve, reject) {
  resolve(true);
});

/********  Custom Types *********/

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

/********  Interfaces *********/
