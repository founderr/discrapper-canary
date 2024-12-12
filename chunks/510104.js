r.d(n, {
    Z: function () {
        return _;
    }
});
var i = r(685516),
    a = r(285363),
    s = r(175922),
    o = r(406434),
    l = r(6138),
    u = r(740078),
    c = r(882159),
    d = r(544338),
    f = r(581206);
function _(e, n) {
    void 0 === n && (n = {});
    var r = n,
        _ = r.placement,
        h = void 0 === _ ? e.placement : _,
        p = r.strategy,
        m = void 0 === p ? e.strategy : p,
        g = r.boundary,
        E = void 0 === g ? u.zV : g,
        v = r.rootBoundary,
        I = void 0 === v ? u.Pj : v,
        T = r.elementContext,
        b = void 0 === T ? u.k5 : T,
        y = r.altBoundary,
        S = void 0 !== y && y,
        A = r.padding,
        N = void 0 === A ? 0 : A,
        C = (0, d.Z)('number' != typeof N ? N : (0, f.Z)(N, u.mv)),
        R = b === u.k5 ? u.YP : u.k5,
        O = e.rects.popper,
        D = e.elements[S ? R : b],
        L = (0, i.Z)((0, c.kK)(D) ? D : D.contextElement || (0, a.Z)(e.elements.popper), E, I, m),
        x = (0, s.Z)(e.elements.reference),
        w = (0, o.Z)({
            reference: x,
            element: O,
            strategy: 'absolute',
            placement: h
        }),
        P = (0, l.Z)(Object.assign({}, O, w)),
        M = b === u.k5 ? P : x,
        k = {
            top: L.top - M.top + C.top,
            bottom: M.bottom - L.bottom + C.bottom,
            left: L.left - M.left + C.left,
            right: M.right - L.right + C.right
        },
        U = e.modifiersData.offset;
    if (b === u.k5 && U) {
        var B = U[h];
        Object.keys(k).forEach(function (e) {
            var n = [u.F2, u.I].indexOf(e) >= 0 ? 1 : -1,
                r = [u.we, u.I].indexOf(e) >= 0 ? 'y' : 'x';
            k[e] += B[r] * n;
        });
    }
    return k;
}
