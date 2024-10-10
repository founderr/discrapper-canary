n.d(t, {
    Z: function () {
        return _;
    }
});
var r = n(685516),
    i = n(285363),
    a = n(175922),
    s = n(406434),
    o = n(6138),
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
        I = void 0 === p ? l.zV : p,
        m = n.rootBoundary,
        T = void 0 === m ? l.Pj : m,
        S = n.elementContext,
        g = void 0 === S ? l.k5 : S,
        A = n.altBoundary,
        N = n.padding,
        R = void 0 === N ? 0 : N,
        O = (0, c.Z)('number' != typeof R ? R : (0, d.Z)(R, l.mv)),
        v = g === l.k5 ? l.YP : l.k5,
        C = e.rects.popper,
        L = e.elements[void 0 !== A && A ? v : g],
        y = (0, r.Z)((0, u.kK)(L) ? L : L.contextElement || (0, i.Z)(e.elements.popper), I, T, h),
        D = (0, a.Z)(e.elements.reference),
        b = (0, s.Z)({
            reference: D,
            element: C,
            strategy: 'absolute',
            placement: E
        }),
        M = (0, o.Z)(Object.assign({}, C, b)),
        P = g === l.k5 ? M : D,
        U = {
            top: y.top - P.top + O.top,
            bottom: P.bottom - y.bottom + O.bottom,
            left: y.left - P.left + O.left,
            right: P.right - y.right + O.right
        },
        w = e.modifiersData.offset;
    if (g === l.k5 && w) {
        var x = w[E];
        Object.keys(U).forEach(function (e) {
            var t = [l.F2, l.I].indexOf(e) >= 0 ? 1 : -1,
                n = [l.we, l.I].indexOf(e) >= 0 ? 'y' : 'x';
            U[e] += x[n] * t;
        });
    }
    return U;
}
