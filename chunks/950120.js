t.r(n),
    t.d(n, {
        default: function () {
            return E;
        }
    });
var a = t(200651),
    r = t(192379),
    i = t(120356),
    o = t.n(i),
    l = t(873546),
    s = t(481060),
    u = t(425493),
    c = t(376641),
    d = t(714338),
    f = t(585483),
    h = t(288229),
    _ = t(981631),
    p = t(388032),
    m = t(268108);
function C(e) {
    let { onClose: n } = e,
        t = r.useRef(null);
    return (0, a.jsx)('div', {
        className: m.mobileCloseWrapper,
        ref: t,
        children: (0, a.jsx)(s.FocusRingScope, {
            containerRef: t,
            children: (0, a.jsx)('div', {
                children: (0, a.jsx)(u.Z, {
                    closeAction: n,
                    keybind: 'ESC'
                })
            })
        })
    });
}
function E(e) {
    let { onClose: n, items: t, startingIndex: i, onIndexChange: u, fit: E, shouldRedactExplicitContent: g, shouldHideMediaOptions: S, shouldAnimateCarousel: L, className: x, transitionState: v, ...A } = e,
        O = l.tq && null != n;
    return (
        r.useEffect(() => {
            if (null != n)
                return (
                    f.S.subscribe(_.CkL.MEDIA_MODAL_CLOSE, n),
                    () => {
                        f.S.unsubscribe(_.CkL.MEDIA_MODAL_CLOSE, n);
                    }
                );
        }, [n]),
        r.useEffect(
            () => (
                v === s.ModalTransitionState.ENTERED && (d.Z.disable(), d.Z.enableTemp(c.P)),
                v === s.ModalTransitionState.HIDDEN && (d.Z.disable(), d.Z.enableTemp(c.v)),
                () => {
                    d.Z.disableTemp();
                }
            ),
            [v]
        ),
        (0, a.jsxs)(s.ModalRoot, {
            hideShadow: !0,
            className: o()(m.carouselModal, x),
            transitionState: v,
            ...A,
            size: s.ModalSize.DYNAMIC,
            'aria-label': p.intl.string(p.t.AMTX3t),
            onClick: n,
            children: [
                O ? (0, a.jsx)(C, { onClose: n }) : null,
                (0, a.jsx)(h.Z, {
                    items: t,
                    startIndex: i,
                    onIndexChange: u,
                    fit: E,
                    shouldRedactExplicitContent: g,
                    shouldHideMediaOptions: S,
                    shouldAnimateCarousel: L
                })
            ]
        })
    );
}
