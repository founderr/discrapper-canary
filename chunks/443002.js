var r = n(47120);
var i = n(735250),
    a = n(470079),
    o = n(77866),
    s = n(622535),
    l = n(481060),
    u = n(425493),
    c = n(906732),
    d = n(626135),
    _ = n(724884),
    E = n(355045),
    f = n(290799),
    h = n(394769),
    p = n(555932),
    m = n(808189),
    I = n(362948),
    T = n(245004),
    g = n(383881),
    S = n(981631),
    A = n(689938),
    v = n(429905);
function N(e) {
    let { analyticsLocation: t, guild: n, onClose: r } = e,
        [N, O] = a.useState(!0),
        R = a.useRef(!1),
        C = (0, o.Z)(() => Date.now()),
        { analyticsLocations: y } = (0, c.ZP)(),
        L = a.useCallback(() => {
            r(),
                d.default.track(S.rMx.MODAL_DISMISSED, {
                    type: S.ZY5.PREMIUM_GUILD_USER_MODAL,
                    location_stack: y,
                    location_section: t.section,
                    location_object: t.object,
                    guild_id: n.id,
                    duration_open_ms: Date.now() - C
                });
        }, [r, t, y, C, n.id]),
        b = a.useCallback(
            (e) => {
                e &&
                    !R.current &&
                    (d.default.track(S.rMx.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
                        type: S.ZY5.PREMIUM_GUILD_USER_MODAL,
                        location_stack: y,
                        location_section: t.section,
                        location_object: t.object,
                        guild_id: n.id
                    }),
                    (R.current = !0));
            },
            [t, y, n.id]
        );
    return (
        a.useEffect(() => {
            d.default.track(S.rMx.OPEN_MODAL, {
                type: S.ZY5.PREMIUM_GUILD_USER_MODAL,
                location_stack: y,
                location_section: t.section,
                location_object: t.object,
                guild_id: n.id
            });
        }, [n.id, t, y]),
        a.useEffect(() => {
            function e(e) {
                'Escape' === e.key && L();
            }
            return (
                window.addEventListener('keydown', e),
                () => {
                    window.removeEventListener('keydown', e);
                }
            );
        }, [L]),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)('div', {
                    className: v.closeIconWrapper,
                    children: (0, i.jsx)(u.Z, {
                        className: v.closeIcon,
                        closeAction: L,
                        keybind: 'ESC',
                        variant: u.Z.Variants.SOLID
                    })
                }),
                (0, i.jsxs)(l.AdvancedScrollerAuto, {
                    className: v.scroller,
                    children: [
                        (0, i.jsxs)('div', {
                            className: v.header,
                            children: [
                                (0, i.jsxs)('div', {
                                    className: v.headerContentWrapper,
                                    children: [
                                        (0, i.jsx)(l.Heading, {
                                            className: v.heading,
                                            color: 'always-white',
                                            variant: 'display-lg',
                                            children: A.Z.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_HEADING
                                        }),
                                        (0, i.jsx)(E.Z, {
                                            guild: n,
                                            closeLayer: L,
                                            onCtaVisibilityChange: O
                                        }),
                                        (0, i.jsx)(p.Z, { guild: n }),
                                        (0, i.jsx)(m.Z, { guild: n })
                                    ]
                                }),
                                (0, i.jsx)(g.O, {})
                            ]
                        }),
                        (0, i.jsx)('div', {
                            className: v.middleBodyContentWrapper,
                            children: (0, i.jsx)(T.Z, {})
                        }),
                        (0, i.jsxs)('div', {
                            className: v.lowerBody,
                            children: [
                                (0, i.jsxs)('div', {
                                    className: v.lowerBodyContentWrapper,
                                    children: [
                                        (0, i.jsx)(I.Z, {
                                            className: v.tierComparisonTable,
                                            guild: n
                                        }),
                                        (0, i.jsx)(_.Z, {}),
                                        (0, i.jsx)(f.Z, {})
                                    ]
                                }),
                                (0, i.jsx)(g.A, {}),
                                (0, i.jsx)('div', { className: v.lowerBodyBackgroundImage })
                            ]
                        }),
                        (0, i.jsx)(s.$, {
                            onChange: b,
                            children: (0, i.jsx)('div', { className: v.persistentCtaSpacer })
                        })
                    ]
                }),
                (0, i.jsx)(h.Z, {
                    guild: n,
                    isVisible: !N,
                    closeLayer: L
                })
            ]
        })
    );
}
t.Z = N;
