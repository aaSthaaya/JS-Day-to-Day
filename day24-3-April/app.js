console.log("Hiii New Chapter.");


//Synchronous & Asynchronous

//setTimeout
function message() {
    console.log("This is new.");
}
setTimeout(message, 10000); // 4sec == 4000ms


//Alternative
setTimeout(() => {
    console.log("What a Wonderful world.");
}, 4000);


//CallBacks

const hello = () => {
    console.log("hiee");
};
setTimeout(hello, 3000); //hello is a callback parameter in the setTimeout function...Basically it's function residing in other functions.

//
function getData(dataId, getNextData) {
    //2s
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            console.log("data", dataId);
            resolve("success");
            if (getNextData) {
                getNextData();
            }
        }, 5000);
    });
}
// getData(1, () => {
//     getData(2);
// });


//Promises - Pending, Fulfilled, Reject

// const promise = new Promise((resolve, reject) => {
//     console.log("This is Promise.");
//     // resolve("The problem has been solved and Promise is fulfilled.");
//     reject("Some error occured.");
// });


// const myPromises = new Promises((resolve,reject) =>{
//     setTimeout(()=>{
//         resolve("Success");
//     },3000);
// });

// myPromises
// .then(handleFullfilledA, handleRejectedA)
// .then(handleFullfilledB, handleRejectedB)
// .then(handleFullfilledC, handleRejectedC);

//

function asyncFunction() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Some Data.");
            resolve("Successful");
        }, 2000);
    });
}

console.log("Fetching the data in exact 2 sec.");
let p1 = asyncFunction();
p1.then((res) => {
    console.log(res);
});

