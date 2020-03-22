exports.min = function min(array) {
    return !array || !(array.length) ? 0 :
        array.reduce((accum, value) =>
            Math.min(accum, value)
        );
};

exports.max = function max(array) {
    return !array || !(array.length) ? 0 :
        array.reduce((accum, value) =>
            Math.max(accum, value)
        );
};

exports.avg = function avg(array) {
    return !array || !(array.length) ? 0 :
    array.reduce((accum, value) => accum+value) / array.length;
};
