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
            _ = e.state,
            E = e.name,
            f = e.options,
            h = _.elements.arrow,
            p = _.modifiersData.popperOffsets,
            I = (0, r.Z)(_.placement),
            m = (0, o.Z)(I),
            T = [d.t$, d.F2].indexOf(I) >= 0 ? 'height' : 'width';
        if (!!h && !!p) {
            var S = ((t = f.padding), (n = _), (t = 'function' == typeof t ? t(Object.assign({}, n.rects, { placement: n.placement })) : t), (0, u.Z)('number' != typeof t ? t : (0, c.Z)(t, d.mv))),
                g = (0, i.Z)(h),
                A = 'y' === m ? d.we : d.t$,
                N = 'y' === m ? d.I : d.F2,
                O = _.rects.reference[T] + _.rects.reference[m] - p[m] - _.rects.popper[T],
                R = p[m] - _.rects.reference[m],
                v = (0, s.Z)(h),
                C = v ? ('y' === m ? v.clientHeight || 0 : v.clientWidth || 0) : 0,
                L = S[A],
                y = C - g[T] - S[N],
                D = C / 2 - g[T] / 2 + (O / 2 - R / 2),
                b = (0, l.u)(L, D, y);
            _.modifiersData[E] = (((a = {})[m] = b), (a.centerOffset = b - D), a);
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
