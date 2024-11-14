t.r(n),
    t.d(n, {
        default: function () {
            return x;
        }
    }),
    t(47120);
var r = t(200651),
    i = t(192379),
    a = t(120356),
    l = t.n(a),
    o = t(481060),
    s = t(376641),
    u = t(714338),
    c = t(585483),
    d = t(212459),
    m = t(73249),
    f = t(730606),
    h = t(860153),
    p = t(981631),
    g = t(388032),
    _ = t(619377);
function x(e) {
    let { onClose: n, items: t, startingIndex: a, onIndexChange: x, shouldRedactExplicitContent: S, shouldHideMediaOptions: C = !1, className: v, transitionState: E, ...y } = e,
        [L, I] = i.useState(null != a ? a : 0),
        [A, R] = i.useState(!1);
    i.useEffect(() => {
        if (null != n)
            return (
                c.S.subscribe(p.CkL.MEDIA_MODAL_CLOSE, n),
                () => {
                    c.S.unsubscribe(p.CkL.MEDIA_MODAL_CLOSE, n);
                }
            );
    }, [n]),
        i.useEffect(
            () => (
                E === o.ModalTransitionState.ENTERED && (u.Z.disable(), u.Z.enableTemp(s.P)),
                E === o.ModalTransitionState.HIDDEN && (u.Z.disable(), u.Z.enableTemp(s.v)),
                () => {
                    u.Z.disableTemp();
                }
            ),
            [E]
        );
    let M = i.useCallback(
            (e) => {
                I(e), null == x || x(e);
            },
            [x]
        ),
        O = i.useMemo(
            () => ({
                zoomed: A,
                setZoomed: R
            }),
            [A]
        ),
        b = t[L];
    return (0, r.jsx)(o.ThemeProvider, {
        theme: p.BRd.DARK,
        children: (e) =>
            (0, r.jsx)(o.ModalRoot, {
                hideShadow: !0,
                className: l()(_.carouselModal, e),
                transitionState: E,
                ...y,
                size: o.ModalSize.DYNAMIC,
                fullscreenOnMobile: !1,
                'aria-label': g.intl.string(g.t.AMTX3t),
                children: (0, r.jsxs)(d.z.Provider, {
                    value: O,
                    children: [
                        (0, r.jsx)(h.Z, {
                            item: b,
                            onClose: n
                        }),
                        (0, r.jsx)(f.Z, {
                            items: t,
                            startIndex: L,
                            onIndexChange: M,
                            shouldRedactExplicitContent: S,
                            shouldHideMediaOptions: C
                        }),
                        (0, r.jsx)('div', {
                            className: _.actionButtonContainer,
                            children: (0, r.jsx)(m.Z, {
                                item: b,
                                hideMediaOptions: ('IMAGE' === b.type && null == b.original) || C
                            })
                        })
                    ]
                })
            })
    });
}
