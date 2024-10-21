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
    _ = n(355045),
    E = n(290799),
    f = n(394769),
    h = n(555932),
    p = n(808189),
    I = n(362948),
    m = n(245004),
    T = n(383881),
    S = n(981631),
    g = n(689938),
    A = n(429905);
t.Z = function (e) {
    let { analyticsLocation: t, guild: n, onClose: N } = e,
        [R, O] = i.useState(!0),
        v = i.useRef(!1),
        C = (0, a.Z)(() => Date.now()),
        { analyticsLocations: L } = (0, u.ZP)(),
        D = i.useCallback(() => {
            N(),
                c.default.track(S.rMx.MODAL_DISMISSED, {
                    type: S.ZY5.PREMIUM_GUILD_USER_MODAL,
                    location_stack: L,
                    location_section: t.section,
                    location_object: t.object,
                    guild_id: n.id,
                    duration_open_ms: Date.now() - C
                });
        }, [N, t, L, C, n.id]),
        y = i.useCallback(
            (e) => {
                e &&
                    !v.current &&
                    (c.default.track(S.rMx.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
                        type: S.ZY5.PREMIUM_GUILD_USER_MODAL,
                        location_stack: L,
                        location_section: t.section,
                        location_object: t.object,
                        guild_id: n.id
                    }),
                    (v.current = !0));
            },
            [t, L, n.id]
        );
    return (
        i.useEffect(() => {
            c.default.track(S.rMx.OPEN_MODAL, {
                type: S.ZY5.PREMIUM_GUILD_USER_MODAL,
                location_stack: L,
                location_section: t.section,
                location_object: t.object,
                guild_id: n.id
            });
        }, [n.id, t, L]),
        i.useEffect(() => {
            function e(e) {
                'Escape' === e.key && D();
            }
            return (
                window.addEventListener('keydown', e),
                () => {
                    window.removeEventListener('keydown', e);
                }
            );
        }, [D]),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)('div', {
                    className: A.closeIconWrapper,
                    children: (0, r.jsx)(l.Z, {
                        className: A.closeIcon,
                        closeAction: D,
                        keybind: 'ESC',
                        variant: l.Z.Variants.SOLID
                    })
                }),
                (0, r.jsxs)(o.AdvancedScrollerAuto, {
                    className: A.scroller,
                    children: [
                        (0, r.jsxs)('div', {
                            className: A.header,
                            children: [
                                (0, r.jsxs)('div', {
                                    className: A.headerContentWrapper,
                                    children: [
                                        (0, r.jsx)(o.Heading, {
                                            className: A.heading,
                                            color: 'always-white',
                                            variant: 'display-lg',
                                            children: g.Z.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_HEADING
                                        }),
                                        (0, r.jsx)(_.Z, {
                                            guild: n,
                                            closeLayer: D,
                                            onCtaVisibilityChange: O
                                        }),
                                        (0, r.jsx)(h.Z, { guild: n }),
                                        (0, r.jsx)(p.Z, { guild: n })
                                    ]
                                }),
                                (0, r.jsx)(T.O, {})
                            ]
                        }),
                        (0, r.jsx)('div', {
                            className: A.middleBodyContentWrapper,
                            children: (0, r.jsx)(m.Z, {})
                        }),
                        (0, r.jsxs)('div', {
                            className: A.lowerBody,
                            children: [
                                (0, r.jsxs)('div', {
                                    className: A.lowerBodyContentWrapper,
                                    children: [
                                        (0, r.jsx)(I.Z, {
                                            className: A.tierComparisonTable,
                                            guild: n
                                        }),
                                        (0, r.jsx)(d.Z, {}),
                                        (0, r.jsx)(E.Z, {})
                                    ]
                                }),
                                (0, r.jsx)(T.A, {}),
                                (0, r.jsx)('div', { className: A.lowerBodyBackgroundImage })
                            ]
                        }),
                        (0, r.jsx)(s.$, {
                            onChange: y,
                            children: (0, r.jsx)('div', { className: A.persistentCtaSpacer })
                        })
                    ]
                }),
                (0, r.jsx)(f.Z, {
                    guild: n,
                    isVisible: !R,
                    closeLayer: D
                })
            ]
        })
    );
};
