n.d(t, {
    Z: function () {
        return D;
    }
}),
    n(477488),
    n(47120);
var r = n(200651),
    i = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(299608),
    l = n.n(o),
    u = n(100621),
    c = n(442837),
    d = n(481060),
    _ = n(794295),
    E = n(376641),
    f = n(714338),
    h = n(95398),
    p = n(163268),
    I = n(394779),
    m = n(134432),
    T = n(169525),
    S = n(375954),
    g = n(585483),
    A = n(44488),
    N = n(341176),
    R = n(981631),
    O = n(689938),
    v = n(723638);
function C(e, t) {
    return ((e % t) + t) % t;
}
function L(e) {
    let { children: t, hasMediaControls: n, isObscured: a, src: o } = e,
        [l, u] = (0, i.useState)(!1);
    return a
        ? (0, r.jsx)(h.a.Provider, {
              value: l,
              children: (0, r.jsx)(
                  h.Z,
                  {
                      type: h.Z.Types.ATTACHMENT,
                      reason: T.wk.EXPLICIT_CONTENT,
                      className: v.obscureContainer,
                      obscured: !0,
                      isSingleMosaicItem: !0,
                      obscurityControlClassName: s()({ [v.controlsOffset]: n && l }),
                      onToggleObscurity: (e) => {
                          e.stopPropagation(), e.nativeEvent.stopPropagation(), u((e) => !e);
                      },
                      children: (e) =>
                          (0, r.jsx)(r.Fragment, {
                              children: (0, r.jsx)('div', {
                                  className: s()(v.obscureWrapper, { [v.obscure]: e }),
                                  children: t(e)
                              })
                          })
                  },
                  o
              )
          })
        : (0, r.jsx)(r.Fragment, { children: t(!1) });
}
function D(e) {
    var t, n, a;
    let { items: s, onIndexChange: o, fit: h, startIndex: T = 0, shouldRedactExplicitContent: C = !1, shouldHideMediaOptions: D = !1, shouldAnimateCarousel: y = !1 } = e,
        [b, M] = (0, i.useState)(T),
        P = (0, i.useRef)(T),
        [U, w] = (0, i.useState)([]);
    (0, i.useEffect)(
        () => (
            f.Z.disable(),
            f.Z.enableTemp(E.P),
            () => {
                f.Z.disableTemp();
            }
        ),
        []
    ),
        (0, i.useEffect)(() => {
            var e, t;
            let n = (((b + 1) % (e = s.length)) + e) % e;
            let r = (((b - 1) % (t = s.length)) + t) % t;
            (0, m.po)(s[n].url), (0, m.po)(s[r].url);
        }, [b, s]);
    let x = (0, i.useCallback)(
        (e) => {
            var t;
            let n = e - P.current;
            M((e = ((e % (t = s.length)) + t) % t)), (P.current = e), w((e) => [...e, n]), null == o || o(e);
        },
        [o, s]
    );
    (0, i.useEffect)(() => {
        let e = l()(() => {
                x(P.current + 1);
            }, 300),
            t = l()(() => {
                x(P.current - 1);
            }, 300);
        return (
            g.S.subscribe(R.CkL.MODAL_CAROUSEL_NEXT, e),
            g.S.subscribe(R.CkL.MODAL_CAROUSEL_PREV, t),
            () => {
                g.S.unsubscribe(R.CkL.MODAL_CAROUSEL_NEXT, e), g.S.unsubscribe(R.CkL.MODAL_CAROUSEL_PREV, t);
            }
        );
    }, [x]);
    let G = s[b],
        k = null !== (a = G.sourceMetadata) && void 0 !== a ? a : {},
        B = null == k ? void 0 : null === (t = k.message) || void 0 === t ? void 0 : t.id,
        F = null == k ? void 0 : null === (n = k.message) || void 0 === n ? void 0 : n.channel_id,
        V = (0, c.e7)([S.Z], () => (null != F && null != B ? S.Z.getMessage(F, B) : null), [F, B]),
        H = null != V ? V : null == k ? void 0 : k.message,
        Z = null != H && null != k.identifier ? (0, I.s)(H, k.identifier) : null,
        Y = (0, p.KP)(
            {
                type: p.lJ.GenericMedia,
                media: G
            },
            C
        ),
        j = D
            ? (e) => {
                  e.stopPropagation(), e.preventDefault();
              }
            : void 0,
        W = (function (e) {
            if (0 === e) return ['translateX(0)'];
            let t = ['translateX(100px)', 'translateX(-100px)'];
            return e > 0 ? t : t.toReversed();
        })(U[U.length - 1]),
        K = (0, d.useTransition)(
            G,
            {
                key: G.url,
                from: {
                    opacity: 0,
                    transform: W[0]
                },
                enter: {
                    opacity: 1,
                    transform: 'translateX(0)'
                },
                leave: {
                    opacity: 0,
                    transform: W[W.length - 1]
                },
                config: {
                    friction: 20,
                    tension: 250
                }
            },
            y ? 'respect-motion-settings' : 'animate-never'
        );
    return (0, r.jsxs)('div', {
        className: v.wrapper,
        children: [
            s.length > 1
                ? (0, r.jsx)(A.am, {
                      className: v.navPrev,
                      onClick: () => g.S.dispatch(R.CkL.MODAL_CAROUSEL_PREV)
                  })
                : null,
            K((e, t) => {
                var n;
                return (0, r.jsx)(r.Fragment, {
                    children: (0, r.jsx)(
                        u.animated.div,
                        {
                            style: e,
                            className: v.zoomedMediaFitWrapper,
                            children: (0, r.jsxs)('div', {
                                onClick: (e) => (null != h && [N.D.CONTAIN, N.D.SCALE_DOWN].includes(h) ? null : e.stopPropagation()),
                                children: [
                                    (0, r.jsx)(L, {
                                        isObscured: Y,
                                        src: t.url,
                                        children: (e) =>
                                            (0, r.jsx)(N.Z, {
                                                media: t,
                                                fit: h,
                                                obscured: e,
                                                onContextMenu: j
                                            })
                                    }),
                                    ('IMAGE' !== t.type || null != t.original) &&
                                        !D &&
                                        (0, r.jsxs)('div', {
                                            className: v.optionsContainer,
                                            children: [
                                                (0, r.jsx)(_.Z, {
                                                    href: null !== (n = t.original) && void 0 !== n ? n : t.url,
                                                    className: v.downloadLink,
                                                    children: O.Z.Messages.OPEN_IN_BROWSER
                                                }),
                                                null != Z && (0, r.jsx)(Z, { className: v.forward })
                                            ]
                                        })
                                ]
                            })
                        },
                        t.url
                    )
                });
            }),
            s.length > 1
                ? (0, r.jsx)(A.Pz, {
                      className: v.navNext,
                      onClick: () => g.S.dispatch(R.CkL.MODAL_CAROUSEL_NEXT)
                  })
                : null
        ]
    });
}
