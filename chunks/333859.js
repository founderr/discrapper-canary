n.d(t, {
    c: function () {
        return I;
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
    h = n(311476),
    g = n(197115),
    p = n(626135),
    x = n(981631),
    S = n(474936),
    T = n(388032),
    C = n(444298),
    E = n(113207);
let _ = () => {
        (0, d.nJ)(), (0, a.xf)();
    },
    I = () => {
        let { analyticsLocations: e } = (0, c.ZP)(o.Z.USER_SETTINGS),
            t = (0, r.e7)([u.Z], () => u.Z.isUpsellPreview),
            { enabled: n } = h.Z.getCurrentConfig(
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
                        type: S.cd.APP_ICON_UPSELL,
                        location_stack: e
                    });
            }, []),
            (0, i.jsxs)('div', {
                className: C.selectionGroup,
                children: [
                    (0, i.jsx)(m.Z, {
                        disabled: t && !n,
                        renderCTAButtons: () =>
                            (0, i.jsxs)('div', {
                                className: C.tryItOutButtons,
                                children: [
                                    (0, i.jsx)(l.Button, {
                                        color: !n && t ? l.Button.Colors.PRIMARY : l.Button.Colors.BRAND,
                                        onClick: () => _(),
                                        children: n ? T.intl.string(T.t.SKNnqq) : T.intl.string(T.t['hb/wEx'])
                                    }),
                                    t
                                        ? (0, i.jsx)(g.Z, {
                                              showGradient: n,
                                              subscriptionTier: S.Si.TIER_2,
                                              buttonText: n ? T.intl.string(T.t.pj0XBA) : T.intl.string(T.t.mr4K7O)
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
