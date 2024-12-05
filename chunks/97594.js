t.r(n),
    t.d(n, {
        default: function () {
            return x;
        }
    }),
    t(47120);
var i = t(200651),
    r = t(192379),
    a = t(120356),
    l = t.n(a),
    o = t(481060),
    s = t(376641),
    u = t(714338),
    c = t(585483),
    d = t(212459),
    h = t(730606),
    m = t(860153),
    p = t(981631),
    f = t(388032),
    g = t(176598);
function x(e) {
    let { onClose: n, items: t, startingIndex: a, onIndexChange: x, shouldRedactExplicitContent: _, shouldHideMediaOptions: C = !1, className: S, transitionState: v, ...y } = e,
        [E, I] = r.useState(null != a ? a : 0),
        [b, L] = r.useState(!1),
        [M, j] = r.useState(!0),
        [A, O] = r.useState(void 0);
    r.useEffect(() => {
        if (null != n)
            return (
                c.S.subscribe(p.CkL.MEDIA_MODAL_CLOSE, n),
                () => {
                    c.S.unsubscribe(p.CkL.MEDIA_MODAL_CLOSE, n);
                }
            );
    }, [n]),
        r.useEffect(
            () => (
                v === o.ModalTransitionState.ENTERED && (u.Z.disable(), u.Z.enableTemp(s.P)),
                v === o.ModalTransitionState.HIDDEN && (u.Z.disable(), u.Z.enableTemp(s.v)),
                () => {
                    u.Z.disableTemp();
                }
            ),
            [v]
        );
    let T = r.useCallback(
            (e) => {
                I(e), null == x || x(e);
            },
            [x]
        ),
        R = r.useMemo(
            () => ({
                zoomed: b,
                setZoomed: L,
                topBarVisible: M,
                setTopBarVisible: j
            }),
            [b, M]
        ),
        w = r.useCallback(() => {
            !M && j(!0), clearTimeout(A), O(setTimeout(() => j(!1), 1000));
        }, [M, A]),
        N = r.useCallback(() => {
            w(), null == n || n();
        }, [w, n]),
        k = t[E];
    return (0, i.jsx)(o.ThemeProvider, {
        theme: p.BRd.DARK,
        children: (e) =>
            (0, i.jsx)(o.ModalRoot, {
                hideShadow: !0,
                className: l()(g.carouselModal, e, {
                    [g.opening]: null != v && v <= o.ModalTransitionState.ENTERED,
                    [g.closing]: null != v && v >= o.ModalTransitionState.EXITING
                }),
                transitionState: v,
                ...y,
                size: o.ModalSize.DYNAMIC,
                fullscreenOnMobile: !1,
                onMouseMove: w,
                onClick: N,
                'aria-label': f.intl.string(f.t.AMTX3t),
                children: (0, i.jsxs)(d.z.Provider, {
                    value: R,
                    children: [
                        (0, i.jsx)(m.Z, {
                            item: k,
                            onClose: n
                        }),
                        (0, i.jsx)(h.Z, {
                            items: t,
                            startIndex: E,
                            onIndexChange: T,
                            shouldRedactExplicitContent: _,
                            shouldHideMediaOptions: C
                        })
                    ]
                })
            })
    });
}
