const name = "John";

const sayHi = () => {
    console.log("Hello there!");
};

const greet = (name) => {
    if (name === undefined || name === null) {
        resolve(new Error("Name is required"));
    }

    name;
};

const username = greet("abebe")
    .then((name) => {
        // hådter feil
        console.log("Hello", name);
    })
    .catch((error) => {
        // håndter succsess
    });

if (user instanceof Error) {
    //håndter at bruker er feil
}

const timerPromise = new Promise((resolve, reject) => {
    // hent en bruker fra database (treig jobb)
    setTimeout(() => {
        const _user = null;
        if (_user === null) {
            reject();
        }
        resolve(_user);
    }, 3000);
});

fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error));

timerPromise
    .then((user) => {
        console.log("User found", user);
    })
    .catch(() => {
        console.log("User not found");
    });

const longSeach = (callBack) => {
    // callback er en function
    callBack();

    function search() {
        console.log("Searching...");
    }

    search();
};

function validateUserExist(user, callback) {
    // hent en bruker fra database (treig jobb)
    const _user = { name: "John" };
    if (_user === null) {
        callback(false);
        throw new Error("User not found");
    }
    callback(_user);
}

longSeach(sayHi);

validateUserExist("John", () => {
    console.log("User found");
});

greet(name);
