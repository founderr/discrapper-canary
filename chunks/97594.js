t.r(e),
    t.d(e, {
        default: function () {
            return h;
        }
    }),
    t(47120);
var r = t(200651),
    i = t(192379),
    l = t(481060),
    o = t(585483),
    a = t(212459),
    s = t(73249),
    u = t(730606),
    c = t(860153),
    d = t(981631),
    m = t(388032),
    f = t(619377);
function h(n) {
    let { onClose: e, items: t, startingIndex: h, onIndexChange: _, shouldRedactExplicitContent: x, shouldHideMediaOptions: p = !1, className: C, ...g } = n,
        [S, E] = i.useState(null != h ? h : 0),
        [L, v] = i.useState(!1);
    i.useEffect(() => {
        if (null != e)
            return (
                o.S.subscribe(d.CkL.MEDIA_MODAL_CLOSE, e),
                () => {
                    o.S.unsubscribe(d.CkL.MEDIA_MODAL_CLOSE, e);
                }
            );
    }, [e]);
    let A = i.useCallback(
            (n) => {
                E(n), null == _ || _(n);
            },
            [_]
        ),
        I = i.useMemo(
            () => ({
                zoomed: L,
                setZoomed: v
            }),
            [L]
        ),
        O = t[S];
    return (0, r.jsx)(l.ModalRoot, {
        hideShadow: !0,
        className: f.carouselModal,
        ...g,
        size: l.ModalSize.DYNAMIC,
        fullscreenOnMobile: !1,
        'aria-label': m.intl.string(m.t.AMTX3t),
        children: (0, r.jsxs)(a.z.Provider, {
            value: I,
            children: [
                (0, r.jsx)(c.Z, {
                    item: O,
                    onClose: e
                }),
                (0, r.jsx)(u.Z, {
                    items: t,
                    startIndex: S,
                    onIndexChange: A,
                    shouldRedactExplicitContent: x,
                    shouldHideMediaOptions: p
                }),
                (0, r.jsx)('div', {
                    className: f.actionButtonContainer,
                    children: (0, r.jsx)(s.Z, {
                        item: O,
                        hideMediaOptions: ('IMAGE' === O.type && null == O.original) || p
                    })
                })
            ]
        })
    });
}
