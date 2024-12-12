var i = r(690244)('%TypeError%'),
    a = r(828148),
    s = r(379284),
    o = r(632384);
e.exports = function (e, n, r) {
    if ('Object' !== o(e)) throw new i('Assertion failed: Type(O) is not Object');
    if (!a(n)) throw new i('Assertion failed: IsPropertyKey(P) is not true');
    return s(e, n, {
        '[[Configurable]]': !0,
        '[[Enumerable]]': !0,
        '[[Value]]': r,
        '[[Writable]]': !0
    });
};
