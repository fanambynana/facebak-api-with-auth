// Type one :
const learn = async () => {
    const promise = new Promise((resolve, reject) => {
        resolve("Promise resolved !");
        reject("Promise rejected !");
    });
    console.log(await promise);
}

learn();

// Type two :
function myFunction() {
    return Promise.resolve("Hello");
}
    // same as :
const myOtherFunction = async () => {
    return "Hello";
}

myFunction().then(
    function(value) { /* code if successful */ 
        console.log("Successful !");
    },
    function(error) { /* code if some error */ 
        console.log("Error !");
    }
);

myOtherFunction().then(
    function(value) {
        console.log(value + " !");
    },
    function error(error) {
        console.log(error + " !");
    }
)

3 == 3 ?? console.log("Equal");