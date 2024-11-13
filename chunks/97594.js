t.r(n),
    t.d(n, {
        default: function () {
            return g;
        }
    }),
    t(47120);
var r = t(200651),
    i = t(192379),
    a = t(120356),
    l = t.n(a),
    o = t(481060),
    s = t(585483),
    u = t(212459),
    c = t(73249),
    d = t(730606),
    m = t(860153),
    h = t(981631),
    f = t(388032),
    p = t(619377);
function g(e) {
    let { onClose: n, items: t, startingIndex: a, onIndexChange: g, shouldRedactExplicitContent: _, shouldHideMediaOptions: x = !1, className: C, ...v } = e,
        [S, E] = i.useState(null != a ? a : 0),
        [y, L] = i.useState(!1);
    i.useEffect(() => {
        if (null != n)
            return (
                s.S.subscribe(h.CkL.MEDIA_MODAL_CLOSE, n),
                () => {
                    s.S.unsubscribe(h.CkL.MEDIA_MODAL_CLOSE, n);
                }
            );
    }, [n]);
    let I = i.useCallback(
            (e) => {
                E(e), null == g || g(e);
            },
            [g]
        ),
        A = i.useMemo(
            () => ({
                zoomed: y,
                setZoomed: L
            }),
            [y]
        ),
        R = t[S];
    return (0, r.jsx)(o.ThemeProvider, {
        theme: h.BRd.DARK,
        children: (e) =>
            (0, r.jsx)(o.ModalRoot, {
                hideShadow: !0,
                className: l()(p.carouselModal, e),
                ...v,
                size: o.ModalSize.DYNAMIC,
                fullscreenOnMobile: !1,
                'aria-label': f.intl.string(f.t.AMTX3t),
                children: (0, r.jsxs)(u.z.Provider, {
                    value: A,
                    children: [
                        (0, r.jsx)(m.Z, {
                            item: R,
                            onClose: n
                        }),
                        (0, r.jsx)(d.Z, {
                            items: t,
                            startIndex: S,
                            onIndexChange: I,
                            shouldRedactExplicitContent: _,
                            shouldHideMediaOptions: x
                        }),
                        (0, r.jsx)('div', {
                            className: p.actionButtonContainer,
                            children: (0, r.jsx)(c.Z, {
                                item: R,
                                hideMediaOptions: ('IMAGE' === R.type && null == R.original) || x
                            })
                        })
                    ]
                })
            })
    });
}
