t.d(n, {
    Z: function () {
        return R;
    }
}),
    t(477488),
    t(47120);
var r = t(200651),
    a = t(192379),
    i = t(120356),
    l = t.n(i),
    o = t(299608),
    s = t.n(o),
    u = t(100621),
    c = t(484957),
    d = t(481060),
    m = t(376641),
    _ = t(714338),
    f = t(95398),
    h = t(163268),
    x = t(134432),
    E = t(169525),
    p = t(585483),
    C = t(212459),
    A = t(683528),
    g = t(549635),
    I = t(981631),
    L = t(689938),
    S = t(193889);
function M(e, n) {
    return ((e % n) + n) % n;
}
function O(e) {
    let { width: n, height: t } = e;
    return null == n || 0 === n || null == t || 0 === t;
}
function v(e) {
    let { children: n, isObscured: t, src: i } = e,
        [o, s] = a.useState(!1),
        u = a.useCallback(() => {
            s((e) => !e);
        }, []);
    return t
        ? (0, r.jsx)(f.a.Provider, {
              value: o,
              children: (0, r.jsx)(
                  f.Z,
                  {
                      type: f.Z.Types.ATTACHMENT,
                      reason: E.wk.EXPLICIT_CONTENT,
                      obscured: !0,
                      isSingleMosaicItem: !0,
                      onToggleObscurity: u,
                      children: (e) =>
                          (0, r.jsx)(r.Fragment, {
                              children: (0, r.jsx)('div', {
                                  className: l()(S.obscureWrapper, { [S.obscure]: e }),
                                  children: n(e)
                              })
                          })
                  },
                  i
              )
          })
        : (0, r.jsx)(r.Fragment, { children: n(!1) });
}
function R(e) {
    var n;
    let { items: t, onIndexChange: i, startIndex: l = 0, shouldRedactExplicitContent: o = !1, shouldHideMediaOptions: f = !1 } = e,
        [E, M] = a.useState(l),
        R = a.useRef(l),
        [b, N] = a.useState([]),
        { zoomed: j, setZoomed: y } = (0, C.Y)();
    a.useEffect(
        () => (
            _.Z.disable(),
            _.Z.enableTemp(m.P),
            () => {
                _.Z.disableTemp();
            }
        ),
        []
    ),
        a.useEffect(() => {
            var e, n;
            let r = (((E + 1) % (e = t.length)) + e) % e;
            let a = (((E - 1) % (n = t.length)) + n) % n;
            O(t[r]) && (0, x.po)(t[r].url), O(t[a]) && (0, x.po)(t[a].url);
        }, [E, t]);
    let T = a.useCallback(
        (e) => {
            var n;
            let r = e - R.current;
            M((e = ((e % (n = t.length)) + n) % n)), (R.current = e), N((e) => [...e, r]), null == i || i(e), y(!1);
        },
        [i, t, y]
    );
    a.useEffect(() => {
        let e = s()(() => {
                T(R.current + 1);
            }, 300),
            n = s()(() => {
                T(R.current - 1);
            }, 300);
        return (
            p.S.subscribe(I.CkL.MODAL_CAROUSEL_NEXT, e),
            p.S.subscribe(I.CkL.MODAL_CAROUSEL_PREV, n),
            () => {
                p.S.unsubscribe(I.CkL.MODAL_CAROUSEL_NEXT, e), p.S.unsubscribe(I.CkL.MODAL_CAROUSEL_PREV, n);
            }
        );
    }, [T, y]);
    let D = t[E],
        k = (0, h.KP)(
            {
                type: h.lJ.GenericMedia,
                media: D
            },
            o
        ),
        Z = f
            ? (e) => {
                  e.stopPropagation(), e.preventDefault();
              }
            : void 0,
        P = (function (e) {
            if (0 === e) return ['translateX(0)'];
            let n = ['translateX(100px)', 'translateX(-100px)'];
            return e > 0 ? n : n.toReversed();
        })(null !== (n = b[b.length - 1]) && void 0 !== n ? n : 0),
        B = (0, d.useTransition)(D, {
            key: D.url,
            from: {
                opacity: 0,
                transform: P[0]
            },
            enter: {
                opacity: 1,
                transform: 'translateX(0)'
            },
            leave: {
                opacity: 0,
                transform: P[P.length - 1]
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
                className: S.wrapper,
                children: [
                    U
                        ? (0, r.jsx)(d.CircleIconButton, {
                              className: S.navPrev,
                              size: d.CircleIconButtonSizes.SIZE_36,
                              onClick: () => p.S.dispatch(I.CkL.MODAL_CAROUSEL_PREV),
                              icon: (0, r.jsx)(c.j, {}),
                              tooltip: L.Z.Messages.PAGINATION_PREVIOUS,
                              color: d.CircleIconButtonColors.PRIMARY
                          })
                        : null,
                    (0, r.jsx)('div', {
                        className: S.mediaContainer,
                        children: B((e, n) =>
                            (0, r.jsx)(r.Fragment, {
                                children: (0, r.jsx)(
                                    u.animated.div,
                                    {
                                        style: e,
                                        className: S.mediaWrapper,
                                        children: (0, r.jsx)(v, {
                                            isObscured: !j && k,
                                            src: n.url,
                                            children: (e) =>
                                                (0, r.jsx)(g.Z, {
                                                    media: n,
                                                    obscured: e,
                                                    onContextMenu: Z
                                                })
                                        })
                                    },
                                    n.url
                                )
                            })
                        )
                    }),
                    U
                        ? (0, r.jsx)(d.CircleIconButton, {
                              className: S.navNext,
                              size: d.CircleIconButtonSizes.SIZE_36,
                              onClick: () => p.S.dispatch(I.CkL.MODAL_CAROUSEL_NEXT),
                              icon: (0, r.jsx)(d.ArrowLargeRightIcon, {}),
                              tooltip: L.Z.Messages.PAGINATION_NEXT,
                              color: d.CircleIconButtonColors.PRIMARY
                          })
                        : null
                ]
            }),
            U &&
                (0, r.jsx)(A.Z, {
                    items: t,
                    currentIndex: E,
                    onGalleryItemClick: T
                })
        ]
    });
}
