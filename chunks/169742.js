var i = ['BigInt64Array', 'BigUint64Array', 'Float32Array', 'Float64Array', 'Int16Array', 'Int32Array', 'Int8Array', 'Uint16Array', 'Uint32Array', 'Uint8Array', 'Uint8ClampedArray'],
    a = 'undefined' == typeof globalThis ? r.g : globalThis;
e.exports = function () {
    for (var e = [], n = 0; n < i.length; n++) 'function' == typeof a[i[n]] && (e[e.length] = i[n]);
    return e;
};
