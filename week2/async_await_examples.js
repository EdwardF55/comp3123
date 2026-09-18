function fetchData(a) {
    let p1 = new Promise(function (resolve, reject) {
        setTimeout(() => {
            if (a > 10) {
                reject({
                    status: 400,
                    message: "Error: The input value is too large!"
                });
            } else {
                resolve({
                    status: 200,
                    message: "Success: The operation completed successfully!"
                });
            }
        }, 1000);
    });
    return p1;
}

// fetchData(5)
//     .then((success) => {
//         console.log(success);
//     }).catch((error) => {
//         console.log(error);
//     })

// fetchData(15)
//     .then((success) => {
//         console.log(success);
//     }).catch((error) => {
//         console.log(error);
//     })

//async function
async function fetchDataAsync() {
    return fetchData(5); // This will return a promise that resolves successfully
}

// fetchDataAsync().then((success) => {
//     console.log("This is the async function result:");
//     console.log(success);
// }).catch((error) => {
//     console.log("This is the async function error:");
//     console.log(error);
// })

async function manageAccount() {
    try {
        console.log("-- Start of Fetching data using async/await...");
        let response = await fetchData(5)
        console.log(response);
        response = await fetchData(15)
        console.log(response);
        console.log("-- End of async/await example --");
    } catch (error) {
        console.log(error);
    }
}

manageAccount();