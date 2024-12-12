var a = r(620014),
    n = r(733892);
e.exports = function (e, t, r, _) {
    var o = r.length,
        E = o,
        i = !_;
    if (null == e) return !E;
    for (e = Object(e); o--; ) {
        var c = r[o];
        if (i && c[2] ? c[1] !== e[c[0]] : !(c[0] in e)) return !1;
    }
    for (; ++o < E; ) {
        var s = (c = r[o])[0],
            l = e[s],
            I = c[1];
        if (i && c[2]) {
            if (void 0 === l && !(s in e)) return !1;
        } else {
            var u = new a();
            if (_) var R = _(l, I, s, e, t, u);
            if (!(void 0 === R ? n(I, l, 3, _, u) : R)) return !1;
        }
    }
    return !0;
};
