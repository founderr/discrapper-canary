t.r(n),
    t.d(n, {
        default: function () {
            return f;
        }
    }),
    t(47120);
var r = t(200651),
    a = t(192379),
    i = t(481060),
    l = t(585483),
    o = t(212459),
    s = t(73249),
    u = t(730606),
    c = t(860153),
    d = t(981631),
    m = t(689938),
    _ = t(619377);
function f(e) {
    let { onClose: n, items: t, startingIndex: f, onIndexChange: h, shouldRedactExplicitContent: x, shouldHideMediaOptions: E = !1, className: p, ...C } = e,
        [A, g] = a.useState(null != f ? f : 0),
        [I, L] = a.useState(!1);
    a.useEffect(() => {
        if (null != n)
            return (
                l.S.subscribe(d.CkL.MEDIA_MODAL_CLOSE, n),
                () => {
                    l.S.unsubscribe(d.CkL.MEDIA_MODAL_CLOSE, n);
                }
            );
    }, [n]);
    let S = a.useCallback(
            (e) => {
                g(e), null == h || h(e);
            },
            [h]
        ),
        M = a.useMemo(
            () => ({
                zoomed: I,
                setZoomed: L
            }),
            [I]
        ),
        O = t[A];
    return (0, r.jsx)(i.ModalRoot, {
        hideShadow: !0,
        className: _.carouselModal,
        ...C,
        size: i.ModalSize.DYNAMIC,
        fullscreenOnMobile: !1,
        'aria-label': m.Z.Messages.MEDIA_VIEWER_MODAL_ALT_TEXT,
        children: (0, r.jsxs)(o.z.Provider, {
            value: M,
            children: [
                (0, r.jsx)(c.Z, {
                    item: O,
                    onClose: n
                }),
                (0, r.jsx)(u.Z, {
                    items: t,
                    startIndex: A,
                    onIndexChange: S,
                    shouldRedactExplicitContent: x,
                    shouldHideMediaOptions: E
                }),
                (0, r.jsx)('div', {
                    className: _.actionButtonContainer,
                    children: (0, r.jsx)(s.Z, {
                        item: O,
                        hideMediaOptions: ('IMAGE' === O.type && null == O.original) || E
                    })
                })
            ]
        })
    });
}
