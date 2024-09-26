n.d(t, {
    Z: function () {
        return _;
    }
});
var r = n(685516),
    i = n(285363),
    a = n(175922),
    o = n(406434),
    s = n(6138),
    l = n(740078),
    u = n(882159),
    c = n(544338),
    d = n(581206);
function _(e, t) {
    void 0 === t && (t = {});
    var n = t,
        _ = n.placement,
        E = void 0 === _ ? e.placement : _,
        f = n.strategy,
        h = void 0 === f ? e.strategy : f,
        p = n.boundary,
        m = void 0 === p ? l.zV : p,
        I = n.rootBoundary,
        T = void 0 === I ? l.Pj : I,
        g = n.elementContext,
        S = void 0 === g ? l.k5 : g,
        A = n.altBoundary,
        v = void 0 !== A && A,
        N = n.padding,
        O = void 0 === N ? 0 : N,
        R = (0, c.Z)('number' != typeof O ? O : (0, d.Z)(O, l.mv)),
        C = S === l.k5 ? l.YP : l.k5,
        y = e.rects.popper,
        L = e.elements[v ? C : S],
        b = (0, r.Z)((0, u.kK)(L) ? L : L.contextElement || (0, i.Z)(e.elements.popper), m, T, h),
        D = (0, a.Z)(e.elements.reference),
        M = (0, o.Z)({
            reference: D,
            element: y,
            strategy: 'absolute',
            placement: E
        }),
        P = (0, s.Z)(Object.assign({}, y, M)),
        U = S === l.k5 ? P : D,
        w = {
            top: b.top - U.top + R.top,
            bottom: U.bottom - b.bottom + R.bottom,
            left: b.left - U.left + R.left,
            right: U.right - b.right + R.right
        },
        x = e.modifiersData.offset;
    if (S === l.k5 && x) {
        var G = x[E];
        Object.keys(w).forEach(function (e) {
            var t = [l.F2, l.I].indexOf(e) >= 0 ? 1 : -1,
                n = [l.we, l.I].indexOf(e) >= 0 ? 'y' : 'x';
            w[e] += G[n] * t;
        });
    }
    return w;
}
