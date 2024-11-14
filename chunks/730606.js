t.d(n, {
    Z: function () {
        return A;
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
    m = t(95398),
    f = t(247206),
    h = t(134432),
    p = t(169525),
    g = t(585483),
    _ = t(212459),
    x = t(683528),
    S = t(549635),
    C = t(981631),
    v = t(388032),
    E = t(193889);
function y(e, n) {
    return ((e % n) + n) % n;
}
function L(e) {
    let { width: n, height: t } = e;
    return null == n || 0 === n || null == t || 0 === t;
}
function I(e) {
    let { children: n, isObscured: t, src: a } = e,
        [o, s] = i.useState(!1),
        u = i.useCallback(() => {
            s((e) => !e);
        }, []);
    return t
        ? (0, r.jsx)(m.a.Provider, {
              value: o,
              children: (0, r.jsx)(
                  m.Z,
                  {
                      type: m.Z.Types.ATTACHMENT,
                      reason: p.wk.EXPLICIT_CONTENT,
                      obscured: !0,
                      isSingleMosaicItem: !0,
                      onToggleObscurity: u,
                      children: (e) =>
                          (0, r.jsx)(r.Fragment, {
                              children: (0, r.jsx)('div', {
                                  className: l()(E.obscureWrapper, { [E.obscure]: e }),
                                  children: n(e)
                              })
                          })
                  },
                  a
              )
          })
        : (0, r.jsx)(r.Fragment, { children: n(!1) });
}
function A(e) {
    var n;
    let { items: t, onIndexChange: a, startIndex: l = 0, shouldRedactExplicitContent: o = !1, shouldHideMediaOptions: m = !1 } = e,
        [p, y] = i.useState(l),
        A = i.useRef(l),
        [R, M] = i.useState([]),
        { zoomed: O, setZoomed: b } = (0, _.Y)();
    i.useEffect(() => {
        var e, n;
        let r = (((p + 1) % (e = t.length)) + e) % e;
        let i = (((p - 1) % (n = t.length)) + n) % n;
        L(t[r]) && (0, h.po)(t[r].url), L(t[i]) && (0, h.po)(t[i].url);
    }, [p, t]);
    let j = i.useCallback(
        (e) => {
            var n;
            let r = e - A.current;
            y((e = ((e % (n = t.length)) + n) % n)), (A.current = e), M((e) => [...e, r]), null == a || a(e), b(!1);
        },
        [a, t, b]
    );
    i.useEffect(() => {
        let e = s()(() => {
                j(A.current + 1);
            }, 300),
            n = s()(() => {
                j(A.current - 1);
            }, 300);
        return (
            g.S.subscribe(C.CkL.MODAL_CAROUSEL_NEXT, e),
            g.S.subscribe(C.CkL.MODAL_CAROUSEL_PREV, n),
            () => {
                g.S.unsubscribe(C.CkL.MODAL_CAROUSEL_NEXT, e), g.S.unsubscribe(C.CkL.MODAL_CAROUSEL_PREV, n);
            }
        );
    }, [j, b]);
    let T = t[p],
        D = (0, f.KP)(
            {
                type: f.lJ.GenericMedia,
                media: T
            },
            o
        ),
        P = m
            ? (e) => {
                  e.stopPropagation(), e.preventDefault();
              }
            : void 0,
        k = (function (e) {
            if (0 === e) return ['translateX(0)'];
            let n = ['translateX(100px)', 'translateX(-100px)'];
            return e > 0 ? n : n.toReversed();
        })(null !== (n = R[R.length - 1]) && void 0 !== n ? n : 0),
        N = (0, d.useTransition)(T, {
            key: T.url,
            from: {
                opacity: 0,
                transform: k[0]
            },
            enter: {
                opacity: 1,
                transform: 'translateX(0)'
            },
            leave: {
                opacity: 0,
                transform: k[k.length - 1]
            },
            config: {
                friction: 20,
                tension: 250
            }
        }),
        Z = t.length > 1;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)('div', {
                className: E.wrapper,
                children: [
                    Z
                        ? (0, r.jsx)(d.CircleIconButton, {
                              className: E.navPrev,
                              size: d.CircleIconButtonSizes.SIZE_36,
                              onClick: () => g.S.dispatch(C.CkL.MODAL_CAROUSEL_PREV),
                              icon: (0, r.jsx)(c.j, {}),
                              tooltip: v.intl.string(v.t.vgfxaG),
                              color: d.CircleIconButtonColors.PRIMARY
                          })
                        : null,
                    (0, r.jsx)('div', {
                        className: E.mediaContainer,
                        children: N((e, n) =>
                            (0, r.jsx)(r.Fragment, {
                                children: (0, r.jsx)(
                                    u.animated.div,
                                    {
                                        style: e,
                                        className: E.mediaWrapper,
                                        children: (0, r.jsx)(I, {
                                            isObscured: !O && D,
                                            src: n.url,
                                            children: (e) =>
                                                (0, r.jsx)(S.Z, {
                                                    media: n,
                                                    obscured: e,
                                                    onContextMenu: P
                                                })
                                        })
                                    },
                                    n.url
                                )
                            })
                        )
                    }),
                    Z
                        ? (0, r.jsx)(d.CircleIconButton, {
                              className: E.navNext,
                              size: d.CircleIconButtonSizes.SIZE_36,
                              onClick: () => g.S.dispatch(C.CkL.MODAL_CAROUSEL_NEXT),
                              icon: (0, r.jsx)(d.ArrowLargeRightIcon, {}),
                              tooltip: v.intl.string(v.t.XiOHRU),
                              color: d.CircleIconButtonColors.PRIMARY
                          })
                        : null
                ]
            }),
            Z &&
                (0, r.jsx)(x.Z, {
                    items: t,
                    currentIndex: p,
                    onGalleryItemClick: j
                })
        ]
    });
}
