var r = n(244287),
    i = n(126387),
    a = n(885952),
    o = n(510104),
    s = n(891734),
    l = n(740078),
    u = n(632471);
function c(e) {
    if ((0, i.Z)(e) === l.d7) return [];
    var t = (0, r.Z)(e);
    return [(0, a.Z)(e), t, (0, a.Z)(t)];
}
function d(e) {
    var t = e.state,
        n = e.options,
        a = e.name;
    if (!t.modifiersData[a]._skip) {
        for (
            var d = n.mainAxis,
                _ = void 0 === d || d,
                E = n.altAxis,
                f = void 0 === E || E,
                h = n.fallbackPlacements,
                p = n.padding,
                m = n.boundary,
                I = n.rootBoundary,
                T = n.altBoundary,
                g = n.flipVariations,
                S = void 0 === g || g,
                A = n.allowedAutoPlacements,
                v = t.options.placement,
                N = (0, i.Z)(v) === v,
                O = h || (N || !S ? [(0, r.Z)(v)] : c(v)),
                R = [v].concat(O).reduce(function (e, n) {
                    return e.concat(
                        (0, i.Z)(n) === l.d7
                            ? (0, s.Z)(t, {
                                  placement: n,
                                  boundary: m,
                                  rootBoundary: I,
                                  padding: p,
                                  flipVariations: S,
                                  allowedAutoPlacements: A
                              })
                            : n
                    );
                }, []),
                C = t.rects.reference,
                y = t.rects.popper,
                L = new Map(),
                b = !0,
                D = R[0],
                M = 0;
            M < R.length;
            M++
        ) {
            var P = R[M],
                U = (0, i.Z)(P),
                w = (0, u.Z)(P) === l.BL,
                x = [l.we, l.I].indexOf(U) >= 0,
                G = x ? 'width' : 'height',
                k = (0, o.Z)(t, {
                    placement: P,
                    boundary: m,
                    rootBoundary: I,
                    altBoundary: T,
                    padding: p
                }),
                B = x ? (w ? l.F2 : l.t$) : w ? l.I : l.we;
            C[G] > y[G] && (B = (0, r.Z)(B));
            var F = (0, r.Z)(B),
                Z = [];
            if (
                (_ && Z.push(k[U] <= 0),
                f && Z.push(k[B] <= 0, k[F] <= 0),
                Z.every(function (e) {
                    return e;
                }))
            ) {
                (D = P), (b = !1);
                break;
            }
            L.set(P, Z);
        }
        if (b) {
            for (
                var V = S ? 3 : 1,
                    H = function (e) {
                        var t = R.find(function (t) {
                            var n = L.get(t);
                            if (n)
                                return n.slice(0, e).every(function (e) {
                                    return e;
                                });
                        });
                        if (t) return (D = t), 'break';
                    },
                    Y = V;
                Y > 0 && 'break' !== H(Y);
                Y--
            );
        }
        t.placement !== D && ((t.modifiersData[a]._skip = !0), (t.placement = D), (t.reset = !0));
    }
}
t.Z = {
    name: 'flip',
    enabled: !0,
    phase: 'main',
    fn: d,
    requiresIfExists: ['offset'],
    data: { _skip: !1 }
};
