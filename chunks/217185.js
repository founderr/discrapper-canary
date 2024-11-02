var n = r(466293),
    a = r(467631),
    _ = r(402428),
    o = r(42848),
    i = 1 / 0,
    E = n ? n.prototype : void 0,
    c = E ? E.toString : void 0;
e.exports = function e(t) {
    if ('string' == typeof t) return t;
    if (_(t)) return a(t, e) + '';
    if (o(t)) return c ? c.call(t) : '';
    var r = t + '';
    return '0' == r && 1 / t == -i ? '-0' : r;
};
