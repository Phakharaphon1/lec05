const promise = new Promise((resolve, reject) => {
    const res = true;

    if (res) {
        resolve("Resolve!");
    } else {
        reject(Error("False Error"));
    }
});

promise.then(
    (res) => console.log(res),
    (err) => console.log(err)
);