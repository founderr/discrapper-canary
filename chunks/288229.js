t.d(n, {
    Z: function () {
        return R;
    }
}),
    t(477488),
    t(47120);
var a = t(200651),
    r = t(192379),
    i = t(120356),
    l = t.n(i),
    o = t(299608),
    s = t.n(o),
    u = t(752877),
    c = t(442837),
    d = t(481060),
    f = t(794295),
    h = t(95398),
    _ = t(247206),
    p = t(394779),
    m = t(134432),
    C = t(169525),
    E = t(375954),
    g = t(585483),
    S = t(44488),
    L = t(341176),
    x = t(981631),
    v = t(388032),
    A = t(401920);
function O(e, n) {
    return ((e % n) + n) % n;
}
function b(e) {
    let { width: n, height: t } = e;
    return null == n || 0 === n || null == t || 0 === t;
}
function N(e) {
    let { children: n, hasMediaControls: t, isObscured: i, src: o } = e,
        [s, u] = (0, r.useState)(!1);
    return i
        ? (0, a.jsx)(h.a.Provider, {
              value: s,
              children: (0, a.jsx)(
                  h.Z,
                  {
                      type: h.Z.Types.ATTACHMENT,
                      reason: C.wk.EXPLICIT_CONTENT,
                      className: A.obscureContainer,
                      obscured: !0,
                      isSingleMosaicItem: !0,
                      obscurityControlClassName: l()({ [A.controlsOffset]: t && s }),
                      onToggleObscurity: (e) => {
                          e.stopPropagation(), e.nativeEvent.stopPropagation(), u((e) => !e);
                      },
                      children: (e) =>
                          (0, a.jsx)(a.Fragment, {
                              children: (0, a.jsx)('div', {
                                  className: l()(A.obscureWrapper, { [A.obscure]: e }),
                                  children: n(e)
                              })
                          })
                  },
                  o
              )
          })
        : (0, a.jsx)(a.Fragment, { children: n(!1) });
}
function R(e) {
    var n, t, i;
    let { items: l, onIndexChange: o, fit: h, startIndex: C = 0, shouldRedactExplicitContent: O = !1, shouldHideMediaOptions: R = !1, shouldAnimateCarousel: D = !1 } = e,
        [M, I] = (0, r.useState)(C),
        T = (0, r.useRef)(C),
        [k, y] = (0, r.useState)([]);
    (0, r.useEffect)(() => {
        var e, n;
        let t = (((M + 1) % (e = l.length)) + e) % e;
        let a = (((M - 1) % (n = l.length)) + n) % n;
        b(l[t]) && (0, m.po)(l[t].url), b(l[a]) && (0, m.po)(l[a].url);
    }, [M, l]);
    let P = (0, r.useCallback)(
        (e) => {
            var n;
            let t = e - T.current;
            I((e = ((e % (n = l.length)) + n) % n)), (T.current = e), y((e) => [...e, t]), null == o || o(e);
        },
        [o, l]
    );
    (0, r.useEffect)(() => {
        let e = s()(() => {
                P(T.current + 1);
            }, 300),
            n = s()(() => {
                P(T.current - 1);
            }, 300);
        return (
            g.S.subscribe(x.CkL.MODAL_CAROUSEL_NEXT, e),
            g.S.subscribe(x.CkL.MODAL_CAROUSEL_PREV, n),
            () => {
                g.S.unsubscribe(x.CkL.MODAL_CAROUSEL_NEXT, e), g.S.unsubscribe(x.CkL.MODAL_CAROUSEL_PREV, n);
            }
        );
    }, [P]);
    let j = l[M],
        w = null !== (i = j.sourceMetadata) && void 0 !== i ? i : {},
        Z = null == w ? void 0 : null === (n = w.message) || void 0 === n ? void 0 : n.id,
        F = null == w ? void 0 : null === (t = w.message) || void 0 === t ? void 0 : t.channel_id,
        U = (0, c.e7)([E.Z], () => (null != F && null != Z ? E.Z.getMessage(F, Z) : null), [F, Z]),
        W = null != U ? U : null == w ? void 0 : w.message,
        G = null != W && null != w.identifier ? (0, p.s)(W, w.identifier) : null,
        H = (0, _.KP)(
            {
                type: _.lJ.GenericMedia,
                media: j
            },
            O
        ),
        B = R
            ? (e) => {
                  e.stopPropagation(), e.preventDefault();
              }
            : void 0,
        z = (function (e) {
            if (0 === e) return ['translateX(0)'];
            let n = ['translateX(100px)', 'translateX(-100px)'];
            return e > 0 ? n : n.toReversed();
        })(k[k.length - 1]),
        X = (0, d.useTransition)(
            j,
            {
                key: j.url,
                from: {
                    opacity: 0,
                    transform: z[0]
                },
                enter: {
                    opacity: 1,
                    transform: 'translateX(0)'
                },
                leave: {
                    opacity: 0,
                    transform: z[z.length - 1]
                },
                config: {
                    friction: 20,
                    tension: 250
                }
            },
            D ? 'respect-motion-settings' : 'animate-never'
        );
    return (0, a.jsxs)('div', {
        className: A.wrapper,
        children: [
            l.length > 1
                ? (0, a.jsx)(S.am, {
                      className: A.navPrev,
                      onClick: () => g.S.dispatch(x.CkL.MODAL_CAROUSEL_PREV)
                  })
                : null,
            X((e, n) => {
                var t;
                return (0, a.jsx)(a.Fragment, {
                    children: (0, a.jsx)(
                        u.animated.div,
                        {
                            style: e,
                            className: A.zoomedMediaFitWrapper,
                            children: (0, a.jsxs)('div', {
                                onClick: (e) => (null != h && [L.D.CONTAIN, L.D.SCALE_DOWN].includes(h) ? null : e.stopPropagation()),
                                children: [
                                    (0, a.jsx)(N, {
                                        isObscured: H,
                                        src: n.url,
                                        children: (e) =>
                                            (0, a.jsx)(L.Z, {
                                                media: n,
                                                fit: h,
                                                obscured: e,
                                                onContextMenu: B
                                            })
                                    }),
                                    ('IMAGE' !== n.type || null != n.original) &&
                                        !R &&
                                        (0, a.jsxs)('div', {
                                            className: A.optionsContainer,
                                            children: [
                                                (0, a.jsx)(f.Z, {
                                                    href: null !== (t = n.original) && void 0 !== t ? t : n.url,
                                                    className: A.downloadLink,
                                                    children: v.intl.string(v.t.q5jLJC)
                                                }),
                                                null != G && (0, a.jsx)(G, { className: A.forward })
                                            ]
                                        })
                                ]
                            })
                        },
                        n.url
                    )
                });
            }),
            l.length > 1
                ? (0, a.jsx)(S.Pz, {
                      className: A.navNext,
                      onClick: () => g.S.dispatch(x.CkL.MODAL_CAROUSEL_NEXT)
                  })
                : null
        ]
    });
}
