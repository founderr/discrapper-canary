n.d(t, {
    Z: function () {
        return f;
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
function f(e, t) {
    void 0 === t && (t = {});
    var n = t,
        f = n.placement,
        _ = void 0 === f ? e.placement : f,
        h = n.strategy,
        p = void 0 === h ? e.strategy : h,
        m = n.boundary,
        g = void 0 === m ? l.zV : m,
        E = n.rootBoundary,
        v = void 0 === E ? l.Pj : E,
        I = n.elementContext,
        S = void 0 === I ? l.k5 : I,
        T = n.altBoundary,
        b = n.padding,
        y = void 0 === b ? 0 : b,
        A = (0, c.Z)('number' != typeof y ? y : (0, d.Z)(y, l.mv)),
        N = S === l.k5 ? l.YP : l.k5,
        C = e.rects.popper,
        R = e.elements[void 0 !== T && T ? N : S],
        O = (0, r.Z)((0, u.kK)(R) ? R : R.contextElement || (0, i.Z)(e.elements.popper), g, v, p),
        D = (0, a.Z)(e.elements.reference),
        L = (0, s.Z)({
            reference: D,
            element: C,
            strategy: 'absolute',
            placement: _
        }),
        x = (0, o.Z)(Object.assign({}, C, L)),
        w = S === l.k5 ? x : D,
        M = {
            top: O.top - w.top + A.top,
            bottom: w.bottom - O.bottom + A.bottom,
            left: O.left - w.left + A.left,
            right: w.right - O.right + A.right
        },
        P = e.modifiersData.offset;
    if (S === l.k5 && P) {
        var k = P[_];
        Object.keys(M).forEach(function (e) {
            var t = [l.F2, l.I].indexOf(e) >= 0 ? 1 : -1,
                n = [l.we, l.I].indexOf(e) >= 0 ? 'y' : 'x';
            M[e] += k[n] * t;
        });
    }
    return M;
}
