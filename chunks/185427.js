var r = n(126387),
    i = n(740078);
t.Z = {
    name: 'offset',
    enabled: !0,
    phase: 'main',
    requires: ['popperOffsets'],
    fn: function (e) {
        var t = e.state,
            n = e.options,
            a = e.name,
            s = n.offset,
            o = void 0 === s ? [0, 0] : s,
            l = i.Ct.reduce(function (e, n) {
                var a, s, l, u, c, d, f, _;
                return (
                    (e[n] =
                        ((a = n),
                        (s = t.rects),
                        (l = o),
                        (u = (0, r.Z)(a)),
                        (c = [i.t$, i.we].indexOf(u) >= 0 ? -1 : 1),
                        (f = (d = 'function' == typeof l ? l(Object.assign({}, s, { placement: a })) : l)[0]),
                        (_ = d[1]),
                        (f = f || 0),
                        (_ = (_ || 0) * c),
                        [i.t$, i.F2].indexOf(u) >= 0
                            ? {
                                  x: _,
                                  y: f
                              }
                            : {
                                  x: f,
                                  y: _
                              })),
                    e
                );
            }, {}),
            u = l[t.placement],
            c = u.x,
            d = u.y;
        null != t.modifiersData.popperOffsets && ((t.modifiersData.popperOffsets.x += c), (t.modifiersData.popperOffsets.y += d)), (t.modifiersData[a] = l);
    }
};
