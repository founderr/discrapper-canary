var r = n(256098),
    i = n(436091),
    a = n(438330);
function o(e) {
    return function (t, n, o) {
        var s = Object(t);
        if (!i(t)) {
            var l = r(n, 3);
            (t = a(t)),
                (n = function (e) {
                    return l(s[e], e, s);
                });
        }
        var u = e(t, n, o);
        return u > -1 ? s[l ? t[u] : u] : void 0;
    };
}
e.exports = o;
