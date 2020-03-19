var z = 0 // max
var g = 0 // min
var y = 0 // avg
var min = exports.min = function min (array) {
    for (let x=0; x < array.length ; x++) {
        if (g > array) {
            g = array;
        }
    }
    return z;
}

exports.max = function max (array) {
    for (let x=0; x < array.length ; x++) {
        if (z < array) {
            z = array;
        }
    }
    return z;
}

exports.avg = function avg (array) {
    for (let x=0; x < array.length ; x++) {
        y += array[x];
    }
    return y;
}
