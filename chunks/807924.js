var i = r(126387),
    a = r(493623),
    s = r(67966),
    o = r(343713),
    l = r(205208),
    u = r(464826),
    c = r(544338),
    d = r(581206),
    f = r(740078),
    _ = function (e, n) {
        return (e = 'function' == typeof e ? e(Object.assign({}, n.rects, { placement: n.placement })) : e), (0, c.Z)('number' != typeof e ? e : (0, d.Z)(e, f.mv));
    };
function h(e) {
    var n,
        r = e.state,
        s = e.name,
        c = e.options,
        d = r.elements.arrow,
        h = r.modifiersData.popperOffsets,
        p = (0, i.Z)(r.placement),
        m = (0, l.Z)(p),
        g = [f.t$, f.F2].indexOf(p) >= 0 ? 'height' : 'width';
    if (!!d && !!h) {
        var E = _(c.padding, r),
            v = (0, a.Z)(d),
            I = 'y' === m ? f.we : f.t$,
            T = 'y' === m ? f.I : f.F2,
            b = r.rects.reference[g] + r.rects.reference[m] - h[m] - r.rects.popper[g],
            y = h[m] - r.rects.reference[m],
            S = (0, o.Z)(d),
            A = S ? ('y' === m ? S.clientHeight || 0 : S.clientWidth || 0) : 0,
            N = b / 2 - y / 2,
            C = E[I],
            R = A - v[g] - E[T],
            O = A / 2 - v[g] / 2 + N,
            D = (0, u.u)(C, O, R),
            L = m;
        r.modifiersData[s] = (((n = {})[L] = D), (n.centerOffset = D - O), n);
    }
}
function p(e) {
    var n = e.state,
        r = e.options.element,
        i = void 0 === r ? '[data-popper-arrow]' : r;
    if (null != i && ('string' != typeof i || !!(i = n.elements.popper.querySelector(i))) && !!(0, s.Z)(n.elements.popper, i)) n.elements.arrow = i;
}
n.Z = {
    name: 'arrow',
    enabled: !0,
    phase: 'main',
    fn: h,
    effect: p,
    requires: ['popperOffsets'],
    requiresIfExists: ['preventOverflow']
};
