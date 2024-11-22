t.r(n),
    t.d(n, {
        default: function () {
            return C;
        }
    }),
    t(47120);
var r = t(200651),
    i = t(192379),
    a = t(120356),
    o = t.n(a),
    l = t(481060),
    s = t(376641),
    u = t(714338),
    c = t(585483),
    d = t(212459),
    m = t(73249),
    h = t(730606),
    f = t(860153),
    p = t(981631),
    g = t(388032),
    _ = t(619377);
function C(e) {
    let { onClose: n, items: t, startingIndex: a, onIndexChange: C, shouldRedactExplicitContent: S, shouldHideMediaOptions: x = !1, className: v, transitionState: E, ...I } = e,
        [y, L] = i.useState(null != a ? a : 0),
        [A, j] = i.useState(!1);
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
                E === l.ModalTransitionState.ENTERED && (u.Z.disable(), u.Z.enableTemp(s.P)),
                E === l.ModalTransitionState.HIDDEN && (u.Z.disable(), u.Z.enableTemp(s.v)),
                () => {
                    u.Z.disableTemp();
                }
            ),
            [E]
        );
    let M = i.useCallback(
            (e) => {
                L(e), null == C || C(e);
            },
            [C]
        ),
        O = i.useMemo(
            () => ({
                zoomed: A,
                setZoomed: j
            }),
            [A]
        ),
        b = t[y];
    return (0, r.jsx)(l.ThemeProvider, {
        theme: p.BRd.DARK,
        children: (e) =>
            (0, r.jsx)(l.ModalRoot, {
                hideShadow: !0,
                className: o()(_.carouselModal, e),
                transitionState: E,
                ...I,
                size: l.ModalSize.DYNAMIC,
                fullscreenOnMobile: !1,
                'aria-label': g.intl.string(g.t.AMTX3t),
                onClick: A ? void 0 : n,
                children: (0, r.jsxs)(d.z.Provider, {
                    value: O,
                    children: [
                        (0, r.jsx)(f.Z, {
                            item: b,
                            onClose: n
                        }),
                        (0, r.jsx)(h.Z, {
                            items: t,
                            startIndex: y,
                            onIndexChange: M,
                            shouldRedactExplicitContent: S,
                            shouldHideMediaOptions: x
                        }),
                        (0, r.jsx)('div', {
                            className: _.actionButtonContainer,
                            children: (0, r.jsx)(m.Z, {
                                item: b,
                                hideMediaOptions: ('IMAGE' === b.type && null == b.original) || x
                            })
                        })
                    ]
                })
            })
    });
}
