var r = n(244287),
    i = n(126387),
    a = n(885952),
    s = n(510104),
    o = n(891734),
    l = n(740078),
    u = n(632471);
t.Z = {
    name: 'flip',
    enabled: !0,
    phase: 'main',
    fn: function (e) {
        var t = e.state,
            n = e.options,
            c = e.name;
        if (!t.modifiersData[c]._skip) {
            for (
                var d = n.mainAxis,
                    _ = void 0 === d || d,
                    E = n.altAxis,
                    f = void 0 === E || E,
                    h = n.fallbackPlacements,
                    p = n.padding,
                    I = n.boundary,
                    m = n.rootBoundary,
                    T = n.altBoundary,
                    S = n.flipVariations,
                    g = void 0 === S || S,
                    A = n.allowedAutoPlacements,
                    N = t.options.placement,
                    O = (0, i.Z)(N) === N,
                    R =
                        h ||
                        (O || !g
                            ? [(0, r.Z)(N)]
                            : (function (e) {
                                  if ((0, i.Z)(e) === l.d7) return [];
                                  var t = (0, r.Z)(e);
                                  return [(0, a.Z)(e), t, (0, a.Z)(t)];
                              })(N)),
                    v = [N].concat(R).reduce(function (e, n) {
                        return e.concat(
                            (0, i.Z)(n) === l.d7
                                ? (0, o.Z)(t, {
                                      placement: n,
                                      boundary: I,
                                      rootBoundary: m,
                                      padding: p,
                                      flipVariations: g,
                                      allowedAutoPlacements: A
                                  })
                                : n
                        );
                    }, []),
                    C = t.rects.reference,
                    L = t.rects.popper,
                    y = new Map(),
                    D = !0,
                    b = v[0],
                    M = 0;
                M < v.length;
                M++
            ) {
                var P = v[M],
                    U = (0, i.Z)(P),
                    w = (0, u.Z)(P) === l.BL,
                    x = [l.we, l.I].indexOf(U) >= 0,
                    G = x ? 'width' : 'height',
                    k = (0, s.Z)(t, {
                        placement: P,
                        boundary: I,
                        rootBoundary: m,
                        altBoundary: T,
                        padding: p
                    }),
                    B = x ? (w ? l.F2 : l.t$) : w ? l.I : l.we;
                C[G] > L[G] && (B = (0, r.Z)(B));
                var F = (0, r.Z)(B),
                    V = [];
                if (
                    (_ && V.push(k[U] <= 0),
                    f && V.push(k[B] <= 0, k[F] <= 0),
                    V.every(function (e) {
                        return e;
                    }))
                ) {
                    (b = P), (D = !1);
                    break;
                }
                y.set(P, V);
            }
            if (D) {
                for (
                    var H = g ? 3 : 1,
                        Z = function (e) {
                            var t = v.find(function (t) {
                                var n = y.get(t);
                                if (n)
                                    return n.slice(0, e).every(function (e) {
                                        return e;
                                    });
                            });
                            if (t) return (b = t), 'break';
                        },
                        Y = H;
                    Y > 0 && 'break' !== Z(Y);
                    Y--
                );
            }
            t.placement !== b && ((t.modifiersData[c]._skip = !0), (t.placement = b), (t.reset = !0));
        }
    },
    requiresIfExists: ['offset'],
    data: { _skip: !1 }
};
