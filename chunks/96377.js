var r = n(740078),
    i = n(126387),
    a = n(205208),
    s = n(792278),
    o = n(464826),
    l = n(493623),
    u = n(343713),
    c = n(510104),
    d = n(632471),
    f = n(607033),
    _ = n(894417);
t.Z = {
    name: 'preventOverflow',
    enabled: !0,
    phase: 'main',
    fn: function (e) {
        var t = e.state,
            n = e.options,
            p = e.name,
            h = n.mainAxis,
            m = n.altAxis,
            g = n.boundary,
            E = n.rootBoundary,
            v = n.altBoundary,
            I = n.padding,
            T = n.tether,
            b = void 0 === T || T,
            S = n.tetherOffset,
            y = void 0 === S ? 0 : S,
            A = (0, c.Z)(t, {
                boundary: g,
                rootBoundary: E,
                padding: I,
                altBoundary: v
            }),
            N = (0, i.Z)(t.placement),
            C = (0, d.Z)(t.placement),
            R = !C,
            O = (0, a.Z)(N),
            D = (0, s.Z)(O),
            L = t.modifiersData.popperOffsets,
            x = t.rects.reference,
            w = t.rects.popper,
            P = 'function' == typeof y ? y(Object.assign({}, t.rects, { placement: t.placement })) : y,
            M =
                'number' == typeof P
                    ? {
                          mainAxis: P,
                          altAxis: P
                      }
                    : Object.assign(
                          {
                              mainAxis: 0,
                              altAxis: 0
                          },
                          P
                      ),
            k = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null,
            U = {
                x: 0,
                y: 0
            };
        if (!!L) {
            if (void 0 === h || h) {
                var B,
                    G = 'y' === O ? r.we : r.t$,
                    Z = 'y' === O ? r.I : r.F2,
                    F = 'y' === O ? 'height' : 'width',
                    V = L[O],
                    j = V + A[G],
                    H = V - A[Z],
                    Y = b ? -w[F] / 2 : 0,
                    W = C === r.BL ? x[F] : w[F],
                    K = C === r.BL ? -w[F] : -x[F],
                    z = t.elements.arrow,
                    q =
                        b && z
                            ? (0, l.Z)(z)
                            : {
                                  width: 0,
                                  height: 0
                              },
                    Q = t.modifiersData['arrow#persistent'] ? t.modifiersData['arrow#persistent'].padding : (0, f.Z)(),
                    X = Q[G],
                    J = Q[Z],
                    $ = (0, o.u)(0, x[F], q[F]),
                    ee = R ? x[F] / 2 - Y - $ - X - M.mainAxis : W - $ - X - M.mainAxis,
                    et = R ? -x[F] / 2 + Y + $ + J + M.mainAxis : K + $ + J + M.mainAxis,
                    en = t.elements.arrow && (0, u.Z)(t.elements.arrow),
                    er = en ? ('y' === O ? en.clientTop || 0 : en.clientLeft || 0) : 0,
                    ei = null != (B = null == k ? void 0 : k[O]) ? B : 0,
                    ea = (0, o.u)(b ? (0, _.VV)(j, V + ee - ei - er) : j, V, b ? (0, _.Fp)(H, V + et - ei) : H);
                (L[O] = ea), (U[O] = ea - V);
            }
            if (void 0 !== m && m) {
                var es,
                    eo = 'x' === O ? r.we : r.t$,
                    el = 'x' === O ? r.I : r.F2,
                    eu = L[D],
                    ec = 'y' === D ? 'height' : 'width',
                    ed = eu + A[eo],
                    ef = eu - A[el],
                    e_ = -1 !== [r.we, r.t$].indexOf(N),
                    ep = null != (es = null == k ? void 0 : k[D]) ? es : 0,
                    eh = e_ ? ed : eu - x[ec] - w[ec] - ep + M.altAxis,
                    em = e_ ? eu + x[ec] + w[ec] - ep - M.altAxis : ef,
                    eg = b && e_ ? (0, o.q)(eh, eu, em) : (0, o.u)(b ? eh : ed, eu, b ? em : ef);
                (L[D] = eg), (U[D] = eg - eu);
            }
            t.modifiersData[p] = U;
        }
    },
    requiresIfExists: ['offset']
};
