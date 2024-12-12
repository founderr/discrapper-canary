r.d(n, {
    f: function () {
        return s;
    }
});
var i = r(695170),
    a = r(686942);
function s(e, n, r, s, o, l) {
    for (var u = [], c = 0; c < e.length; c++) {
        var d = void 0,
            f = void 0,
            _ = e[c];
        _ < 0 ? ((d = Math.floor(_ / n.length)), (f = (0, a.Vy)(_, n.length))) : ((d = Math.floor((_ - 1) / n.length)), (f = (0, a.Vy)(_ - 1, n.length)));
        for (var h = [], p = r; p < s; p++) {
            var m = l[p];
            (0, a.EN)(m) && h.push(m);
        }
        var g = void 0;
        g = d < 0 ? h.slice(d)[0] : h[d];
        var E = n[f],
            v = (0, i.zU)(o.yearordinal + g),
            I = (0, i.$e)(v, E);
        !(0, a.q9)(u, I) && u.push(I);
    }
    return (0, i.DY)(u), u;
}
