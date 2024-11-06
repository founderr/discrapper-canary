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
                    f = void 0 === d || d,
                    _ = n.altAxis,
                    h = void 0 === _ || _,
                    p = n.fallbackPlacements,
                    m = n.padding,
                    g = n.boundary,
                    E = n.rootBoundary,
                    v = n.altBoundary,
                    I = n.flipVariations,
                    S = void 0 === I || I,
                    T = n.allowedAutoPlacements,
                    b = t.options.placement,
                    y = (0, i.Z)(b) === b,
                    A =
                        p ||
                        (y || !S
                            ? [(0, r.Z)(b)]
                            : (function (e) {
                                  if ((0, i.Z)(e) === l.d7) return [];
                                  var t = (0, r.Z)(e);
                                  return [(0, a.Z)(e), t, (0, a.Z)(t)];
                              })(b)),
                    N = [b].concat(A).reduce(function (e, n) {
                        return e.concat(
                            (0, i.Z)(n) === l.d7
                                ? (0, o.Z)(t, {
                                      placement: n,
                                      boundary: g,
                                      rootBoundary: E,
                                      padding: m,
                                      flipVariations: S,
                                      allowedAutoPlacements: T
                                  })
                                : n
                        );
                    }, []),
                    C = t.rects.reference,
                    R = t.rects.popper,
                    O = new Map(),
                    D = !0,
                    L = N[0],
                    x = 0;
                x < N.length;
                x++
            ) {
                var w = N[x],
                    M = (0, i.Z)(w),
                    P = (0, u.Z)(w) === l.BL,
                    k = [l.we, l.I].indexOf(M) >= 0,
                    U = k ? 'width' : 'height',
                    G = (0, s.Z)(t, {
                        placement: w,
                        boundary: g,
                        rootBoundary: E,
                        altBoundary: v,
                        padding: m
                    }),
                    B = k ? (P ? l.F2 : l.t$) : P ? l.I : l.we;
                C[U] > R[U] && (B = (0, r.Z)(B));
                var Z = (0, r.Z)(B),
                    F = [];
                if (
                    (f && F.push(G[M] <= 0),
                    h && F.push(G[B] <= 0, G[Z] <= 0),
                    F.every(function (e) {
                        return e;
                    }))
                ) {
                    (L = w), (D = !1);
                    break;
                }
                O.set(w, F);
            }
            if (D) {
                for (
                    var V = S ? 3 : 1,
                        H = function (e) {
                            var t = N.find(function (t) {
                                var n = O.get(t);
                                if (n)
                                    return n.slice(0, e).every(function (e) {
                                        return e;
                                    });
                            });
                            if (t) return (L = t), 'break';
                        },
                        j = V;
                    j > 0 && 'break' !== H(j);
                    j--
                );
            }
            t.placement !== L && ((t.modifiersData[c]._skip = !0), (t.placement = L), (t.reset = !0));
        }
    },
    requiresIfExists: ['offset'],
    data: { _skip: !1 }
};
