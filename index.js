function map(array, fn) {
    const newArray = [];
    array.forEach(int => newArray.push(fn(int)));
    return newArray;
}

function reduce(array, fn, startingPoint) {
    let newTotal;
    if (startingPoint) {
        newTotal = startingPoint;
        for (let i = 0; i < array.length; i++) {
            newTotal = fn(array[i], newTotal);
        }
        // array.forEach(element => newTotal += fn(element, newTotal));
        // debugger;
        return newTotal;
    } else {
        newTotal = array[0];
        for (let i = 1; i < array.length; i++) {
            newTotal = fn(array[i], newTotal);
        }
        return newTotal;
    }
}