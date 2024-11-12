n.d(t, {
    f: function () {
        return a;
    }
});
var r = n(695170),
    i = n(686942);
function a(e, t, n, a, s, o) {
    for (var l = [], u = 0; u < e.length; u++) {
        var c = void 0,
            d = void 0,
            f = e[u];
        f < 0 ? ((c = Math.floor(f / t.length)), (d = (0, i.Vy)(f, t.length))) : ((c = Math.floor((f - 1) / t.length)), (d = (0, i.Vy)(f - 1, t.length)));
        for (var _ = [], p = n; p < a; p++) {
            var h = o[p];
            (0, i.EN)(h) && _.push(h);
        }
        var m = void 0;
        m = c < 0 ? _.slice(c)[0] : _[c];
        var g = t[d],
            E = (0, r.zU)(s.yearordinal + m),
            v = (0, r.$e)(E, g);
        !(0, i.q9)(l, v) && l.push(v);
    }
    return (0, r.DY)(l), l;
}
