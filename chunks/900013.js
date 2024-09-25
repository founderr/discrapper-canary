var r = n(649786),
    i = n(436091),
    a = n(682653),
    o = n(661233);
function s(e, t, n) {
    if (!o(n)) return !1;
    var s = typeof t;
    return ('number' == s ? !!(i(n) && a(t, n.length)) : 'string' == s && t in n) && r(n[t], e);
}
e.exports = s;
