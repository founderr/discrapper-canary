t.d(n, {
    Z: function () {
        return D;
    }
}),
    t(477488),
    t(47120);
var a = t(200651),
    r = t(192379),
    i = t(120356),
    o = t.n(i),
    l = t(299608),
    s = t.n(l),
    u = t(100621),
    c = t(442837),
    d = t(481060),
    f = t(794295),
    h = t(376641),
    _ = t(714338),
    p = t(95398),
    m = t(163268),
    C = t(394779),
    E = t(134432),
    g = t(169525),
    S = t(375954),
    L = t(585483),
    x = t(44488),
    A = t(341176),
    O = t(981631),
    v = t(689938),
    R = t(723638);
function N(e, n) {
    return ((e % n) + n) % n;
}
function b(e) {
    let { width: n, height: t } = e;
    return null == n || 0 === n || null == t || 0 === t;
}
function M(e) {
    let { children: n, hasMediaControls: t, isObscured: i, src: l } = e,
        [s, u] = (0, r.useState)(!1);
    return i
        ? (0, a.jsx)(p.a.Provider, {
              value: s,
              children: (0, a.jsx)(
                  p.Z,
                  {
                      type: p.Z.Types.ATTACHMENT,
                      reason: g.wk.EXPLICIT_CONTENT,
                      className: R.obscureContainer,
                      obscured: !0,
                      isSingleMosaicItem: !0,
                      obscurityControlClassName: o()({ [R.controlsOffset]: t && s }),
                      onToggleObscurity: (e) => {
                          e.stopPropagation(), e.nativeEvent.stopPropagation(), u((e) => !e);
                      },
                      children: (e) =>
                          (0, a.jsx)(a.Fragment, {
                              children: (0, a.jsx)('div', {
                                  className: o()(R.obscureWrapper, { [R.obscure]: e }),
                                  children: n(e)
                              })
                          })
                  },
                  l
              )
          })
        : (0, a.jsx)(a.Fragment, { children: n(!1) });
}
function D(e) {
    var n, t, i;
    let { items: o, onIndexChange: l, fit: p, startIndex: g = 0, shouldRedactExplicitContent: N = !1, shouldHideMediaOptions: D = !1, shouldAnimateCarousel: I = !1 } = e,
        [k, T] = (0, r.useState)(g),
        P = (0, r.useRef)(g),
        [y, j] = (0, r.useState)([]);
    (0, r.useEffect)(
        () => (
            _.Z.disable(),
            _.Z.enableTemp(h.P),
            () => {
                _.Z.disableTemp();
            }
        ),
        []
    ),
        (0, r.useEffect)(() => {
            var e, n;
            let t = (((k + 1) % (e = o.length)) + e) % e;
            let a = (((k - 1) % (n = o.length)) + n) % n;
            b(o[t]) && (0, E.po)(o[t].url), b(o[a]) && (0, E.po)(o[a].url);
        }, [k, o]);
    let w = (0, r.useCallback)(
        (e) => {
            var n;
            let t = e - P.current;
            T((e = ((e % (n = o.length)) + n) % n)), (P.current = e), j((e) => [...e, t]), null == l || l(e);
        },
        [l, o]
    );
    (0, r.useEffect)(() => {
        let e = s()(() => {
                w(P.current + 1);
            }, 300),
            n = s()(() => {
                w(P.current - 1);
            }, 300);
        return (
            L.S.subscribe(O.CkL.MODAL_CAROUSEL_NEXT, e),
            L.S.subscribe(O.CkL.MODAL_CAROUSEL_PREV, n),
            () => {
                L.S.unsubscribe(O.CkL.MODAL_CAROUSEL_NEXT, e), L.S.unsubscribe(O.CkL.MODAL_CAROUSEL_PREV, n);
            }
        );
    }, [w]);
    let Z = o[k],
        F = null !== (i = Z.sourceMetadata) && void 0 !== i ? i : {},
        W = null == F ? void 0 : null === (n = F.message) || void 0 === n ? void 0 : n.id,
        U = null == F ? void 0 : null === (t = F.message) || void 0 === t ? void 0 : t.channel_id,
        B = (0, c.e7)([S.Z], () => (null != U && null != W ? S.Z.getMessage(U, W) : null), [U, W]),
        G = null != B ? B : null == F ? void 0 : F.message,
        z = null != G && null != F.identifier ? (0, C.s)(G, F.identifier) : null,
        H = (0, m.KP)(
            {
                type: m.lJ.GenericMedia,
                media: Z
            },
            N
        ),
        X = D
            ? (e) => {
                  e.stopPropagation(), e.preventDefault();
              }
            : void 0,
        V = (function (e) {
            if (0 === e) return ['translateX(0)'];
            let n = ['translateX(100px)', 'translateX(-100px)'];
            return e > 0 ? n : n.toReversed();
        })(y[y.length - 1]),
        K = (0, d.useTransition)(
            Z,
            {
                key: Z.url,
                from: {
                    opacity: 0,
                    transform: V[0]
                },
                enter: {
                    opacity: 1,
                    transform: 'translateX(0)'
                },
                leave: {
                    opacity: 0,
                    transform: V[V.length - 1]
                },
                config: {
                    friction: 20,
                    tension: 250
                }
            },
            I ? 'respect-motion-settings' : 'animate-never'
        );
    return (0, a.jsxs)('div', {
        className: R.wrapper,
        children: [
            o.length > 1
                ? (0, a.jsx)(x.am, {
                      className: R.navPrev,
                      onClick: () => L.S.dispatch(O.CkL.MODAL_CAROUSEL_PREV)
                  })
                : null,
            K((e, n) => {
                var t;
                return (0, a.jsx)(a.Fragment, {
                    children: (0, a.jsx)(
                        u.animated.div,
                        {
                            style: e,
                            className: R.zoomedMediaFitWrapper,
                            children: (0, a.jsxs)('div', {
                                onClick: (e) => (null != p && [A.D.CONTAIN, A.D.SCALE_DOWN].includes(p) ? null : e.stopPropagation()),
                                children: [
                                    (0, a.jsx)(M, {
                                        isObscured: H,
                                        src: n.url,
                                        children: (e) =>
                                            (0, a.jsx)(A.Z, {
                                                media: n,
                                                fit: p,
                                                obscured: e,
                                                onContextMenu: X
                                            })
                                    }),
                                    ('IMAGE' !== n.type || null != n.original) &&
                                        !D &&
                                        (0, a.jsxs)('div', {
                                            className: R.optionsContainer,
                                            children: [
                                                (0, a.jsx)(f.Z, {
                                                    href: null !== (t = n.original) && void 0 !== t ? t : n.url,
                                                    className: R.downloadLink,
                                                    children: v.Z.Messages.OPEN_IN_BROWSER
                                                }),
                                                null != z && (0, a.jsx)(z, { className: R.forward })
                                            ]
                                        })
                                ]
                            })
                        },
                        n.url
                    )
                });
            }),
            o.length > 1
                ? (0, a.jsx)(x.Pz, {
                      className: R.navNext,
                      onClick: () => L.S.dispatch(O.CkL.MODAL_CAROUSEL_NEXT)
                  })
                : null
        ]
    });
}
