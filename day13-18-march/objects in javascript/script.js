console.log('Hi');

//Iterate objects

const people = {
    name: 'Sammy',
    age: 29,
    'person hobbies': ['guitar', ' piano', ' listening']
}
//There are two ways we can iterate objects in javascript
//using for in loop &
//using Object.keys


//using for in loop
// for(let key in people){
// console.log(key, people[key]);
// console.log(`${key} : ${people[key]}`);
// }

//using Object.keys

// for (let key of Object.keys(person)) {
//     console.log(people[key]);
// }







//Array:

// const arr=["Aastha","Ayesha","Nisha"]


// // for(let i=0;i<=5;i++){
// //     console.log(i)
// // }

// for(let i=0;i<arr.length;i++){
//   console.log(arr[i])
// }

// for(val of arr){
//     console.log(val)
// }

// for(val in arr){
//     console.log(val)
// }


// //String:
// const fullName="Aastha Mishra";
// for(let i=0;i<fullName.length;i++){
//     console.log(fullName[i])
//   }

//   for(i of fullName){
//     console.log(i)
//   }

//   for(i in fullName){
//     console.log(i)
//   }

// //Object:
// let details={fullName:"Aastha Mishra",company:"Swift Technology"}


// for(i in details){
//     console.log(i)
//   }

//Computed properties

const key1 = 'objkey1';
const key2 = 'objkey2';

const value1 = 'myvalue1';
const value2 = 'myvalue2';

// const obj = {
//     [key1]: value1,
//     [key2]: value2
// }

//Alternative
const obj = {};

obj[key1] = value1;
obj[key2] = value2;


console.log(obj);















