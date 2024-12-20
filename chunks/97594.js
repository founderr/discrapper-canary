t.r(n),
    t.d(n, {
        default: function () {
            return S;
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
    d = t(254109),
    h = t(212459),
    m = t(730606),
    p = t(860153),
    f = t(981631),
    _ = t(388032),
    g = t(176598);
function S(e) {
    let { onClose: n, items: t, startingIndex: r, shouldRedactExplicitContent: S, shouldHideMediaOptions: E = !1, className: x, transitionState: C, ...v } = e,
        [I, y] = a.useState(null != r ? r : 0),
        [M, O] = a.useState(!1),
        [L, b] = a.useState(!0),
        [A, T] = a.useState(void 0);
    a.useEffect(() => {
        if (null != n)
            return (
                c.S.subscribe(f.CkL.MEDIA_MODAL_CLOSE, n),
                () => {
                    c.S.unsubscribe(f.CkL.MEDIA_MODAL_CLOSE, n);
                }
            );
    }, [n]),
        a.useEffect(
            () => (
                C === o.ModalTransitionState.ENTERED && (u.Z.disable(), u.Z.enableTemp(s.P)),
                C === o.ModalTransitionState.HIDDEN && (u.Z.disable(), u.Z.enableTemp(s.v)),
                () => {
                    u.Z.disableTemp();
                }
            ),
            [C]
        );
    let j = a.useCallback((e) => {
            y(e), (0, d.yg)(d.uG.SELECTED_ITEM_CHANGE);
        }, []),
        R = a.useMemo(
            () => ({
                zoomed: M,
                setZoomed: O,
                topBarVisible: L,
                setTopBarVisible: b
            }),
            [M, L]
        ),
        N = a.useCallback(() => {
            !L && b(!0), clearTimeout(A), T(setTimeout(() => b(!1), 1000));
        }, [L, A]),
        D = a.useCallback(() => {
            N(), null == n || n();
        }, [N, n]),
        P = t[I];
    return (0, i.jsx)(o.ThemeProvider, {
        theme: f.BRd.DARK,
        children: (e) =>
            (0, i.jsx)(o.ModalRoot, {
                hideShadow: !0,
                className: l()(g.carouselModal, e, {
                    [g.opening]: null != C && C <= o.ModalTransitionState.ENTERED,
                    [g.closing]: null != C && C >= o.ModalTransitionState.EXITING
                }),
                transitionState: C,
                ...v,
                size: o.ModalSize.DYNAMIC,
                fullscreenOnMobile: !1,
                onMouseMove: N,
                onClick: D,
                'aria-label': _.intl.string(_.t.AMTX3t),
                children: (0, i.jsxs)(h.z.Provider, {
                    value: R,
                    children: [
                        (0, i.jsx)(p.Z, {
                            item: P,
                            onClose: n
                        }),
                        (0, i.jsx)(m.Z, {
                            items: t,
                            startIndex: I,
                            onIndexChange: j,
                            shouldRedactExplicitContent: S,
                            shouldHideMediaOptions: E
                        })
                    ]
                })
            })
    });
}
