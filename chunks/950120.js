n.r(t),
    n.d(t, {
        default: function () {
            return p;
        }
    });
var r = n(735250),
    i = n(470079),
    a = n(120356),
    s = n.n(a),
    o = n(873546),
    l = n(481060),
    u = n(425493),
    c = n(585483),
    d = n(288229),
    _ = n(981631),
    E = n(689938),
    f = n(268108);
function h(e) {
    let { onClose: t } = e,
        n = i.useRef(null);
    return (0, r.jsx)('div', {
        className: f.mobileCloseWrapper,
        ref: n,
        children: (0, r.jsx)(l.FocusRingScope, {
            containerRef: n,
            children: (0, r.jsx)('div', {
                children: (0, r.jsx)(u.Z, {
                    closeAction: t,
                    keybind: 'ESC'
                })
            })
        })
    });
}
function p(e) {
    let { onClose: t, items: n, startingIndex: a, onIndexChange: u, fit: p, shouldRedactExplicitContent: I, shouldHideMediaOptions: m, shouldAnimateCarousel: T, className: S, ...g } = e,
        A = o.tq && null != t;
    return (
        i.useEffect(() => {
            if (null != t)
                return (
                    c.S.subscribe(_.CkL.MEDIA_MODAL_CLOSE, t),
                    () => {
                        c.S.unsubscribe(_.CkL.MEDIA_MODAL_CLOSE, t);
                    }
                );
        }, [t]),
        (0, r.jsxs)(l.ModalRoot, {
            hideShadow: !0,
            className: s()(f.carouselModal, S),
            ...g,
            size: l.ModalSize.DYNAMIC,
            'aria-label': E.Z.Messages.MEDIA_VIEWER_MODAL_ALT_TEXT,
            onClick: t,
            children: [
                A ? (0, r.jsx)(h, { onClose: t }) : null,
                (0, r.jsx)(d.Z, {
                    items: n,
                    startIndex: a,
                    onIndexChange: u,
                    fit: p,
                    shouldRedactExplicitContent: I,
                    shouldHideMediaOptions: m,
                    shouldAnimateCarousel: T
                })
            ]
        })
    );
}
