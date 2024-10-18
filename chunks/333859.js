t.d(s, {
    c: function () {
        return h;
    }
});
var n = t(735250),
    a = t(470079),
    i = t(442837),
    r = t(481060),
    o = t(37234),
    l = t(100527),
    c = t(906732),
    d = t(94795),
    _ = t(327943),
    u = t(539873),
    E = t(311476),
    T = t(197115),
    S = t(626135),
    I = t(981631),
    N = t(474936),
    m = t(689938),
    A = t(444298),
    C = t(113207);
let g = () => {
        (0, d.nJ)(), (0, o.xf)();
    },
    h = () => {
        let { analyticsLocations: e } = (0, c.ZP)(l.Z.USER_SETTINGS),
            s = (0, i.e7)([_.Z], () => _.Z.isUpsellPreview),
            { enabled: t } = E.Z.getCurrentConfig(
                { location: 'UserSettingsAppearanceInAppIcon' },
                {
                    autoTrackExposure: s,
                    disable: !s
                }
            );
        return (
            a.useEffect(() => {
                s &&
                    S.default.track(I.rMx.PREMIUM_UPSELL_VIEWED, {
                        type: N.cd.APP_ICON_UPSELL,
                        location_stack: e
                    });
            }, []),
            (0, n.jsxs)('div', {
                className: A.selectionGroup,
                children: [
                    (0, n.jsx)(u.Z, {
                        disabled: s && !t,
                        renderCTAButtons: () =>
                            (0, n.jsxs)('div', {
                                className: A.tryItOutButtons,
                                children: [
                                    (0, n.jsx)(r.Button, {
                                        color: !t && s ? r.Button.Colors.PRIMARY : r.Button.Colors.BRAND,
                                        onClick: () => g(),
                                        children: t ? m.Z.Messages.PREVIEW : m.Z.Messages.APP_ICON_PREVIEW_TITLE
                                    }),
                                    s
                                        ? (0, n.jsx)(T.Z, {
                                              showGradient: t,
                                              subscriptionTier: N.Si.TIER_2,
                                              buttonText: t ? m.Z.Messages.PREMIUM_UPSELL_GET_NITRO : m.Z.Messages.USER_SETTINGS_CUSTOMIZATION_UPSELL
                                          })
                                        : null
                                ]
                            })
                    }),
                    (0, n.jsx)(r.FormDivider, { className: C.marginTop20 })
                ]
            })
        );
    };
