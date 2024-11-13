t.d(n, {
    Z: function () {
        return j;
    }
}),
    t(477488),
    t(47120);
var r = t(200651),
    i = t(192379),
    a = t(120356),
    l = t.n(a),
    o = t(299608),
    s = t.n(o),
    u = t(100621),
    c = t(484957),
    d = t(481060),
    m = t(376641),
    h = t(714338),
    f = t(95398),
    p = t(247206),
    g = t(134432),
    _ = t(169525),
    x = t(585483),
    C = t(212459),
    v = t(683528),
    S = t(549635),
    E = t(981631),
    y = t(388032),
    L = t(193889);
function I(e, n) {
    return ((e % n) + n) % n;
}
function A(e) {
    let { width: n, height: t } = e;
    return null == n || 0 === n || null == t || 0 === t;
}
function R(e) {
    let { children: n, isObscured: t, src: a } = e,
        [o, s] = i.useState(!1),
        u = i.useCallback(() => {
            s((e) => !e);
        }, []);
    return t
        ? (0, r.jsx)(f.a.Provider, {
              value: o,
              children: (0, r.jsx)(
                  f.Z,
                  {
                      type: f.Z.Types.ATTACHMENT,
                      reason: _.wk.EXPLICIT_CONTENT,
                      obscured: !0,
                      isSingleMosaicItem: !0,
                      onToggleObscurity: u,
                      children: (e) =>
                          (0, r.jsx)(r.Fragment, {
                              children: (0, r.jsx)('div', {
                                  className: l()(L.obscureWrapper, { [L.obscure]: e }),
                                  children: n(e)
                              })
                          })
                  },
                  a
              )
          })
        : (0, r.jsx)(r.Fragment, { children: n(!1) });
}
function j(e) {
    var n;
    let { items: t, onIndexChange: a, startIndex: l = 0, shouldRedactExplicitContent: o = !1, shouldHideMediaOptions: f = !1 } = e,
        [_, I] = i.useState(l),
        j = i.useRef(l),
        [M, O] = i.useState([]),
        { zoomed: b, setZoomed: T } = (0, C.Y)();
    i.useEffect(
        () => (
            h.Z.disable(),
            h.Z.enableTemp(m.P),
            () => {
                h.Z.disableTemp();
            }
        ),
        []
    ),
        i.useEffect(() => {
            var e, n;
            let r = (((_ + 1) % (e = t.length)) + e) % e;
            let i = (((_ - 1) % (n = t.length)) + n) % n;
            A(t[r]) && (0, g.po)(t[r].url), A(t[i]) && (0, g.po)(t[i].url);
        }, [_, t]);
    let P = i.useCallback(
        (e) => {
            var n;
            let r = e - j.current;
            I((e = ((e % (n = t.length)) + n) % n)), (j.current = e), O((e) => [...e, r]), null == a || a(e), T(!1);
        },
        [a, t, T]
    );
    i.useEffect(() => {
        let e = s()(() => {
                P(j.current + 1);
            }, 300),
            n = s()(() => {
                P(j.current - 1);
            }, 300);
        return (
            x.S.subscribe(E.CkL.MODAL_CAROUSEL_NEXT, e),
            x.S.subscribe(E.CkL.MODAL_CAROUSEL_PREV, n),
            () => {
                x.S.unsubscribe(E.CkL.MODAL_CAROUSEL_NEXT, e), x.S.unsubscribe(E.CkL.MODAL_CAROUSEL_PREV, n);
            }
        );
    }, [P, T]);
    let k = t[_],
        D = (0, p.KP)(
            {
                type: p.lJ.GenericMedia,
                media: k
            },
            o
        ),
        N = f
            ? (e) => {
                  e.stopPropagation(), e.preventDefault();
              }
            : void 0,
        Z = (function (e) {
            if (0 === e) return ['translateX(0)'];
            let n = ['translateX(100px)', 'translateX(-100px)'];
            return e > 0 ? n : n.toReversed();
        })(null !== (n = M[M.length - 1]) && void 0 !== n ? n : 0),
        w = (0, d.useTransition)(k, {
            key: k.url,
            from: {
                opacity: 0,
                transform: Z[0]
            },
            enter: {
                opacity: 1,
                transform: 'translateX(0)'
            },
            leave: {
                opacity: 0,
                transform: Z[Z.length - 1]
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
                className: L.wrapper,
                children: [
                    U
                        ? (0, r.jsx)(d.CircleIconButton, {
                              className: L.navPrev,
                              size: d.CircleIconButtonSizes.SIZE_36,
                              onClick: () => x.S.dispatch(E.CkL.MODAL_CAROUSEL_PREV),
                              icon: (0, r.jsx)(c.j, {}),
                              tooltip: y.intl.string(y.t.vgfxaG),
                              color: d.CircleIconButtonColors.PRIMARY
                          })
                        : null,
                    (0, r.jsx)('div', {
                        className: L.mediaContainer,
                        children: w((e, n) =>
                            (0, r.jsx)(r.Fragment, {
                                children: (0, r.jsx)(
                                    u.animated.div,
                                    {
                                        style: e,
                                        className: L.mediaWrapper,
                                        children: (0, r.jsx)(R, {
                                            isObscured: !b && D,
                                            src: n.url,
                                            children: (e) =>
                                                (0, r.jsx)(S.Z, {
                                                    media: n,
                                                    obscured: e,
                                                    onContextMenu: N
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
                              className: L.navNext,
                              size: d.CircleIconButtonSizes.SIZE_36,
                              onClick: () => x.S.dispatch(E.CkL.MODAL_CAROUSEL_NEXT),
                              icon: (0, r.jsx)(d.ArrowLargeRightIcon, {}),
                              tooltip: y.intl.string(y.t.XiOHRU),
                              color: d.CircleIconButtonColors.PRIMARY
                          })
                        : null
                ]
            }),
            U &&
                (0, r.jsx)(v.Z, {
                    items: t,
                    currentIndex: _,
                    onGalleryItemClick: P
                })
        ]
    });
}
