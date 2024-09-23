var s = n(735250);
n(470079);
var a = n(442837),
    r = n(481060),
    i = n(100527),
    o = n(906732),
    l = n(963249),
    c = n(78839),
    d = n(74538),
    _ = n(823188),
    u = n(474936),
    E = n(981631),
    T = n(689938),
    I = n(687171);
t.Z = () => {
    let e = (0, a.e7)([c.ZP], () => c.ZP.getPremiumTypeSubscription()),
        t = (0, d.u0)(null == e ? void 0 : e.trialId),
        n = (0, o.ZP)([i.Z.PREMIUM_MARKETING_REVERSE_TRIAL_BANNER]);
    return (0, s.jsxs)('div', {
        className: I.banner,
        children: [
            (0, s.jsx)(_.Cy, {
                text: T.Z.Messages.PREMIUM_TIER_CARD_TRIAL_ACTIVATED,
                className: I.trialPill,
                colorOptions: _.VE.PREMIUM_TIER_2_WHITE_FILL
            }),
            (0, s.jsx)('div', {
                className: I.body,
                children: (0, s.jsx)(r.Text, {
                    color: 'always-white',
                    variant: 'text-md/medium',
                    children: T.Z.Messages.REVERSE_TRIAL_NITRO_HOME_HEADER_BODY_NEW.format({ weeks: t })
                })
            }),
            (0, s.jsx)(r.Button, {
                onClick: () => {
                    (0, l.Z)({
                        initialPlanId: u.Xh.PREMIUM_MONTH_TIER_2,
                        analyticsLocations: n.analyticsLocations,
                        analyticsObject: { object: E.qAy.BUTTON_CTA }
                    });
                },
                look: r.ButtonLooks.OUTLINED,
                color: r.ButtonColors.WHITE,
                children: T.Z.Messages.REVERSE_TRIAL_NITRO_HOME_HEADER_BUTTON_LABEL
            })
        ]
    });
};
