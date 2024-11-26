var r = n(126387),
    i = n(493623),
    a = n(67966),
    s = n(343713),
    o = n(205208),
    l = n(464826),
    u = n(544338),
    c = n(581206),
    d = n(740078);
t.Z = {
    name: 'arrow',
    enabled: !0,
    phase: 'main',
    fn: function (e) {
        var t,
            n,
            a,
            f = e.state,
            _ = e.name,
            p = e.options,
            h = f.elements.arrow,
            m = f.modifiersData.popperOffsets,
            g = (0, r.Z)(f.placement),
            E = (0, o.Z)(g),
            v = [d.t$, d.F2].indexOf(g) >= 0 ? 'height' : 'width';
        if (!!h && !!m) {
            var I = ((t = p.padding), (n = f), (t = 'function' == typeof t ? t(Object.assign({}, n.rects, { placement: n.placement })) : t), (0, u.Z)('number' != typeof t ? t : (0, c.Z)(t, d.mv))),
                T = (0, i.Z)(h),
                b = 'y' === E ? d.we : d.t$,
                S = 'y' === E ? d.I : d.F2,
                y = f.rects.reference[v] + f.rects.reference[E] - m[E] - f.rects.popper[v],
                A = m[E] - f.rects.reference[E],
                N = (0, s.Z)(h),
                C = N ? ('y' === E ? N.clientHeight || 0 : N.clientWidth || 0) : 0,
                R = I[b],
                O = C - T[v] - I[S],
                D = C / 2 - T[v] / 2 + (y / 2 - A / 2),
                L = (0, l.u)(R, D, O);
            f.modifiersData[_] = (((a = {})[E] = L), (a.centerOffset = L - D), a);
        }
    },
    effect: function (e) {
        var t = e.state,
            n = e.options.element,
            r = void 0 === n ? '[data-popper-arrow]' : n;
        if (null != r && ('string' != typeof r || !!(r = t.elements.popper.querySelector(r))) && !!(0, a.Z)(t.elements.popper, r)) t.elements.arrow = r;
    },
    requires: ['popperOffsets'],
    requiresIfExists: ['preventOverflow']
};
