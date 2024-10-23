t.d(n, {
    Z: function () {
        return M;
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
function M(e) {
    var n, t, i;
    let { items: o, onIndexChange: l, fit: p, startIndex: g = 0, shouldRedactExplicitContent: N = !1, shouldHideMediaOptions: M = !1, shouldAnimateCarousel: D = !1 } = e,
        [I, k] = (0, r.useState)(g),
        T = (0, r.useRef)(g),
        [P, y] = (0, r.useState)([]);
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
            let t = (((I + 1) % (e = o.length)) + e) % e;
            let a = (((I - 1) % (n = o.length)) + n) % n;
            (0, E.po)(o[t].url), (0, E.po)(o[a].url);
        }, [I, o]);
    let j = (0, r.useCallback)(
        (e) => {
            var n;
            let t = e - T.current;
            k((e = ((e % (n = o.length)) + n) % n)), (T.current = e), y((e) => [...e, t]), null == l || l(e);
        },
        [l, o]
    );
    (0, r.useEffect)(() => {
        let e = s()(() => {
                j(T.current + 1);
            }, 300),
            n = s()(() => {
                j(T.current - 1);
            }, 300);
        return (
            L.S.subscribe(O.CkL.MODAL_CAROUSEL_NEXT, e),
            L.S.subscribe(O.CkL.MODAL_CAROUSEL_PREV, n),
            () => {
                L.S.unsubscribe(O.CkL.MODAL_CAROUSEL_NEXT, e), L.S.unsubscribe(O.CkL.MODAL_CAROUSEL_PREV, n);
            }
        );
    }, [j]);
    let w = o[I],
        Z = null !== (i = w.sourceMetadata) && void 0 !== i ? i : {},
        F = null == Z ? void 0 : null === (n = Z.message) || void 0 === n ? void 0 : n.id,
        W = null == Z ? void 0 : null === (t = Z.message) || void 0 === t ? void 0 : t.channel_id,
        U = (0, c.e7)([S.Z], () => (null != W && null != F ? S.Z.getMessage(W, F) : null), [W, F]),
        B = null != U ? U : null == Z ? void 0 : Z.message,
        G = null != B && null != Z.identifier ? (0, C.s)(B, Z.identifier) : null,
        z = (0, m.KP)(
            {
                type: m.lJ.GenericMedia,
                media: w
            },
            N
        ),
        H = M
            ? (e) => {
                  e.stopPropagation(), e.preventDefault();
              }
            : void 0,
        X = (function (e) {
            if (0 === e) return ['translateX(0)'];
            let n = ['translateX(100px)', 'translateX(-100px)'];
            return e > 0 ? n : n.toReversed();
        })(P[P.length - 1]),
        V = (0, d.useTransition)(
            w,
            {
                key: w.url,
                from: {
                    opacity: 0,
                    transform: X[0]
                },
                enter: {
                    opacity: 1,
                    transform: 'translateX(0)'
                },
                leave: {
                    opacity: 0,
                    transform: X[X.length - 1]
                },
                config: {
                    friction: 20,
                    tension: 250
                }
            },
            D ? 'respect-motion-settings' : 'animate-never'
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
            V((e, n) => {
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
                                    (0, a.jsx)(b, {
                                        isObscured: z,
                                        src: n.url,
                                        children: (e) =>
                                            (0, a.jsx)(A.Z, {
                                                media: n,
                                                fit: p,
                                                obscured: e,
                                                onContextMenu: H
                                            })
                                    }),
                                    ('IMAGE' !== n.type || null != n.original) &&
                                        !M &&
                                        (0, a.jsxs)('div', {
                                            className: R.optionsContainer,
                                            children: [
                                                (0, a.jsx)(f.Z, {
                                                    href: null !== (t = n.original) && void 0 !== t ? t : n.url,
                                                    className: R.downloadLink,
                                                    children: v.Z.Messages.OPEN_IN_BROWSER
                                                }),
                                                null != G && (0, a.jsx)(G, { className: R.forward })
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
