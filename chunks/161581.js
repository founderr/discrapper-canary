var n = function (e) {
    return e && e.Math === Math && e;
};
e.exports =
    n('object' == typeof globalThis && globalThis) ||
    n('object' == typeof window && window) ||
    n('object' == typeof self && self) ||
    n('object' == typeof r.g && r.g) ||
    (function () {
        return this;
    })() ||
    this ||
    Function('return this')();
