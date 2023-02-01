function receivesAFunction(callback) {
    return callback()
}

function returnsANamedFunction() {
    const fn = function name(){}
    return fn
}

function returnsAnAnonymousFunction() {
    return function(){}
}