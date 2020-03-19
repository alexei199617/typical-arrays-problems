var z = 0 // max
var g = 0 // min
var y = 0 // avg
exports.min = function min (array) {
    for (let x=0; x < array.length ; x++) {
        if (g > array[x]) {
            g = array[x];
        }
    }
    return g;
}
exports.max = function max (array) {
    for (let x=0; x < array.length ; x++) {
        if (z < array[x]) {
            z = array[x];
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
const minValue = min([2,-24,13,-11,16,-12,-16,24,13,-38,19,-16,19,3,2,32,0,-10,-19,-27]);
console.log(minValue);
