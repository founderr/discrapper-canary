var n = t(200651);
t(192379);
var a = t(120356),
    i = t.n(a),
    r = t(481060),
    o = t(927359),
    l = t(975298),
    c = t(436774),
    d = t(474936),
    _ = t(689938),
    u = t(153457);
function E() {
    return (0, n.jsxs)('div', {
        className: u.accountCreditRow,
        children: [
            (0, n.jsx)('div', {
                className: u.iconBackgroundFractional,
                children: (0, n.jsx)(r.NitroWheelIcon, {
                    size: 'md',
                    color: c.JX.PREMIUM_GUILD_BADGE_V2_BACKGROUND,
                    className: u.iconFractional
                })
            }),
            (0, n.jsx)('div', {
                className: u.rowDetails,
                children: (0, n.jsx)(r.Heading, {
                    variant: 'heading-md/semibold',
                    children: _.Z.Messages.FRACTIONAL_PREMIUM_CREDIT
                })
            }),
            (0, n.jsx)(r.Text, {
                className: u.rowCreditCount,
                variant: 'text-md/semibold',
                children: _.Z.Messages.FRACTIONAL_PREMIUM_ACTIVE
            })
        ]
    });
}
s.Z = function (e) {
    var s, t, a;
    let { className: c } = e,
        { fractionalState: T, endsAt: S } = (0, l.Z)({ forceFetch: !0 }),
        I = (0, o.Z)(S, o.a.SHORT_TIME);
    return (0, n.jsx)('div', {
        children: (0, n.jsxs)('div', {
            className: i()(c, u.fractionalPremiumAccountCredit),
            children: [
                (0, n.jsx)(E, {}),
                ((s = I),
                (t = S),
                (a = T),
                (0, n.jsxs)('div', {
                    className: u.fractionalTimeRemainingRow,
                    children: [
                        (0, n.jsxs)('div', {
                            className: u.fractionalTimeRemainingRowDetails,
                            children: [
                                (0, n.jsx)(r.Heading, {
                                    variant: 'heading-md/semibold',
                                    className: u.fractionalTimeRemainingRowHeader,
                                    children: _.Z.Messages.FRACTIONAL_PREMIUM_TIME_REMAINING
                                }),
                                a === d.a$.FP_SUB
                                    ? (0, n.jsx)(r.Text, {
                                          variant: 'text-sm/normal',
                                          children: _.Z.Messages.FRACTIONAL_CREDITS_SUBSCRIPTION_RESUME_INFO.format({ resumeDate: t })
                                      })
                                    : null
                            ]
                        }),
                        (0, n.jsx)('div', {
                            className: u.fractionalTimeRemainingPillWrapper,
                            children: (0, n.jsx)('div', {
                                className: u.fractionalTimeRemainingPill,
                                children: (0, n.jsx)(r.Text, {
                                    variant: 'text-sm/semibold',
                                    className: u.fractionalTimeRemainingPillText,
                                    children: s
                                })
                            })
                        })
                    ]
                }))
            ]
        })
    });
};
