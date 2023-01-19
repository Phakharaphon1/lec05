function yayOrNay() {
    return new Promise((resolve, reject) => {
        const val = math.round(Math.random() * 1);

        val ? resolve("Lucky!!") : reject("Nope 😠");
    });
}

async function msg() {
    try {
        const msg = await yayOrNay();
        console.log(msg);
    }   catch (err) {
        console.log(err);
    }
}