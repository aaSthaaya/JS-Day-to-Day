//Promises Revision

// function getData(dataId, getNextData) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data:", dataId);
//             resolve("Success");
//             // reject("Error");
//             if (getNextData) {
//                 getNextData();
//             }
//         }, 2000);
//     });
// };

// getData(1).then((res) => {
//     return getData(2);
// })
//     .then((res) => {
//         return getData(3);
//     })
//     .then((res) => {
//         return getData(4);
//     });



// const myPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("foo");
//     }, 3000);
//   });

//   myPromise
//     .then(handleFulfilledA, handleRejectedA)
//     .then(handleFulfilledB, handleRejectedB)
//     .then(handleFulfilledC, handleRejectedC);


// const getPromise = () => {
//     return new Promise((resolve, reject) => {
//         console.log("The promise has been given.");
//         resolve("It's a Success.");
//         // reject("Error");
//     });
// };

// let promise = getPromise();
// promise.then(() => {
//     console.log("Promise has been fulfilled.");
// });
// promise.catch(() => {
//     console.log("The promise got rejected.");
// });


//Promise Chain

// function asyncFunc1() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Some Data1");
//             resolve("Success1");
//         }, 4000);
//     });
// };
// function asyncFunc2() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Some Data2");
//             resolve("Success2");
//         }, 4000);
//     });
// };
// function asyncFunc3() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Some Data3");
//             resolve("Success3");
//         }, 4000);
//     });
// };

// console.log("Fetching Data1");
// asyncFunc1().then((res) => {
//     console.log("Fetching Data2");
//     asyncFunc2().then((res) => {
//         console.log("Fetching Data3");
//         asyncFunc3().then((res) => { }
//         );
//     });
// });


//Async & Await

// async function hello() {
//     console.log(hello);
// }
// function api() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Weather Data.");
//             resolve("Success.");
//         }, 2000);
//     });
// }
// function api() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Weather Data");
//             resolve("Success.");
//         }, 2000);
//     });
// }
// async function getWeatherData() {
//     await api();
// }

function getData(dataId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Data:", dataId);
            resolve("Success.");
        }, 2000);
    });
};

async function getAllData() {
    await getData(1);
    await getData(2);
    await getData(3);
};


