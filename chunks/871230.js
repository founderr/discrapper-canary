var i = r(957578).Buffer;
e.exports = function (e, n, r) {
    if (i.isBuffer(e)) return e;
    if ('string' == typeof e) return i.from(e, n);
    if (ArrayBuffer.isView(e)) return i.from(e.buffer);
    else throw TypeError(r + ' must be a string, a Buffer, a typed array or a DataView');
};
