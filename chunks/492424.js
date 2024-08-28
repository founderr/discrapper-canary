var n = r(161581),
    a = Object.defineProperty;
e.exports = function (e, t) {
    try {
        a(n, e, {
            value: t,
            configurable: !0,
            writable: !0
        });
    } catch (r) {
        n[e] = t;
    }
    return t;
};
