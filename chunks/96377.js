var r = n(740078),
    i = n(126387),
    a = n(205208),
    s = n(792278),
    o = n(464826),
    l = n(493623),
    u = n(343713),
    c = n(510104),
    d = n(632471),
    _ = n(607033),
    E = n(894417);
t.Z = {
    name: 'preventOverflow',
    enabled: !0,
    phase: 'main',
    fn: function (e) {
        var t = e.state,
            n = e.options,
            f = e.name,
            h = n.mainAxis,
            p = n.altAxis,
            I = n.boundary,
            m = n.rootBoundary,
            T = n.altBoundary,
            S = n.padding,
            g = n.tether,
            A = void 0 === g || g,
            N = n.tetherOffset,
            O = void 0 === N ? 0 : N,
            R = (0, c.Z)(t, {
                boundary: I,
                rootBoundary: m,
                padding: S,
                altBoundary: T
            }),
            v = (0, i.Z)(t.placement),
            C = (0, d.Z)(t.placement),
            L = !C,
            y = (0, a.Z)(v),
            D = (0, s.Z)(y),
            b = t.modifiersData.popperOffsets,
            M = t.rects.reference,
            P = t.rects.popper,
            U = 'function' == typeof O ? O(Object.assign({}, t.rects, { placement: t.placement })) : O,
            w =
                'number' == typeof U
                    ? {
                          mainAxis: U,
                          altAxis: U
                      }
                    : Object.assign(
                          {
                              mainAxis: 0,
                              altAxis: 0
                          },
                          U
                      ),
            x = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null,
            G = {
                x: 0,
                y: 0
            };
        if (!!b) {
            if (void 0 === h || h) {
                var k,
                    B = 'y' === y ? r.we : r.t$,
                    F = 'y' === y ? r.I : r.F2,
                    V = 'y' === y ? 'height' : 'width',
                    H = b[y],
                    Z = H + R[B],
                    Y = H - R[F],
                    j = A ? -P[V] / 2 : 0,
                    W = C === r.BL ? M[V] : P[V],
                    K = C === r.BL ? -P[V] : -M[V],
                    z = t.elements.arrow,
                    q =
                        A && z
                            ? (0, l.Z)(z)
                            : {
                                  width: 0,
                                  height: 0
                              },
                    Q = t.modifiersData['arrow#persistent'] ? t.modifiersData['arrow#persistent'].padding : (0, _.Z)(),
                    X = Q[B],
                    $ = Q[F],
                    J = (0, o.u)(0, M[V], q[V]),
                    ee = L ? M[V] / 2 - j - J - X - w.mainAxis : W - J - X - w.mainAxis,
                    et = L ? -M[V] / 2 + j + J + $ + w.mainAxis : K + J + $ + w.mainAxis,
                    en = t.elements.arrow && (0, u.Z)(t.elements.arrow),
                    er = en ? ('y' === y ? en.clientTop || 0 : en.clientLeft || 0) : 0,
                    ei = null != (k = null == x ? void 0 : x[y]) ? k : 0,
                    ea = (0, o.u)(A ? (0, E.VV)(Z, H + ee - ei - er) : Z, H, A ? (0, E.Fp)(Y, H + et - ei) : Y);
                (b[y] = ea), (G[y] = ea - H);
            }
            if (void 0 !== p && p) {
                var es,
                    eo = 'x' === y ? r.we : r.t$,
                    el = 'x' === y ? r.I : r.F2,
                    eu = b[D],
                    ec = 'y' === D ? 'height' : 'width',
                    ed = eu + R[eo],
                    e_ = eu - R[el],
                    eE = -1 !== [r.we, r.t$].indexOf(v),
                    ef = null != (es = null == x ? void 0 : x[D]) ? es : 0,
                    eh = eE ? ed : eu - M[ec] - P[ec] - ef + w.altAxis,
                    ep = eE ? eu + M[ec] + P[ec] - ef - w.altAxis : e_,
                    eI = A && eE ? (0, o.q)(eh, eu, ep) : (0, o.u)(A ? eh : ed, eu, A ? ep : e_);
                (b[D] = eI), (G[D] = eI - eu);
            }
            t.modifiersData[f] = G;
        }
    },
    requiresIfExists: ['offset']
};
