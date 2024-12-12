var i = r(466293),
    a = r(467631),
    s = r(402428),
    o = r(42848),
    l = 1 / 0,
    u = i ? i.prototype : void 0,
    c = u ? u.toString : void 0;
function d(e) {
    if ('string' == typeof e) return e;
    if (s(e)) return a(e, d) + '';
    if (o(e)) return c ? c.call(e) : '';
    var n = e + '';
    return '0' == n && 1 / e == -l ? '-0' : n;
}
e.exports = d;
