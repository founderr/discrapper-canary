t.d(n, {
    Z: function () {
        return M;
    }
}),
    t(477488),
    t(47120);
var i = t(200651),
    r = t(192379),
    a = t(120356),
    l = t.n(a),
    o = t(299608),
    s = t.n(o),
    u = t(752877),
    c = t(484957),
    d = t(481060),
    h = t(95398),
    m = t(247206),
    f = t(134432),
    p = t(169525),
    g = t(585483),
    _ = t(212459),
    x = t(73249),
    C = t(683528),
    S = t(549635),
    v = t(981631),
    y = t(388032),
    E = t(563297);
function I(e, n) {
    return ((e % n) + n) % n;
}
function b(e) {
    let { width: n, height: t } = e;
    return null == n || 0 === n || null == t || 0 === t;
}
function L(e) {
    let { children: n, isObscured: t, src: a } = e,
        [o, s] = r.useState(!1),
        u = r.useCallback(() => {
            s((e) => !e);
        }, []);
    return t
        ? (0, i.jsx)(h.a.Provider, {
              value: o,
              children: (0, i.jsx)(
                  h.Z,
                  {
                      type: h.Z.Types.ATTACHMENT,
                      reason: p.wk.EXPLICIT_CONTENT,
                      obscured: !0,
                      isSingleMosaicItem: !0,
                      onToggleObscurity: u,
                      children: (e) =>
                          (0, i.jsx)(i.Fragment, {
                              children: (0, i.jsx)('div', {
                                  className: l()(E.obscureWrapper, { [E.obscure]: e }),
                                  children: n(e)
                              })
                          })
                  },
                  a
              )
          })
        : (0, i.jsx)(i.Fragment, { children: n(!1) });
}
function M(e) {
    var n;
    let { items: t, onIndexChange: a, startIndex: o = 0, shouldRedactExplicitContent: h = !1, shouldHideMediaOptions: p = !1 } = e,
        [I, M] = r.useState(o),
        A = r.useRef(o),
        [j, O] = r.useState([]),
        { zoomed: T, setZoomed: R } = (0, _.Y)();
    r.useEffect(() => {
        var e, n;
        let i = (((I + 1) % (e = t.length)) + e) % e;
        let r = (((I - 1) % (n = t.length)) + n) % n;
        b(t[i]) && (0, f.po)(t[i].url), b(t[r]) && (0, f.po)(t[r].url);
    }, [I, t]);
    let w = r.useCallback(
        (e) => {
            var n;
            let i = e - A.current;
            M((e = ((e % (n = t.length)) + n) % n)), (A.current = e), O((e) => [...e, i]), null == a || a(e), R(!1);
        },
        [a, t, R]
    );
    r.useEffect(() => {
        let e = s()(() => {
                w(A.current + 1);
            }, 300),
            n = s()(() => {
                w(A.current - 1);
            }, 300);
        return (
            g.S.subscribe(v.CkL.MODAL_CAROUSEL_NEXT, e),
            g.S.subscribe(v.CkL.MODAL_CAROUSEL_PREV, n),
            () => {
                g.S.unsubscribe(v.CkL.MODAL_CAROUSEL_NEXT, e), g.S.unsubscribe(v.CkL.MODAL_CAROUSEL_PREV, n);
            }
        );
    }, [w, R]);
    let N = t[I],
        k = (0, m.KP)(
            {
                type: m.lJ.GenericMedia,
                media: N
            },
            h
        ),
        P = p
            ? (e) => {
                  e.stopPropagation(), e.preventDefault();
              }
            : void 0,
        D = (function (e) {
            if (0 === e) return ['translateX(0)'];
            let n = ['translateX(100px)', 'translateX(-100px)'];
            return e > 0 ? n : n.toReversed();
        })(null !== (n = j[j.length - 1]) && void 0 !== n ? n : 0),
        Z = (0, d.useTransition)(N, {
            key: N.url,
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
        B = t.length > 1;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)('div', {
                className: E.wrapper,
                children: [
                    B
                        ? (0, i.jsx)('div', {
                              className: 'fadeInWrapper',
                              children: (0, i.jsx)(d.CircleIconButton, {
                                  className: l()(E.navPrev, { [E.hidden]: T }),
                                  size: d.CircleIconButtonSizes.SIZE_36,
                                  onClick: (e) => {
                                      e.stopPropagation(), g.S.dispatch(v.CkL.MODAL_CAROUSEL_PREV);
                                  },
                                  icon: (0, i.jsx)(c.j, {}),
                                  tooltip: y.intl.string(y.t.vgfxaG),
                                  color: d.CircleIconButtonColors.PRIMARY
                              })
                          })
                        : null,
                    (0, i.jsx)('div', {
                        className: E.mediaContainer,
                        children: Z((e, n) =>
                            (0, i.jsx)(i.Fragment, {
                                children: (0, i.jsx)(
                                    u.animated.div,
                                    {
                                        style: e,
                                        className: E.mediaWrapper,
                                        children: (0, i.jsx)(L, {
                                            isObscured: !T && k,
                                            src: n.url,
                                            children: (e) =>
                                                (0, i.jsx)(i.Fragment, {
                                                    children: (0, i.jsx)('div', {
                                                        onClick: (e) => e.stopPropagation(),
                                                        className: l()(E.innerWrapper, { [E.shifted]: T && B }),
                                                        children: (0, i.jsx)(S.Z, {
                                                            media: n,
                                                            obscured: e,
                                                            onContextMenu: P
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
                    B
                        ? (0, i.jsx)('div', {
                              className: 'fadeInWrapper',
                              children: (0, i.jsx)(d.CircleIconButton, {
                                  className: l()(E.navNext, { [E.hidden]: T }),
                                  size: d.CircleIconButtonSizes.SIZE_36,
                                  onClick: (e) => {
                                      e.stopPropagation(), g.S.dispatch(v.CkL.MODAL_CAROUSEL_NEXT);
                                  },
                                  icon: (0, i.jsx)(d.ArrowLargeRightIcon, {}),
                                  tooltip: y.intl.string(y.t.XiOHRU),
                                  color: d.CircleIconButtonColors.PRIMARY
                              })
                          })
                        : null
                ]
            }),
            (0, i.jsx)('div', {
                className: l()('fadeInWrapper', E.fadeInWrapper),
                children: (0, i.jsxs)('div', {
                    className: l()(E.chromeWrapper, { [E.hidden]: T }),
                    children: [
                        B &&
                            (0, i.jsx)(C.Z, {
                                items: t,
                                currentIndex: I,
                                onGalleryItemClick: w
                            }),
                        (0, i.jsx)('div', {
                            className: E.actionButtonContainer,
                            children: (0, i.jsx)(x.Z, {
                                item: N,
                                hideMediaOptions: ('IMAGE' === N.type && null == N.original) || p
                            })
                        })
                    ]
                })
            })
        ]
    });
}
