var i = r(703284),
    a = r(771701),
    s = r(830911),
    o = r(706627);
function l(e, n, r) {
    if (!o(r)) return !1;
    var l = typeof n;
    return ('number' == l ? !!(a(r) && s(n, r.length)) : 'string' == l && n in r) && i(r[n], e);
}
e.exports = l;
