function timeouts() {
    setTimeout(() => {
        console.log("1");
    }, 0);

    console.log("2");

    new Promise((resolve, reject) => {
        console.log("3");

        setTimeout(() => {
            console.log("4");
            resolve();
            reject();
            console.log("5");
        });
    })
    .finally(() => console.log("6"))
    .then(() => console.log("7"))
    .catch(() => console.log("8"))
    .then(() => console.log("9"));

    console.log("10");

    setTimeout(() => {
        console.log("11");
    }, 0);
}

timeouts();
