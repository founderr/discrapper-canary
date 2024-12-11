t.d(n, {
    Z: function () {
        return L;
    }
}),
    t(47120);
var i = t(200651),
    a = t(192379),
    r = t(120356),
    l = t.n(r),
    o = t(299608),
    s = t.n(o),
    u = t(484957),
    c = t(481060),
    d = t(95398),
    h = t(247206),
    m = t(134432),
    p = t(169525),
    f = t(585483),
    g = t(212459),
    _ = t(73249),
    x = t(683528),
    C = t(549635),
    S = t(981631),
    v = t(388032),
    E = t(563297);
function I(e, n) {
    return ((e % n) + n) % n;
}
function y(e) {
    let { width: n, height: t } = e;
    return null == n || 0 === n || null == t || 0 === t;
}
function b(e) {
    let { children: n, isObscured: t, src: r } = e,
        [o, s] = a.useState(!1),
        u = a.useCallback(() => {
            s((e) => !e);
        }, []);
    return t
        ? (0, i.jsx)(d.a.Provider, {
              value: o,
              children: (0, i.jsx)(
                  d.Z,
                  {
                      type: d.Z.Types.ATTACHMENT,
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
                  r
              )
          })
        : (0, i.jsx)(i.Fragment, { children: n(!1) });
}
function L(e) {
    let { items: n, onIndexChange: t, startIndex: r = 0, shouldRedactExplicitContent: o = !1, shouldHideMediaOptions: d = !1 } = e,
        [p, I] = a.useState(r),
        L = a.useRef(r),
        { zoomed: M, setZoomed: A } = (0, g.Y)();
    a.useEffect(() => {
        var e, t;
        let i = (((p + 1) % (e = n.length)) + e) % e;
        let a = (((p - 1) % (t = n.length)) + t) % t;
        y(n[i]) && (0, m.po)(n[i].url), y(n[a]) && (0, m.po)(n[a].url);
    }, [p, n]);
    let j = a.useCallback(
        (e) => {
            var i;
            I((e = ((e % (i = n.length)) + i) % i)), (L.current = e), null == t || t(e), A(!1);
        },
        [t, n, A]
    );
    a.useEffect(() => {
        let e = s()(() => {
                j(L.current + 1);
            }, 300),
            n = s()(() => {
                j(L.current - 1);
            }, 300);
        return (
            f.S.subscribe(S.CkL.MODAL_CAROUSEL_NEXT, e),
            f.S.subscribe(S.CkL.MODAL_CAROUSEL_PREV, n),
            () => {
                f.S.unsubscribe(S.CkL.MODAL_CAROUSEL_NEXT, e), f.S.unsubscribe(S.CkL.MODAL_CAROUSEL_PREV, n);
            }
        );
    }, [j, A]);
    let O = n[p],
        T = (0, h.KP)(
            {
                type: h.lJ.GenericMedia,
                media: O
            },
            o
        ),
        R = d
            ? (e) => {
                  e.stopPropagation(), e.preventDefault();
              }
            : void 0,
        w = n.length > 1;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)('div', {
                className: E.wrapper,
                children: [
                    w
                        ? (0, i.jsx)('div', {
                              className: 'fadeInWrapper',
                              children: (0, i.jsx)(c.CircleIconButton, {
                                  className: l()(E.navPrev, { [E.hidden]: M }),
                                  size: c.CircleIconButtonSizes.SIZE_36,
                                  onClick: (e) => {
                                      e.stopPropagation(), f.S.dispatch(S.CkL.MODAL_CAROUSEL_PREV);
                                  },
                                  icon: (0, i.jsx)(u.j, {}),
                                  tooltip: v.intl.string(v.t.vgfxaG),
                                  color: c.CircleIconButtonColors.PRIMARY
                              })
                          })
                        : null,
                    (0, i.jsx)('div', {
                        className: E.mediaContainer,
                        children: (0, i.jsx)(
                            'div',
                            {
                                className: E.mediaWrapper,
                                children: (0, i.jsx)(b, {
                                    isObscured: !M && T,
                                    src: O.url,
                                    children: (e) =>
                                        (0, i.jsx)(i.Fragment, {
                                            children: (0, i.jsx)('div', {
                                                onClick: (e) => e.stopPropagation(),
                                                className: l()(E.innerWrapper, { [E.shifted]: M && w }),
                                                children: (0, i.jsx)(C.Z, {
                                                    media: O,
                                                    obscured: e,
                                                    onContextMenu: R
                                                })
                                            })
                                        })
                                })
                            },
                            O.url
                        )
                    }),
                    w
                        ? (0, i.jsx)('div', {
                              className: 'fadeInWrapper',
                              children: (0, i.jsx)(c.CircleIconButton, {
                                  className: l()(E.navNext, { [E.hidden]: M }),
                                  size: c.CircleIconButtonSizes.SIZE_36,
                                  onClick: (e) => {
                                      e.stopPropagation(), f.S.dispatch(S.CkL.MODAL_CAROUSEL_NEXT);
                                  },
                                  icon: (0, i.jsx)(c.ArrowLargeRightIcon, {}),
                                  tooltip: v.intl.string(v.t.XiOHRU),
                                  color: c.CircleIconButtonColors.PRIMARY
                              })
                          })
                        : null
                ]
            }),
            (0, i.jsx)('div', {
                className: l()('fadeInWrapper', E.fadeInWrapper),
                children: (0, i.jsxs)('div', {
                    className: l()(E.chromeWrapper, { [E.hidden]: M }),
                    children: [
                        w &&
                            (0, i.jsx)(x.Z, {
                                items: n,
                                currentIndex: p,
                                onGalleryItemClick: j
                            }),
                        (0, i.jsx)('div', {
                            className: E.actionButtonContainer,
                            children: (0, i.jsx)(_.Z, {
                                item: O,
                                hideMediaOptions: ('IMAGE' === O.type && null == O.original) || d
                            })
                        })
                    ]
                })
            })
        ]
    });
}
