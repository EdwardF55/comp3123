function fetchData(callback) {
    setTimeout(() => {
        console.log("Fetching data...");
        callback();
    }, 2000)
}

function callback() {
    console.log("Data fetched successfully!");
}

fetchData(callback);

let successCallback = () => {
    console.log("Data fetched successfully!");
}

let errorCallback = () => {
    console.log("Error fetching data!");
}

function fetchDataWithCallbacks(successCallback, errorCallback) {
    setTimeout(() => {
        let success = true; // Simulating a successful fetch
        if (success) {
            successCallback();
        } else {
            errorCallback();
        }
    }, 2000);
}

fetchDataWithCallbacks(successCallback, errorCallback);