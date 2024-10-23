t.r(n),
    t.d(n, {
        default: function () {
            return h;
        }
    }),
    t(47120);
var r = t(200651),
    a = t(192379),
    i = t(481060),
    o = t(585483),
    l = t(212459),
    s = t(73249),
    u = t(730606),
    c = t(860153),
    d = t(981631),
    _ = t(689938),
    m = t(619377);
function h(e) {
    let { onClose: n, items: t, startingIndex: h, onIndexChange: f, shouldRedactExplicitContent: E, shouldHideMediaOptions: x = !1, className: p, ...C } = e,
        [S, g] = a.useState(null != h ? h : 0),
        [A, L] = a.useState(!1);
    a.useEffect(() => {
        if (null != n)
            return (
                o.S.subscribe(d.CkL.MEDIA_MODAL_CLOSE, n),
                () => {
                    o.S.unsubscribe(d.CkL.MEDIA_MODAL_CLOSE, n);
                }
            );
    }, [n]);
    let O = a.useCallback(
            (e) => {
                g(e), null == f || f(e);
            },
            [f]
        ),
        M = a.useMemo(
            () => ({
                zoomed: A,
                setZoomed: L
            }),
            [A]
        ),
        I = t[S];
    return (0, r.jsx)(i.ModalRoot, {
        hideShadow: !0,
        className: m.carouselModal,
        ...C,
        size: i.ModalSize.DYNAMIC,
        fullscreenOnMobile: !1,
        'aria-label': _.Z.Messages.MEDIA_VIEWER_MODAL_ALT_TEXT,
        children: (0, r.jsxs)(l.z.Provider, {
            value: M,
            children: [
                (0, r.jsx)(c.Z, {
                    item: I,
                    onClose: n
                }),
                (0, r.jsx)(u.Z, {
                    items: t,
                    startIndex: S,
                    onIndexChange: O,
                    shouldRedactExplicitContent: E,
                    shouldHideMediaOptions: x
                }),
                (0, r.jsx)('div', {
                    className: m.actionButtonContainer,
                    children: (0, r.jsx)(s.Z, {
                        item: I,
                        hideMediaOptions: ('IMAGE' === I.type && null == I.original) || x
                    })
                })
            ]
        })
    });
}
