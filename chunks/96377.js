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
            h = e.name,
            p = n.mainAxis,
            m = n.altAxis,
            g = n.boundary,
            E = n.rootBoundary,
            v = n.altBoundary,
            I = n.padding,
            S = n.tether,
            T = void 0 === S || S,
            b = n.tetherOffset,
            y = void 0 === b ? 0 : b,
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
            M = 'function' == typeof y ? y(Object.assign({}, t.rects, { placement: t.placement })) : y,
            P =
                'number' == typeof M
                    ? {
                          mainAxis: M,
                          altAxis: M
                      }
                    : Object.assign(
                          {
                              mainAxis: 0,
                              altAxis: 0
                          },
                          M
                      ),
            k = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null,
            U = {
                x: 0,
                y: 0
            };
        if (!!L) {
            if (void 0 === p || p) {
                var G,
                    B = 'y' === O ? r.we : r.t$,
                    Z = 'y' === O ? r.I : r.F2,
                    F = 'y' === O ? 'height' : 'width',
                    V = L[O],
                    H = V + A[B],
                    j = V - A[Z],
                    Y = T ? -w[F] / 2 : 0,
                    W = C === r.BL ? x[F] : w[F],
                    K = C === r.BL ? -w[F] : -x[F],
                    z = t.elements.arrow,
                    q =
                        T && z
                            ? (0, l.Z)(z)
                            : {
                                  width: 0,
                                  height: 0
                              },
                    Q = t.modifiersData['arrow#persistent'] ? t.modifiersData['arrow#persistent'].padding : (0, f.Z)(),
                    X = Q[B],
                    J = Q[Z],
                    $ = (0, o.u)(0, x[F], q[F]),
                    ee = R ? x[F] / 2 - Y - $ - X - P.mainAxis : W - $ - X - P.mainAxis,
                    et = R ? -x[F] / 2 + Y + $ + J + P.mainAxis : K + $ + J + P.mainAxis,
                    en = t.elements.arrow && (0, u.Z)(t.elements.arrow),
                    er = en ? ('y' === O ? en.clientTop || 0 : en.clientLeft || 0) : 0,
                    ei = null != (G = null == k ? void 0 : k[O]) ? G : 0,
                    ea = (0, o.u)(T ? (0, _.VV)(H, V + ee - ei - er) : H, V, T ? (0, _.Fp)(j, V + et - ei) : j);
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
                    eh = null != (es = null == k ? void 0 : k[D]) ? es : 0,
                    ep = e_ ? ed : eu - x[ec] - w[ec] - eh + P.altAxis,
                    em = e_ ? eu + x[ec] + w[ec] - eh - P.altAxis : ef,
                    eg = T && e_ ? (0, o.q)(ep, eu, em) : (0, o.u)(T ? ep : ed, eu, T ? em : ef);
                (L[D] = eg), (U[D] = eg - eu);
            }
            t.modifiersData[h] = U;
        }
    },
    requiresIfExists: ['offset']
};
