var i = r(690244)('%TypeError%'),
    a = r(297358),
    s = r(828148),
    o = r(632384);
e.exports = function (e, n, r) {
    if ('Object' !== o(e)) throw new i('Assertion failed: Type(O) is not Object');
    if (!s(n)) throw new i('Assertion failed: IsPropertyKey(P) is not true');
    if (!a(e, n, r)) throw new i('unable to create data property');
};
