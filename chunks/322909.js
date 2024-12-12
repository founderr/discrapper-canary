var i = r(748372);
function a(e, n, r) {
    for (var a = -1, s = e.criteria, o = n.criteria, l = s.length, u = r.length; ++a < l; ) {
        var c = i(s[a], o[a]);
        if (c) {
            if (a >= u) return c;
            return c * ('desc' == r[a] ? -1 : 1);
        }
    }
    return e.index - n.index;
}
e.exports = a;
