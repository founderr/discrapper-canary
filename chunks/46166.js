var n = r(620014),
    a = r(733892);
e.exports = function (e, t, r, _) {
    var o = r.length,
        i = o,
        E = !_;
    if (null == e) return !i;
    for (e = Object(e); o--; ) {
        var c = r[o];
        if (E && c[2] ? c[1] !== e[c[0]] : !(c[0] in e)) return !1;
    }
    for (; ++o < i; ) {
        var s = (c = r[o])[0],
            l = e[s],
            u = c[1];
        if (E && c[2]) {
            if (void 0 === l && !(s in e)) return !1;
        } else {
            var I = new n();
            if (_) var R = _(l, u, s, e, t, I);
            if (!(void 0 === R ? a(u, l, 3, _, I) : R)) return !1;
        }
    }
    return !0;
};
