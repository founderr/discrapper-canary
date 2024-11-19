n(47120);
var r = n(200651),
    i = n(192379),
    a = n(75124),
    s = n(622535),
    o = n(481060),
    l = n(425493),
    u = n(906732),
    c = n(626135),
    d = n(724884),
    f = n(355045),
    _ = n(290799),
    p = n(394769),
    h = n(555932),
    m = n(808189),
    g = n(362948),
    E = n(245004),
    v = n(383881),
    b = n(981631),
    I = n(388032),
    T = n(180129);
t.Z = function (e) {
    let { analyticsLocation: t, guild: n, onClose: S } = e,
        [y, A] = i.useState(!0),
        N = i.useRef(!1),
        C = (0, a.Z)(() => Date.now()),
        { analyticsLocations: R } = (0, u.ZP)(),
        O = i.useCallback(() => {
            S(),
                c.default.track(b.rMx.MODAL_DISMISSED, {
                    type: b.ZY5.PREMIUM_GUILD_USER_MODAL,
                    location_stack: R,
                    location_section: t.section,
                    location_object: t.object,
                    guild_id: n.id,
                    duration_open_ms: Date.now() - C
                });
        }, [S, t, R, C, n.id]),
        D = i.useCallback(
            (e) => {
                e &&
                    !N.current &&
                    (c.default.track(b.rMx.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
                        type: b.ZY5.PREMIUM_GUILD_USER_MODAL,
                        location_stack: R,
                        location_section: t.section,
                        location_object: t.object,
                        guild_id: n.id
                    }),
                    (N.current = !0));
            },
            [t, R, n.id]
        );
    return (
        i.useEffect(() => {
            c.default.track(b.rMx.OPEN_MODAL, {
                type: b.ZY5.PREMIUM_GUILD_USER_MODAL,
                location_stack: R,
                location_section: t.section,
                location_object: t.object,
                guild_id: n.id
            });
        }, [n.id, t, R]),
        i.useEffect(() => {
            function e(e) {
                'Escape' === e.key && O();
            }
            return (
                window.addEventListener('keydown', e),
                () => {
                    window.removeEventListener('keydown', e);
                }
            );
        }, [O]),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)('div', {
                    className: T.closeIconWrapper,
                    children: (0, r.jsx)(l.Z, {
                        className: T.closeIcon,
                        closeAction: O,
                        keybind: 'ESC',
                        variant: l.Z.Variants.SOLID
                    })
                }),
                (0, r.jsxs)(o.AdvancedScrollerAuto, {
                    className: T.scroller,
                    children: [
                        (0, r.jsxs)('div', {
                            className: T.header,
                            children: [
                                (0, r.jsxs)('div', {
                                    className: T.headerContentWrapper,
                                    children: [
                                        (0, r.jsx)(o.Heading, {
                                            className: T.heading,
                                            color: 'always-white',
                                            variant: 'display-lg',
                                            children: I.intl.string(I.t.N4sqzM)
                                        }),
                                        (0, r.jsx)(f.Z, {
                                            guild: n,
                                            closeLayer: O,
                                            onCtaVisibilityChange: A
                                        }),
                                        (0, r.jsx)(h.Z, { guild: n }),
                                        (0, r.jsx)(m.Z, { guild: n })
                                    ]
                                }),
                                (0, r.jsx)(v.O, {})
                            ]
                        }),
                        (0, r.jsx)('div', {
                            className: T.middleBodyContentWrapper,
                            children: (0, r.jsx)(E.Z, {})
                        }),
                        (0, r.jsxs)('div', {
                            className: T.lowerBody,
                            children: [
                                (0, r.jsxs)('div', {
                                    className: T.lowerBodyContentWrapper,
                                    children: [
                                        (0, r.jsx)(g.Z, {
                                            className: T.tierComparisonTable,
                                            guild: n
                                        }),
                                        (0, r.jsx)(d.Z, {}),
                                        (0, r.jsx)(_.Z, {})
                                    ]
                                }),
                                (0, r.jsx)(v.A, {}),
                                (0, r.jsx)('div', { className: T.lowerBodyBackgroundImage })
                            ]
                        }),
                        (0, r.jsx)(s.$, {
                            onChange: D,
                            children: (0, r.jsx)('div', { className: T.persistentCtaSpacer })
                        })
                    ]
                }),
                (0, r.jsx)(p.Z, {
                    guild: n,
                    isVisible: !y,
                    closeLayer: O
                })
            ]
        })
    );
};
