var n = t(735250);
t(470079);
var a = t(120356),
    i = t.n(a),
    r = t(481060),
    o = t(927359),
    l = t(436774),
    c = t(689938),
    d = t(153457);
function _() {
    return (0, n.jsxs)('div', {
        className: d.accountCreditRow,
        children: [
            (0, n.jsx)('div', {
                className: d.iconBackgroundFractional,
                children: (0, n.jsx)(r.NitroWheelIcon, {
                    size: 'md',
                    color: l.JX.PREMIUM_GUILD_BADGE_V2_BACKGROUND,
                    className: d.iconFractional
                })
            }),
            (0, n.jsx)('div', {
                className: d.rowDetails,
                children: (0, n.jsx)(r.Heading, {
                    variant: 'heading-md/semibold',
                    children: c.Z.Messages.FRACTIONAL_PREMIUM_CREDIT
                })
            }),
            (0, n.jsx)(r.Text, {
                className: d.rowCreditCount,
                variant: 'text-md/semibold',
                children: c.Z.Messages.FRACTIONAL_PREMIUM_ACTIVE
            })
        ]
    });
}
s.Z = function (e) {
    var s;
    let { className: t, entitlements: a, endsAt: l } = e,
        u = (0, o.Z)(l, o.a.SHORT_TIME);
    return (0, n.jsx)('div', {
        children: (0, n.jsxs)('div', {
            className: i()(t, d.fractionalPremiumAccountCredit),
            children: [
                a.map((e, s) => (0, n.jsx)(_, {}, s)),
                ((s = u),
                (0, n.jsxs)('div', {
                    className: d.fractionalTimeRemainingRow,
                    children: [
                        (0, n.jsx)('div', {
                            className: d.fractionalTimeRemainingRowDetails,
                            children: (0, n.jsx)(r.Heading, {
                                variant: 'heading-md/semibold',
                                className: d.fractionalTimeRemainingRowHeader,
                                children: c.Z.Messages.FRACTIONAL_PREMIUM_TIME_REMAINING
                            })
                        }),
                        (0, n.jsx)('div', {
                            className: d.fractionalTimeRemainingPill,
                            children: (0, n.jsx)(r.Text, {
                                variant: 'text-sm/semibold',
                                className: d.fractionalTimeRemainingPillText,
                                children: s
                            })
                        })
                    ]
                }))
            ]
        })
    });
};
