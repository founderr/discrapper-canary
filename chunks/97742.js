var r = n(56135),
    i = n(886985),
    a = n(290677),
    o = n(158698),
    s = 1 / 0,
    l = r ? r.prototype : void 0,
    u = l ? l.toString : void 0;
function c(e) {
    if ('string' == typeof e) return e;
    if (a(e)) return i(e, c) + '';
    if (o(e)) return u ? u.call(e) : '';
    var t = e + '';
    return '0' == t && 1 / e == -s ? '-0' : t;
}
e.exports = c;
