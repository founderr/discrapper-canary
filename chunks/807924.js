var r = n(126387),
    i = n(493623),
    a = n(67966),
    o = n(343713),
    s = n(205208),
    l = n(464826),
    u = n(544338),
    c = n(581206),
    d = n(740078),
    _ = function (e, t) {
        return (e = 'function' == typeof e ? e(Object.assign({}, t.rects, { placement: t.placement })) : e), (0, u.Z)('number' != typeof e ? e : (0, c.Z)(e, d.mv));
    };
function E(e) {
    var t,
        n = e.state,
        a = e.name,
        u = e.options,
        c = n.elements.arrow,
        E = n.modifiersData.popperOffsets,
        f = (0, r.Z)(n.placement),
        h = (0, s.Z)(f),
        p = [d.t$, d.F2].indexOf(f) >= 0 ? 'height' : 'width';
    if (!!c && !!E) {
        var m = _(u.padding, n),
            I = (0, i.Z)(c),
            T = 'y' === h ? d.we : d.t$,
            g = 'y' === h ? d.I : d.F2,
            S = n.rects.reference[p] + n.rects.reference[h] - E[h] - n.rects.popper[p],
            A = E[h] - n.rects.reference[h],
            v = (0, o.Z)(c),
            N = v ? ('y' === h ? v.clientHeight || 0 : v.clientWidth || 0) : 0,
            O = S / 2 - A / 2,
            R = m[T],
            C = N - I[p] - m[g],
            y = N / 2 - I[p] / 2 + O,
            L = (0, l.u)(R, y, C),
            b = h;
        n.modifiersData[a] = (((t = {})[b] = L), (t.centerOffset = L - y), t);
    }
}
function f(e) {
    var t = e.state,
        n = e.options.element,
        r = void 0 === n ? '[data-popper-arrow]' : n;
    if (null != r && ('string' != typeof r || !!(r = t.elements.popper.querySelector(r))) && !!(0, a.Z)(t.elements.popper, r)) t.elements.arrow = r;
}
t.Z = {
    name: 'arrow',
    enabled: !0,
    phase: 'main',
    fn: E,
    effect: f,
    requires: ['popperOffsets'],
    requiresIfExists: ['preventOverflow']
};
