var r = n(690244),
    i = r('%Number%'),
    a = r('%RegExp%'),
    s = r('%TypeError%'),
    o = r('%parseInt%'),
    l = n(192853),
    u = n(385097),
    c = l('String.prototype.slice'),
    d = u(/^0b[01]+$/i),
    f = u(/^0o[0-7]+$/i),
    _ = u(/^[-+]0x[0-9a-f]+$/i),
    p = u(new a('[\x85\u200B\uFFFE]', 'g')),
    h = n(761652),
    m = n(632384);
e.exports = function e(t) {
    if ('String' !== m(t)) throw new s('Assertion failed: `argument` is not a String');
    if (d(t)) return i(o(c(t, 2), 2));
    if (f(t)) return i(o(c(t, 2), 8));
    if (p(t) || _(t)) return NaN;
    var n = h(t);
    return n !== t ? e(n) : i(t);
};
