var a = r(466293),
    n = r(467631),
    _ = r(402428),
    o = r(42848),
    E = 1 / 0,
    i = a ? a.prototype : void 0,
    c = i ? i.toString : void 0;
e.exports = function e(t) {
    if ('string' == typeof t) return t;
    if (_(t)) return n(t, e) + '';
    if (o(t)) return c ? c.call(t) : '';
    var r = t + '';
    return '0' == r && 1 / t == -E ? '-0' : r;
};
