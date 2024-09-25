var r = n(740078),
    i = n(126387),
    a = n(205208),
    o = n(792278),
    s = n(464826),
    l = n(493623),
    u = n(343713),
    c = n(510104),
    d = n(632471),
    _ = n(607033),
    E = n(894417);
function f(e) {
    var t = e.state,
        n = e.options,
        f = e.name,
        h = n.mainAxis,
        p = void 0 === h || h,
        m = n.altAxis,
        I = void 0 !== m && m,
        T = n.boundary,
        g = n.rootBoundary,
        S = n.altBoundary,
        A = n.padding,
        v = n.tether,
        N = void 0 === v || v,
        O = n.tetherOffset,
        R = void 0 === O ? 0 : O,
        C = (0, c.Z)(t, {
            boundary: T,
            rootBoundary: g,
            padding: A,
            altBoundary: S
        }),
        y = (0, i.Z)(t.placement),
        b = (0, d.Z)(t.placement),
        L = !b,
        D = (0, a.Z)(y),
        M = (0, o.Z)(D),
        P = t.modifiersData.popperOffsets,
        U = t.rects.reference,
        w = t.rects.popper,
        x = 'function' == typeof R ? R(Object.assign({}, t.rects, { placement: t.placement })) : R,
        G =
            'number' == typeof x
                ? {
                      mainAxis: x,
                      altAxis: x
                  }
                : Object.assign(
                      {
                          mainAxis: 0,
                          altAxis: 0
                      },
                      x
                  ),
        k = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null,
        B = {
            x: 0,
            y: 0
        };
    if (!!P) {
        if (p) {
            var F,
                Z = 'y' === D ? r.we : r.t$,
                V = 'y' === D ? r.I : r.F2,
                H = 'y' === D ? 'height' : 'width',
                Y = P[D],
                j = Y + C[Z],
                W = Y - C[V],
                K = N ? -w[H] / 2 : 0,
                z = b === r.BL ? U[H] : w[H],
                q = b === r.BL ? -w[H] : -U[H],
                Q = t.elements.arrow,
                X =
                    N && Q
                        ? (0, l.Z)(Q)
                        : {
                              width: 0,
                              height: 0
                          },
                $ = t.modifiersData['arrow#persistent'] ? t.modifiersData['arrow#persistent'].padding : (0, _.Z)(),
                J = $[Z],
                ee = $[V],
                et = (0, s.u)(0, U[H], X[H]),
                en = L ? U[H] / 2 - K - et - J - G.mainAxis : z - et - J - G.mainAxis,
                er = L ? -U[H] / 2 + K + et + ee + G.mainAxis : q + et + ee + G.mainAxis,
                ei = t.elements.arrow && (0, u.Z)(t.elements.arrow),
                ea = ei ? ('y' === D ? ei.clientTop || 0 : ei.clientLeft || 0) : 0,
                eo = null != (F = null == k ? void 0 : k[D]) ? F : 0,
                es = Y + en - eo - ea,
                el = Y + er - eo,
                eu = (0, s.u)(N ? (0, E.VV)(j, es) : j, Y, N ? (0, E.Fp)(W, el) : W);
            (P[D] = eu), (B[D] = eu - Y);
        }
        if (I) {
            var ec,
                ed = 'x' === D ? r.we : r.t$,
                e_ = 'x' === D ? r.I : r.F2,
                eE = P[M],
                ef = 'y' === M ? 'height' : 'width',
                eh = eE + C[ed],
                ep = eE - C[e_],
                em = -1 !== [r.we, r.t$].indexOf(y),
                eI = null != (ec = null == k ? void 0 : k[M]) ? ec : 0,
                eT = em ? eh : eE - U[ef] - w[ef] - eI + G.altAxis,
                eg = em ? eE + U[ef] + w[ef] - eI - G.altAxis : ep,
                eS = N && em ? (0, s.q)(eT, eE, eg) : (0, s.u)(N ? eT : eh, eE, N ? eg : ep);
            (P[M] = eS), (B[M] = eS - eE);
        }
        t.modifiersData[f] = B;
    }
}
t.Z = {
    name: 'preventOverflow',
    enabled: !0,
    phase: 'main',
    fn: f,
    requiresIfExists: ['offset']
};
