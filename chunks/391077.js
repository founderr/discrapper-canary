var i = n(200651);
n(192379);
var s = n(120356),
    r = n.n(s),
    l = n(481060),
    a = n(927359),
    o = n(436774),
    c = n(74538),
    d = n(474936),
    u = n(388032),
    m = n(153457);
function h(e) {
    let { showChargingUpState: t, rowValueText: n, endsAt: s, fractionalState: a, activationDate: o } = e,
        c = t ? u.intl.string(u.t['hT6i//']) : u.intl.string(u.t['3G0CTE']),
        h = t ? (void 0 === o ? '' : u.intl.formatToPlainString(u.t['0Vwb/v'], { activateDate: o })) : a === d.a$.FP_SUB_PAUSED ? u.intl.formatToPlainString(u.t.MMvaIC, { resumeDate: s.toDate() }) : '',
        g = r()({
            [m.fractionalUnactivatedPill]: t,
            [m.fractionalTimeRemainingPill]: !t
        }),
        p = r()({
            [m.fractionalUnactivatedPillText]: t,
            [m.fractionalTimeRemainingPillText]: !t
        }),
        x = r()({ [m.fractionalTimeRemainingRowHeader]: !t });
    return (0, i.jsxs)('div', {
        className: m.fractionalTimeRemainingRow,
        children: [
            (0, i.jsxs)('div', {
                className: m.fractionalTimeRemainingRowDetails,
                children: [
                    (0, i.jsx)(l.Heading, {
                        variant: 'heading-md/semibold',
                        className: x,
                        children: c
                    }),
                    h.length > 0 &&
                        (0, i.jsx)(l.Text, {
                            variant: 'text-sm/normal',
                            children: h
                        })
                ]
            }),
            (0, i.jsx)('div', {
                className: m.fractionalTimeRemainingPillWrapper,
                children: (0, i.jsx)('div', {
                    className: g,
                    children: (0, i.jsx)(l.Text, {
                        variant: 'text-sm/semibold',
                        className: p,
                        children: n
                    })
                })
            })
        ]
    });
}
t.Z = function (e) {
    var t;
    let { fractionalPremiumInfo: n, className: s, unactivatedUnits: d, activationDate: g } = e,
        p = (0, c.Am)(n, d),
        x = p.length > 0,
        S = (0, a.Z)(n.endsAt, a.a.SHORT_TIME),
        T = x ? p : S;
    return (0, i.jsx)('div', {
        children: (0, i.jsxs)('div', {
            className: r()(s, m.fractionalPremiumAccountCredit),
            children: [
                ((t = p),
                (0, i.jsxs)('div', {
                    className: m.accountCreditRow,
                    children: [
                        (0, i.jsx)('div', {
                            className: m.iconBackgroundFractional,
                            children: (0, i.jsx)(l.NitroWheelIcon, {
                                size: 'md',
                                color: o.JX.PREMIUM_GUILD_BADGE_V2_BACKGROUND,
                                className: m.iconFractional
                            })
                        }),
                        (0, i.jsx)('div', {
                            className: m.rowDetails,
                            children: (0, i.jsx)(l.Heading, {
                                variant: 'heading-md/semibold',
                                children: u.intl.string(u.t.DFMPWV)
                            })
                        }),
                        (0, i.jsx)(l.Text, {
                            className: m.rowCreditCount,
                            variant: 'text-md/semibold',
                            children: t.length > 0 ? t : u.intl.string(u.t['B66Z+f'])
                        })
                    ]
                })),
                (0, i.jsx)(h, {
                    showChargingUpState: x,
                    rowValueText: T,
                    endsAt: n.endsAt,
                    fractionalState: n.fractionalState,
                    activationDate: g
                })
            ]
        })
    });
};
