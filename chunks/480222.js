var i = n(200651),
    r = n(192379),
    a = n(100621),
    l = n(481060),
    s = n(425493),
    o = n(207796),
    c = n(420212),
    d = n(388032),
    u = n(703662);
let h = {
    mass: 1,
    tension: 600,
    friction: 60,
    clamp: !0
};
t.Z = function (e) {
    let { children: t, hasChanges: n, onClose: m, onSave: p, onReset: g } = e,
        f = r.useCallback(() => {
            (0, o.fH)(o.v0.DISCOVERY), null == m || m();
        }, [m]),
        _ = r.useCallback(() => {
            null == p || p(), null == f || f();
        }, [p, f]),
        E = r.useCallback(() => {
            null == g || g();
        }, [g]);
    r.useEffect(() => {
        let e = (e) => {
            e.key === c.vn.ESCAPE && !n && f();
        };
        return window.addEventListener('keydown', e), () => window.removeEventListener('keydown', e);
    }, [f, n]);
    let I = (0, l.useSpring)({
            from: { opacity: 0 },
            to: { opacity: 1 },
            config: h,
            delay: 200
        }),
        C = (0, l.useSpring)({
            from: { opacity: 0 },
            to: { opacity: n ? 1 : 0 },
            config: h,
            delay: 200
        });
    return (0, i.jsxs)('div', {
        className: u.container,
        children: [
            (0, i.jsx)('div', {
                className: u.saveContainer,
                children: (0, i.jsx)(s.Z, {
                    className: u.closeButton,
                    closeAction: f,
                    keybind: 'ESC'
                })
            }),
            (0, i.jsxs)(a.animated.div, {
                style: {
                    opacity: I.opacity,
                    transform: I.opacity.to([0, 1], [40, 0]).to((e) => 'translateY('.concat(e, 'px)'))
                },
                className: u.contentWrapper,
                children: [
                    (0, i.jsx)(l.Scroller, {
                        fade: !0,
                        className: u.content,
                        children: t
                    }),
                    (0, i.jsxs)(a.animated.div, {
                        style: {
                            opacity: C.opacity,
                            transform: C.opacity.to([0, 1], [40, 0]).to((e) => 'translateY('.concat(e, 'px)')),
                            display: C.opacity.to([0, 1], [0, 40]).to((e) => (e > 0 ? 'flex' : 'none'))
                        },
                        className: u.saveToolbar,
                        children: [
                            (0, i.jsx)(l.Text, {
                                variant: 'text-md/normal',
                                color: 'header-secondary',
                                className: u.saveToolbarText,
                                children: d.intl.string(d.t['59fCfn'])
                            }),
                            (0, i.jsxs)('div', {
                                className: u.saveToolbarActions,
                                children: [
                                    (0, i.jsx)(l.Button, {
                                        onClick: E,
                                        size: l.ButtonSizes.SMALL,
                                        look: l.ButtonLooks.LINK,
                                        color: l.ButtonColors.WHITE,
                                        children: d.intl.string(d.t.yBZMsb)
                                    }),
                                    (0, i.jsx)(l.Button, {
                                        onClick: _,
                                        size: l.ButtonSizes.SMALL,
                                        look: l.ButtonLooks.FILLED,
                                        color: l.ButtonColors.BRAND,
                                        children: d.intl.string(d.t.K344S0)
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
