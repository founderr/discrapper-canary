t.d(n, {
    Z: function () {
        return I;
    }
}),
    t(477488),
    t(47120);
var r = t(200651),
    a = t(192379),
    i = t(120356),
    o = t.n(i),
    l = t(299608),
    s = t.n(l),
    u = t(100621),
    c = t(484957),
    d = t(481060),
    _ = t(376641),
    m = t(714338),
    h = t(95398),
    f = t(163268),
    E = t(134432),
    x = t(169525),
    p = t(585483),
    C = t(212459),
    S = t(549635),
    g = t(981631),
    A = t(689938),
    L = t(193889);
function O(e, n) {
    return ((e % n) + n) % n;
}
function M(e) {
    let { children: n, isObscured: t, src: i } = e,
        [l, s] = a.useState(!1),
        u = a.useCallback(() => {
            s((e) => !e);
        }, []);
    return t
        ? (0, r.jsx)(h.a.Provider, {
              value: l,
              children: (0, r.jsx)(
                  h.Z,
                  {
                      type: h.Z.Types.ATTACHMENT,
                      reason: x.wk.EXPLICIT_CONTENT,
                      obscured: !0,
                      isSingleMosaicItem: !0,
                      onToggleObscurity: u,
                      children: (e) =>
                          (0, r.jsx)(r.Fragment, {
                              children: (0, r.jsx)('div', {
                                  className: o()(L.obscureWrapper, { [L.obscure]: e }),
                                  children: n(e)
                              })
                          })
                  },
                  i
              )
          })
        : (0, r.jsx)(r.Fragment, { children: n(!1) });
}
function I(e) {
    var n;
    let { items: t, onIndexChange: i, startIndex: o = 0, shouldRedactExplicitContent: l = !1, shouldHideMediaOptions: h = !1 } = e,
        [x, O] = a.useState(o),
        I = a.useRef(o),
        [v, R] = a.useState([]),
        { zoomed: j, setZoomed: b } = (0, C.Y)();
    a.useEffect(
        () => (
            m.Z.disable(),
            m.Z.enableTemp(_.P),
            () => {
                m.Z.disableTemp();
            }
        ),
        []
    ),
        a.useEffect(() => {
            var e, n;
            let r = (((x + 1) % (e = t.length)) + e) % e;
            let a = (((x - 1) % (n = t.length)) + n) % n;
            (0, E.po)(t[r].url), (0, E.po)(t[a].url);
        }, [x, t]);
    let N = a.useCallback(
        (e) => {
            var n;
            let r = e - I.current;
            O((e = ((e % (n = t.length)) + n) % n)), (I.current = e), R((e) => [...e, r]), null == i || i(e), b(!1);
        },
        [i, t, b]
    );
    a.useEffect(() => {
        let e = s()(() => {
                N(I.current + 1);
            }, 300),
            n = s()(() => {
                N(I.current - 1);
            }, 300);
        return (
            p.S.subscribe(g.CkL.MODAL_CAROUSEL_NEXT, e),
            p.S.subscribe(g.CkL.MODAL_CAROUSEL_PREV, n),
            () => {
                p.S.unsubscribe(g.CkL.MODAL_CAROUSEL_NEXT, e), p.S.unsubscribe(g.CkL.MODAL_CAROUSEL_PREV, n);
            }
        );
    }, [N, b]);
    let D = t[x],
        T = (0, f.KP)(
            {
                type: f.lJ.GenericMedia,
                media: D
            },
            l
        ),
        y = h
            ? (e) => {
                  e.stopPropagation(), e.preventDefault();
              }
            : void 0,
        k = (function (e) {
            if (0 === e) return ['translateX(0)'];
            let n = ['translateX(100px)', 'translateX(-100px)'];
            return e > 0 ? n : n.toReversed();
        })(null !== (n = v[v.length - 1]) && void 0 !== n ? n : 0),
        P = (0, d.useTransition)(D, {
            key: D.url,
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
                className: L.wrapper,
                children: [
                    Z
                        ? (0, r.jsx)(d.CircleIconButton, {
                              className: L.navPrev,
                              size: d.CircleIconButtonSizes.SIZE_36,
                              onClick: () => p.S.dispatch(g.CkL.MODAL_CAROUSEL_PREV),
                              icon: (0, r.jsx)(c.j, {}),
                              tooltip: A.Z.Messages.PAGINATION_PREVIOUS,
                              color: d.CircleIconButtonColors.PRIMARY
                          })
                        : null,
                    (0, r.jsx)('div', {
                        className: L.mediaContainer,
                        children: P((e, n) =>
                            (0, r.jsx)(r.Fragment, {
                                children: (0, r.jsx)(
                                    u.animated.div,
                                    {
                                        style: e,
                                        className: L.mediaWrapper,
                                        children: (0, r.jsx)(M, {
                                            isObscured: !j && T,
                                            src: n.url,
                                            children: (e) =>
                                                (0, r.jsx)(S.Z, {
                                                    media: n,
                                                    obscured: e,
                                                    onContextMenu: y
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
                              className: L.navNext,
                              size: d.CircleIconButtonSizes.SIZE_36,
                              onClick: () => p.S.dispatch(g.CkL.MODAL_CAROUSEL_NEXT),
                              icon: (0, r.jsx)(d.ArrowLargeRightIcon, {}),
                              tooltip: A.Z.Messages.PAGINATION_NEXT,
                              color: d.CircleIconButtonColors.PRIMARY
                          })
                        : null
                ]
            }),
            Z &&
                (0, r.jsx)('div', {
                    className: L.galleryPlaceholder,
                    children: t.map((e, n) =>
                        (0, r.jsx)(
                            'div',
                            {
                                className: L.galleryItemPlaceholder,
                                children: n
                            },
                            n
                        )
                    )
                })
        ]
    });
}
