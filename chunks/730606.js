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
    o = t.n(a),
    l = t(299608),
    s = t.n(l),
    u = t(100621),
    c = t(484957),
    d = t(481060),
    m = t(95398),
    h = t(247206),
    f = t(134432),
    p = t(169525),
    g = t(585483),
    _ = t(212459),
    C = t(683528),
    x = t(549635),
    S = t(981631),
    v = t(388032),
    E = t(396779);
function I(e, n) {
    return ((e % n) + n) % n;
}
function y(e) {
    let { width: n, height: t } = e;
    return null == n || 0 === n || null == t || 0 === t;
}
function L(e) {
    let { children: n, isObscured: t, src: a } = e,
        [l, s] = i.useState(!1),
        u = i.useCallback(() => {
            s((e) => !e);
        }, []);
    return t
        ? (0, r.jsx)(m.a.Provider, {
              value: l,
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
                                  className: o()(E.obscureWrapper, { [E.obscure]: e }),
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
    let { items: t, onIndexChange: a, startIndex: o = 0, shouldRedactExplicitContent: l = !1, shouldHideMediaOptions: m = !1 } = e,
        [p, I] = i.useState(o),
        A = i.useRef(o),
        [R, j] = i.useState([]),
        { zoomed: M, setZoomed: O } = (0, _.Y)();
    i.useEffect(() => {
        var e, n;
        let r = (((p + 1) % (e = t.length)) + e) % e;
        let i = (((p - 1) % (n = t.length)) + n) % n;
        y(t[r]) && (0, f.po)(t[r].url), y(t[i]) && (0, f.po)(t[i].url);
    }, [p, t]);
    let b = i.useCallback(
        (e) => {
            var n;
            let r = e - A.current;
            I((e = ((e % (n = t.length)) + n) % n)), (A.current = e), j((e) => [...e, r]), null == a || a(e), O(!1);
        },
        [a, t, O]
    );
    i.useEffect(() => {
        let e = s()(() => {
                b(A.current + 1);
            }, 300),
            n = s()(() => {
                b(A.current - 1);
            }, 300);
        return (
            g.S.subscribe(S.CkL.MODAL_CAROUSEL_NEXT, e),
            g.S.subscribe(S.CkL.MODAL_CAROUSEL_PREV, n),
            () => {
                g.S.unsubscribe(S.CkL.MODAL_CAROUSEL_NEXT, e), g.S.unsubscribe(S.CkL.MODAL_CAROUSEL_PREV, n);
            }
        );
    }, [b, O]);
    let T = t[p],
        P = (0, h.KP)(
            {
                type: h.lJ.GenericMedia,
                media: T
            },
            l
        ),
        k = m
            ? (e) => {
                  e.stopPropagation(), e.preventDefault();
              }
            : void 0,
        D = (function (e) {
            if (0 === e) return ['translateX(0)'];
            let n = ['translateX(100px)', 'translateX(-100px)'];
            return e > 0 ? n : n.toReversed();
        })(null !== (n = R[R.length - 1]) && void 0 !== n ? n : 0),
        N = (0, d.useTransition)(T, {
            key: T.url,
            from: {
                opacity: 0,
                transform: D[0]
            },
            enter: {
                opacity: 1,
                transform: 'translateX(0)'
            },
            leave: {
                opacity: 0,
                transform: D[D.length - 1]
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
                              onClick: (e) => {
                                  e.stopPropagation(), g.S.dispatch(S.CkL.MODAL_CAROUSEL_PREV);
                              },
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
                                        children: (0, r.jsx)(L, {
                                            isObscured: !M && P,
                                            src: n.url,
                                            children: (e) =>
                                                (0, r.jsx)(r.Fragment, {
                                                    children: (0, r.jsx)('div', {
                                                        onClick: (e) => e.stopPropagation(),
                                                        children: (0, r.jsx)(x.Z, {
                                                            media: n,
                                                            obscured: e,
                                                            onContextMenu: k
                                                        })
                                                    })
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
                              onClick: (e) => {
                                  e.stopPropagation(), g.S.dispatch(S.CkL.MODAL_CAROUSEL_NEXT);
                              },
                              icon: (0, r.jsx)(d.ArrowLargeRightIcon, {}),
                              tooltip: v.intl.string(v.t.XiOHRU),
                              color: d.CircleIconButtonColors.PRIMARY
                          })
                        : null
                ]
            }),
            Z &&
                (0, r.jsx)(C.Z, {
                    items: t,
                    currentIndex: p,
                    onGalleryItemClick: b
                })
        ]
    });
}
