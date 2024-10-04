var r = n(42848);
function i(e, t, n) {
    for (var i = -1, a = e.length; ++i < a; ) {
        var o = e[i],
            s = t(o);
        if (null != s && (void 0 === l ? s == s && !r(s) : n(s, l)))
            var l = s,
                u = o;
    }
    return u;
}
e.exports = i;
