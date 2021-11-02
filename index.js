function receivesAFunction(callback) {
    callback ();
}

function returnsANamedFunction () {
    return function functionName () {
        console.log("I am a named function")
    }
}

function returnsAnAnonymousFunction () {
    return function () {
        console.log("I am an anonymous function");
    }
}