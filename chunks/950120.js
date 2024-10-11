t.r(n),
    t.d(n, {
        default: function () {
            return E;
        }
    });
var a = t(735250),
    r = t(470079),
    i = t(120356),
    l = t.n(i),
    s = t(873546),
    u = t(481060),
    o = t(425493),
    c = t(585483),
    d = t(288229),
    _ = t(981631),
    f = t(689938),
    h = t(268108);
function m(e) {
    let { onClose: n } = e,
        t = r.useRef(null);
    return (0, a.jsx)('div', {
        className: h.mobileCloseWrapper,
        ref: t,
        children: (0, a.jsx)(u.FocusRingScope, {
            containerRef: t,
            children: (0, a.jsx)('div', {
                children: (0, a.jsx)(o.Z, {
                    closeAction: n,
                    keybind: 'ESC'
                })
            })
        })
    });
}
function E(e) {
    let { onClose: n, items: t, startingIndex: i, onIndexChange: o, fit: E, shouldRedactExplicitContent: S, shouldHideMediaOptions: A, shouldAnimateCarousel: O, className: g, ...C } = e,
        p = s.tq && null != n;
    return (
        r.useEffect(() => {
            if (null != n)
                return (
                    c.S.subscribe(_.CkL.MEDIA_MODAL_CLOSE, n),
                    () => {
                        c.S.unsubscribe(_.CkL.MEDIA_MODAL_CLOSE, n);
                    }
                );
        }, [n]),
        (0, a.jsxs)(u.ModalRoot, {
            hideShadow: !0,
            className: l()(h.carouselModal, g),
            ...C,
            size: u.ModalSize.DYNAMIC,
            'aria-label': f.Z.Messages.MEDIA_VIEWER_MODAL_ALT_TEXT,
            onClick: n,
            children: [
                p ? (0, a.jsx)(m, { onClose: n }) : null,
                (0, a.jsx)(d.Z, {
                    items: t,
                    startIndex: i,
                    onIndexChange: o,
                    fit: E,
                    shouldRedactExplicitContent: S,
                    shouldHideMediaOptions: A,
                    shouldAnimateCarousel: O
                })
            ]
        })
    );
}
