var r = n(548015),
    i = n(204188),
    a = n(175056),
    o = n(906024),
    s = 1 / 0,
    l = r.Z ? r.Z.prototype : void 0,
    u = l ? l.toString : void 0;
function c(e) {
    if ('string' == typeof e) return e;
    if ((0, a.Z)(e)) return (0, i.Z)(e, c) + '';
    if ((0, o.Z)(e)) return u ? u.call(e) : '';
    var t = e + '';
    return '0' == t && 1 / e == -s ? '-0' : t;
}
t.Z = c;
