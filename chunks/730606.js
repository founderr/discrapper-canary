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
    _ = t(254109),
    g = t(212459),
    S = t(73249),
    E = t(683528),
    x = t(549635),
    C = t(981631),
    v = t(388032),
    I = t(563297);
function y(e, n) {
    return ((e % n) + n) % n;
}
function M(e) {
    let { width: n, height: t } = e;
    return null == n || 0 === n || null == t || 0 === t;
}
function O(e) {
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
                                  className: l()(I.obscureWrapper, { [I.obscure]: e }),
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
        [p, y] = a.useState(r),
        L = a.useRef(r),
        { zoomed: b, setZoomed: A } = (0, g.Y)();
    a.useEffect(() => {
        var e, t;
        let i = (((p + 1) % (e = n.length)) + e) % e;
        let a = (((p - 1) % (t = n.length)) + t) % t;
        M(n[i]) && (0, m.po)(n[i].url), M(n[a]) && (0, m.po)(n[a].url);
    }, [p, n]);
    let T = a.useCallback(
        (e) => {
            var i;
            y((e = ((e % (i = n.length)) + i) % i)), (L.current = e), null == t || t(e), A(!1);
        },
        [t, n, A]
    );
    a.useEffect(() => {
        let e = s()(() => {
                T(L.current + 1);
            }, 300),
            n = s()(() => {
                T(L.current - 1);
            }, 300);
        return (
            f.S.subscribe(C.CkL.MODAL_CAROUSEL_NEXT, e),
            f.S.subscribe(C.CkL.MODAL_CAROUSEL_PREV, n),
            () => {
                f.S.unsubscribe(C.CkL.MODAL_CAROUSEL_NEXT, e), f.S.unsubscribe(C.CkL.MODAL_CAROUSEL_PREV, n);
            }
        );
    }, [T, A]);
    let j = n[p],
        R = (0, h.KP)(
            {
                type: h.lJ.GenericMedia,
                media: j
            },
            o
        ),
        N = d
            ? (e) => {
                  e.stopPropagation(), e.preventDefault();
              }
            : () => (0, _.yg)(_.uG.CONTEXT_MENU_OPENED),
        D = n.length > 1;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)('div', {
                className: I.wrapper,
                children: [
                    D
                        ? (0, i.jsx)('div', {
                              className: 'fadeInWrapper',
                              children: (0, i.jsx)(c.CircleIconButton, {
                                  className: l()(I.navPrev, { [I.hidden]: b }),
                                  size: c.CircleIconButtonSizes.SIZE_36,
                                  onClick: (e) => {
                                      e.stopPropagation(), f.S.dispatch(C.CkL.MODAL_CAROUSEL_PREV);
                                  },
                                  icon: (0, i.jsx)(u.j, {}),
                                  tooltip: v.intl.string(v.t.vgfxaG),
                                  color: c.CircleIconButtonColors.PRIMARY
                              })
                          })
                        : null,
                    (0, i.jsx)('div', {
                        className: I.mediaContainer,
                        children: (0, i.jsx)(
                            'div',
                            {
                                className: I.mediaWrapper,
                                children: (0, i.jsx)(O, {
                                    isObscured: !b && R,
                                    src: j.url,
                                    children: (e) =>
                                        (0, i.jsx)(i.Fragment, {
                                            children: (0, i.jsx)('div', {
                                                onClick: (e) => e.stopPropagation(),
                                                className: l()(I.innerWrapper, { [I.shifted]: b && D }),
                                                children: (0, i.jsx)(x.Z, {
                                                    media: j,
                                                    obscured: e,
                                                    onContextMenu: N
                                                })
                                            })
                                        })
                                })
                            },
                            j.url
                        )
                    }),
                    D
                        ? (0, i.jsx)('div', {
                              className: 'fadeInWrapper',
                              children: (0, i.jsx)(c.CircleIconButton, {
                                  className: l()(I.navNext, { [I.hidden]: b }),
                                  size: c.CircleIconButtonSizes.SIZE_36,
                                  onClick: (e) => {
                                      e.stopPropagation(), f.S.dispatch(C.CkL.MODAL_CAROUSEL_NEXT);
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
                className: l()('fadeInWrapper', I.fadeInWrapper),
                children: (0, i.jsxs)('div', {
                    className: l()(I.chromeWrapper, { [I.hidden]: b }),
                    children: [
                        D &&
                            (0, i.jsx)(E.Z, {
                                items: n,
                                currentIndex: p,
                                onGalleryItemClick: T
                            }),
                        (0, i.jsx)('div', {
                            className: I.actionButtonContainer,
                            children: (0, i.jsx)(S.Z, {
                                item: j,
                                hideMediaOptions: ('IMAGE' === j.type && null == j.original) || d
                            })
                        })
                    ]
                })
            })
        ]
    });
}
