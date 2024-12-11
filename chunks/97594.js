t.r(n),
    t.d(n, {
        default: function () {
            return _;
        }
    }),
    t(47120);
var i = t(200651),
    a = t(192379),
    r = t(120356),
    l = t.n(r),
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
function _(e) {
    let { onClose: n, items: t, startingIndex: r, onIndexChange: _, shouldRedactExplicitContent: x, shouldHideMediaOptions: C = !1, className: S, transitionState: v, ...E } = e,
        [I, y] = a.useState(null != r ? r : 0),
        [b, L] = a.useState(!1),
        [M, A] = a.useState(!0),
        [j, O] = a.useState(void 0);
    a.useEffect(() => {
        if (null != n)
            return (
                c.S.subscribe(p.CkL.MEDIA_MODAL_CLOSE, n),
                () => {
                    c.S.unsubscribe(p.CkL.MEDIA_MODAL_CLOSE, n);
                }
            );
    }, [n]),
        a.useEffect(
            () => (
                v === o.ModalTransitionState.ENTERED && (u.Z.disable(), u.Z.enableTemp(s.P)),
                v === o.ModalTransitionState.HIDDEN && (u.Z.disable(), u.Z.enableTemp(s.v)),
                () => {
                    u.Z.disableTemp();
                }
            ),
            [v]
        );
    let T = a.useCallback(
            (e) => {
                y(e), null == _ || _(e);
            },
            [_]
        ),
        R = a.useMemo(
            () => ({
                zoomed: b,
                setZoomed: L,
                topBarVisible: M,
                setTopBarVisible: A
            }),
            [b, M]
        ),
        w = a.useCallback(() => {
            !M && A(!0), clearTimeout(j), O(setTimeout(() => A(!1), 1000));
        }, [M, j]),
        N = a.useCallback(() => {
            w(), null == n || n();
        }, [w, n]),
        k = t[I];
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
                ...E,
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
                            startIndex: I,
                            onIndexChange: T,
                            shouldRedactExplicitContent: x,
                            shouldHideMediaOptions: C
                        })
                    ]
                })
            })
    });
}
