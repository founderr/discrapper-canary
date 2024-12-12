var i = r(548015),
    a = r(204188),
    s = r(175056),
    o = r(906024),
    l = 1 / 0,
    u = i.Z ? i.Z.prototype : void 0,
    c = u ? u.toString : void 0;
function d(e) {
    if ('string' == typeof e) return e;
    if ((0, s.Z)(e)) return (0, a.Z)(e, d) + '';
    if ((0, o.Z)(e)) return c ? c.call(e) : '';
    var n = e + '';
    return '0' == n && 1 / e == -l ? '-0' : n;
}
n.Z = d;
