var i = r(649786),
    a = r(436091),
    s = r(682653),
    o = r(661233);
function l(e, n, r) {
    if (!o(r)) return !1;
    var l = typeof n;
    return ('number' == l ? !!(a(r) && s(n, r.length)) : 'string' == l && n in r) && i(r[n], e);
}
e.exports = l;
