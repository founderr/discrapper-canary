var i = r(690244),
    a = i('%Symbol.species%', !0),
    s = i('%TypeError%'),
    o = r(66034),
    l = r(755228),
    u = r(156700),
    c = r(718129),
    d = r(632384),
    f = r(73871);
e.exports = function (e, n) {
    if (!f(n) || n < 0) throw new s('Assertion failed: length must be an integer >= 0');
    if (!u(e)) return o(n);
    var r = l(e, 'constructor');
    if ((a && 'Object' === d(r) && null === (r = l(r, a)) && (r = void 0), void 0 === r)) return o(n);
    if (!c(r)) throw new s('C must be a constructor');
    return new r(n);
};
