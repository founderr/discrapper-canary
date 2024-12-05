n.d(t, {
    c: function () {
        return f;
    }
});
var i = n(200651),
    s = n(192379),
    r = n(442837),
    l = n(481060),
    a = n(37234),
    o = n(100527),
    c = n(906732),
    d = n(94795),
    u = n(327943),
    m = n(539873),
    g = n(311476),
    h = n(197115),
    p = n(626135),
    x = n(981631),
    T = n(474936),
    S = n(388032),
    _ = n(352545),
    E = n(232186);
let C = () => {
        (0, d.nJ)(), (0, a.xf)();
    },
    f = () => {
        let { analyticsLocations: e } = (0, c.ZP)(o.Z.USER_SETTINGS),
            t = (0, r.e7)([u.Z], () => u.Z.isUpsellPreview),
            { enabled: n } = g.Z.getCurrentConfig(
                { location: 'UserSettingsAppearanceInAppIcon' },
                {
                    autoTrackExposure: t,
                    disable: !t
                }
            );
        return (
            s.useEffect(() => {
                t &&
                    p.default.track(x.rMx.PREMIUM_UPSELL_VIEWED, {
                        type: T.cd.APP_ICON_UPSELL,
                        location_stack: e
                    });
            }, []),
            (0, i.jsxs)('div', {
                className: _.selectionGroup,
                children: [
                    (0, i.jsx)(m.Z, {
                        disabled: t && !n,
                        renderCTAButtons: () =>
                            (0, i.jsxs)('div', {
                                className: _.tryItOutButtons,
                                children: [
                                    (0, i.jsx)(l.Button, {
                                        color: !n && t ? l.Button.Colors.PRIMARY : l.Button.Colors.BRAND,
                                        onClick: () => C(),
                                        children: n ? S.intl.string(S.t.SKNnqq) : S.intl.string(S.t['hb/wEx'])
                                    }),
                                    t
                                        ? (0, i.jsx)(h.Z, {
                                              showGradient: n,
                                              subscriptionTier: T.Si.TIER_2,
                                              buttonText: n ? S.intl.string(S.t.pj0XBA) : S.intl.string(S.t.mr4K7O)
                                          })
                                        : null
                                ]
                            })
                    }),
                    (0, i.jsx)(l.FormDivider, { className: E.marginTop20 })
                ]
            })
        );
    };
