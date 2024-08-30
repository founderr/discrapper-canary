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
        g = n.elementContext,
        S = void 0 === g ? l.k5 : g,
        A = n.altBoundary,
        N = n.padding,
        O = void 0 === N ? 0 : N,
        R = (0, c.Z)('number' != typeof O ? O : (0, d.Z)(O, l.mv)),
        v = S === l.k5 ? l.YP : l.k5,
        C = e.rects.popper,
        y = e.elements[void 0 !== A && A ? v : S],
        L = (0, r.Z)((0, u.kK)(y) ? y : y.contextElement || (0, i.Z)(e.elements.popper), I, T, h),
        D = (0, a.Z)(e.elements.reference),
        b = (0, s.Z)({
            reference: D,
            element: C,
            strategy: 'absolute',
            placement: E
        }),
        M = (0, o.Z)(Object.assign({}, C, b)),
        P = S === l.k5 ? M : D,
        U = {
            top: L.top - P.top + R.top,
            bottom: P.bottom - L.bottom + R.bottom,
            left: L.left - P.left + R.left,
            right: P.right - L.right + R.right
        },
        w = e.modifiersData.offset;
    if (S === l.k5 && w) {
        var x = w[E];
        Object.keys(U).forEach(function (e) {
            var t = [l.F2, l.I].indexOf(e) >= 0 ? 1 : -1,
                n = [l.we, l.I].indexOf(e) >= 0 ? 'y' : 'x';
            U[e] += x[n] * t;
        });
    }
    return U;
}
