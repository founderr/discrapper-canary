t.d(e, {
    Z: function () {
        return b;
    }
}),
    t(477488),
    t(47120);
var r = t(200651),
    i = t(192379),
    l = t(120356),
    o = t.n(l),
    a = t(299608),
    s = t.n(a),
    u = t(100621),
    c = t(484957),
    d = t(481060),
    m = t(376641),
    f = t(714338),
    h = t(95398),
    _ = t(163268),
    x = t(134432),
    p = t(169525),
    C = t(585483),
    g = t(212459),
    S = t(683528),
    E = t(549635),
    L = t(981631),
    v = t(388032),
    A = t(193889);
function I(n, e) {
    return ((n % e) + e) % e;
}
function O(n) {
    let { width: e, height: t } = n;
    return null == e || 0 === e || null == t || 0 === t;
}
function M(n) {
    let { children: e, isObscured: t, src: l } = n,
        [a, s] = i.useState(!1),
        u = i.useCallback(() => {
            s((n) => !n);
        }, []);
    return t
        ? (0, r.jsx)(h.a.Provider, {
              value: a,
              children: (0, r.jsx)(
                  h.Z,
                  {
                      type: h.Z.Types.ATTACHMENT,
                      reason: p.wk.EXPLICIT_CONTENT,
                      obscured: !0,
                      isSingleMosaicItem: !0,
                      onToggleObscurity: u,
                      children: (n) =>
                          (0, r.jsx)(r.Fragment, {
                              children: (0, r.jsx)('div', {
                                  className: o()(A.obscureWrapper, { [A.obscure]: n }),
                                  children: e(n)
                              })
                          })
                  },
                  l
              )
          })
        : (0, r.jsx)(r.Fragment, { children: e(!1) });
}
function b(n) {
    var e;
    let { items: t, onIndexChange: l, startIndex: o = 0, shouldRedactExplicitContent: a = !1, shouldHideMediaOptions: h = !1 } = n,
        [p, I] = i.useState(o),
        b = i.useRef(o),
        [R, j] = i.useState([]),
        { zoomed: y, setZoomed: D } = (0, g.Y)();
    i.useEffect(
        () => (
            f.Z.disable(),
            f.Z.enableTemp(m.P),
            () => {
                f.Z.disableTemp();
            }
        ),
        []
    ),
        i.useEffect(() => {
            var n, e;
            let r = (((p + 1) % (n = t.length)) + n) % n;
            let i = (((p - 1) % (e = t.length)) + e) % e;
            O(t[r]) && (0, x.po)(t[r].url), O(t[i]) && (0, x.po)(t[i].url);
        }, [p, t]);
    let N = i.useCallback(
        (n) => {
            var e;
            let r = n - b.current;
            I((n = ((n % (e = t.length)) + e) % e)), (b.current = n), j((n) => [...n, r]), null == l || l(n), D(!1);
        },
        [l, t, D]
    );
    i.useEffect(() => {
        let n = s()(() => {
                N(b.current + 1);
            }, 300),
            e = s()(() => {
                N(b.current - 1);
            }, 300);
        return (
            C.S.subscribe(L.CkL.MODAL_CAROUSEL_NEXT, n),
            C.S.subscribe(L.CkL.MODAL_CAROUSEL_PREV, e),
            () => {
                C.S.unsubscribe(L.CkL.MODAL_CAROUSEL_NEXT, n), C.S.unsubscribe(L.CkL.MODAL_CAROUSEL_PREV, e);
            }
        );
    }, [N, D]);
    let k = t[p],
        T = (0, _.KP)(
            {
                type: _.lJ.GenericMedia,
                media: k
            },
            a
        ),
        P = h
            ? (n) => {
                  n.stopPropagation(), n.preventDefault();
              }
            : void 0,
        B = (function (n) {
            if (0 === n) return ['translateX(0)'];
            let e = ['translateX(100px)', 'translateX(-100px)'];
            return n > 0 ? e : e.toReversed();
        })(null !== (e = R[R.length - 1]) && void 0 !== e ? e : 0),
        Z = (0, d.useTransition)(k, {
            key: k.url,
            from: {
                opacity: 0,
                transform: B[0]
            },
            enter: {
                opacity: 1,
                transform: 'translateX(0)'
            },
            leave: {
                opacity: 0,
                transform: B[B.length - 1]
            },
            config: {
                friction: 20,
                tension: 250
            }
        }),
        U = t.length > 1;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)('div', {
                className: A.wrapper,
                children: [
                    U
                        ? (0, r.jsx)(d.CircleIconButton, {
                              className: A.navPrev,
                              size: d.CircleIconButtonSizes.SIZE_36,
                              onClick: () => C.S.dispatch(L.CkL.MODAL_CAROUSEL_PREV),
                              icon: (0, r.jsx)(c.j, {}),
                              tooltip: v.intl.string(v.t.vgfxaG),
                              color: d.CircleIconButtonColors.PRIMARY
                          })
                        : null,
                    (0, r.jsx)('div', {
                        className: A.mediaContainer,
                        children: Z((n, e) =>
                            (0, r.jsx)(r.Fragment, {
                                children: (0, r.jsx)(
                                    u.animated.div,
                                    {
                                        style: n,
                                        className: A.mediaWrapper,
                                        children: (0, r.jsx)(M, {
                                            isObscured: !y && T,
                                            src: e.url,
                                            children: (n) =>
                                                (0, r.jsx)(E.Z, {
                                                    media: e,
                                                    obscured: n,
                                                    onContextMenu: P
                                                })
                                        })
                                    },
                                    e.url
                                )
                            })
                        )
                    }),
                    U
                        ? (0, r.jsx)(d.CircleIconButton, {
                              className: A.navNext,
                              size: d.CircleIconButtonSizes.SIZE_36,
                              onClick: () => C.S.dispatch(L.CkL.MODAL_CAROUSEL_NEXT),
                              icon: (0, r.jsx)(d.ArrowLargeRightIcon, {}),
                              tooltip: v.intl.string(v.t.XiOHRU),
                              color: d.CircleIconButtonColors.PRIMARY
                          })
                        : null
                ]
            }),
            U &&
                (0, r.jsx)(S.Z, {
                    items: t,
                    currentIndex: p,
                    onGalleryItemClick: N
                })
        ]
    });
}
