t.d(n, {
    Z: function () {
        return N;
    }
}),
    t(477488),
    t(47120);
var a = t(735250),
    r = t(470079),
    i = t(120356),
    l = t.n(i),
    s = t(299608),
    u = t.n(s),
    o = t(212433),
    c = t(442837),
    d = t(481060),
    _ = t(794295),
    f = t(376641),
    h = t(714338),
    m = t(95398),
    E = t(163268),
    S = t(394779),
    A = t(134432),
    O = t(169525),
    g = t(375954),
    C = t(585483),
    p = t(44488),
    R = t(341176),
    L = t(981631),
    v = t(689938),
    M = t(723638);
function D(e, n) {
    return ((e % n) + n) % n;
}
function x(e) {
    let { children: n, hasMediaControls: t, isObscured: i, src: s } = e,
        [u, o] = (0, r.useState)(!1);
    return i
        ? (0, a.jsx)(m.a.Provider, {
              value: u,
              children: (0, a.jsx)(
                  m.Z,
                  {
                      type: m.Z.Types.ATTACHMENT,
                      reason: O.wk.EXPLICIT_CONTENT,
                      className: M.obscureContainer,
                      obscured: !0,
                      isSingleMosaicItem: !0,
                      obscurityControlClassName: l()({ [M.controlsOffset]: t && u }),
                      onToggleObscurity: (e) => {
                          e.stopPropagation(), e.nativeEvent.stopPropagation(), o((e) => !e);
                      },
                      children: (e) =>
                          (0, a.jsx)(a.Fragment, {
                              children: (0, a.jsx)('div', {
                                  className: l()(M.obscureWrapper, { [M.obscure]: e }),
                                  children: n(e)
                              })
                          })
                  },
                  s
              )
          })
        : (0, a.jsx)(a.Fragment, { children: n(!1) });
}
function N(e) {
    var n, t, i;
    let { items: l, onIndexChange: s, fit: m, startIndex: O = 0, shouldRedactExplicitContent: D = !1, shouldHideMediaOptions: N = !1, shouldAnimateCarousel: I = !1 } = e,
        [T, y] = (0, r.useState)(O),
        b = (0, r.useRef)(O),
        [k, j] = (0, r.useState)([]);
    (0, r.useEffect)(
        () => (
            h.Z.disable(),
            h.Z.enableTemp(f.P),
            () => {
                h.Z.disableTemp();
            }
        ),
        []
    ),
        (0, r.useEffect)(() => {
            var e, n;
            let t = (((T + 1) % (e = l.length)) + e) % e;
            let a = (((T - 1) % (n = l.length)) + n) % n;
            (0, A.po)(l[t].url), (0, A.po)(l[a].url);
        }, [T, l]);
    let P = (0, r.useCallback)(
        (e) => {
            var n;
            let t = e - b.current;
            y((e = ((e % (n = l.length)) + n) % n)), (b.current = e), j((e) => [...e, t]), null == s || s(e);
        },
        [s, l]
    );
    (0, r.useEffect)(() => {
        let e = u()(() => {
                P(b.current + 1);
            }, 300),
            n = u()(() => {
                P(b.current - 1);
            }, 300);
        return (
            C.S.subscribe(L.CkL.MODAL_CAROUSEL_NEXT, e),
            C.S.subscribe(L.CkL.MODAL_CAROUSEL_PREV, n),
            () => {
                C.S.unsubscribe(L.CkL.MODAL_CAROUSEL_NEXT, e), C.S.unsubscribe(L.CkL.MODAL_CAROUSEL_PREV, n);
            }
        );
    }, [P]);
    let Z = l[T],
        F = null !== (i = Z.sourceMetadata) && void 0 !== i ? i : {},
        w = null == F ? void 0 : null === (n = F.message) || void 0 === n ? void 0 : n.id,
        W = null == F ? void 0 : null === (t = F.message) || void 0 === t ? void 0 : t.channel_id,
        G = (0, c.e7)([g.Z], () => (null != W && null != w ? g.Z.getMessage(W, w) : null), [W, w]),
        U = null != G ? G : null == F ? void 0 : F.message,
        H = null != U && null != F.identifier ? (0, S.s)(U, F.identifier) : null,
        X = (0, E.KP)(
            {
                type: E.lJ.GenericMedia,
                media: Z
            },
            D
        ),
        q = N
            ? (e) => {
                  e.stopPropagation(), e.preventDefault();
              }
            : void 0,
        z = (function (e) {
            if (0 === e) return ['translateX(0)'];
            let n = ['translateX(100px)', 'translateX(-100px)'];
            return e > 0 ? n : n.toReversed();
        })(k[k.length - 1]),
        V = (0, d.useTransition)(
            Z,
            {
                key: Z.url,
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
            I ? 'respect-motion-settings' : 'animate-never'
        );
    return (0, a.jsxs)('div', {
        className: M.wrapper,
        children: [
            l.length > 1
                ? (0, a.jsx)(p.am, {
                      className: M.navPrev,
                      onClick: () => C.S.dispatch(L.CkL.MODAL_CAROUSEL_PREV)
                  })
                : null,
            V((e, n) => {
                var t;
                return (0, a.jsx)(a.Fragment, {
                    children: (0, a.jsx)(
                        o.animated.div,
                        {
                            style: e,
                            className: M.zoomedMediaFitWrapper,
                            children: (0, a.jsxs)('div', {
                                onClick: (e) => (null != m && [R.D.CONTAIN, R.D.SCALE_DOWN].includes(m) ? null : e.stopPropagation()),
                                children: [
                                    (0, a.jsx)(x, {
                                        isObscured: X,
                                        src: n.url,
                                        children: (e) =>
                                            (0, a.jsx)(R.Z, {
                                                media: n,
                                                fit: m,
                                                obscured: e,
                                                onContextMenu: q
                                            })
                                    }),
                                    ('IMAGE' !== n.type || null != n.original) &&
                                        !N &&
                                        (0, a.jsxs)('div', {
                                            className: M.optionsContainer,
                                            children: [
                                                (0, a.jsx)(_.Z, {
                                                    href: null !== (t = n.original) && void 0 !== t ? t : n.url,
                                                    className: M.downloadLink,
                                                    children: v.Z.Messages.OPEN_IN_BROWSER
                                                }),
                                                null != H && (0, a.jsx)(H, { className: M.forward })
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
                ? (0, a.jsx)(p.Pz, {
                      className: M.navNext,
                      onClick: () => C.S.dispatch(L.CkL.MODAL_CAROUSEL_NEXT)
                  })
                : null
        ]
    });
}
