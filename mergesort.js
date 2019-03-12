function merge(x, y) {
    if (x.length === 0) return y;
    if (y.length === 0) return x;

    return x[0] > y[0]
        ? [y[0], ...merge(y.slice(1), x)]
        : [x[0], ...merge(x.slice(1), y)];
}

function mergeSort(arr) {
    const res = arr.map(e => [e]);

    while (res.length !== 1) {
        res.unshift(merge(res.pop(), res.pop()));
    }
    return res.pop();
}

module.exports = { merge, mergeSort };
