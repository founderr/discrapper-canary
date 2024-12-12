var i = r(256098),
    a = r(436091),
    s = r(438330);
function o(e) {
    return function (n, r, o) {
        var l = Object(n);
        if (!a(n)) {
            var u = i(r, 3);
            (n = s(n)),
                (r = function (e) {
                    return u(l[e], e, l);
                });
        }
        var c = e(n, r, o);
        return c > -1 ? l[u ? n[c] : c] : void 0;
    };
}
e.exports = o;
