var i = n(200651);
n(192379);
var s = n(120356),
    r = n.n(s),
    l = n(481060),
    a = n(927359),
    o = n(975298),
    c = n(436774),
    d = n(55935),
    u = n(74538),
    m = n(474936),
    h = n(388032),
    g = n(153457);
function p(e) {
    let { showChargingUpState: t, rowValueText: n, endsAt: s, fractionalState: a, activationDate: o } = e,
        c = t ? h.intl.string(h.t['hT6i//']) : h.intl.string(h.t['3G0CTE']),
        d = t ? (void 0 === o ? '' : h.intl.formatToPlainString(h.t['0Vwb/v'], { activateDate: o })) : a === m.a$.FP_SUB ? h.intl.formatToPlainString(h.t.MMvaIC, { resumeDate: s.toDate() }) : '',
        u = r()({
            [g.fractionalUnactivatedPill]: t,
            [g.fractionalTimeRemainingPill]: !t
        }),
        p = r()({
            [g.fractionalUnactivatedPillText]: t,
            [g.fractionalTimeRemainingPillText]: !t
        }),
        x = r()({ [g.fractionalTimeRemainingRowHeader]: !t });
    return (0, i.jsxs)('div', {
        className: g.fractionalTimeRemainingRow,
        children: [
            (0, i.jsxs)('div', {
                className: g.fractionalTimeRemainingRowDetails,
                children: [
                    (0, i.jsx)(l.Heading, {
                        variant: 'heading-md/semibold',
                        className: x,
                        children: c
                    }),
                    d.length > 0 &&
                        (0, i.jsx)(l.Text, {
                            variant: 'text-sm/normal',
                            children: d
                        })
                ]
            }),
            (0, i.jsx)('div', {
                className: g.fractionalTimeRemainingPillWrapper,
                children: (0, i.jsx)('div', {
                    className: u,
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
    let { className: n, unactivatedUnits: s, activationDate: x } = e,
        { fractionalState: S, endsAt: T } = (0, o.Z)({ forceFetch: !0 }),
        C = (0, u.sk)(s),
        E = C > 0 && S === m.a$.NONE,
        _ = {
            days: h.t.fYmir6,
            hours: h.t['C3RO+v'],
            minutes: h.t.r77oHR
        },
        f = (0, d.QX)(
            {
                days: 0,
                hours: C,
                minutes: 0,
                seconds: 0
            },
            _
        ),
        I = (0, a.Z)(T, a.a.SHORT_TIME),
        N = E ? f : I;
    return (0, i.jsx)('div', {
        children: (0, i.jsxs)('div', {
            className: r()(n, g.fractionalPremiumAccountCredit),
            children: [
                ((t = f),
                (0, i.jsxs)('div', {
                    className: g.accountCreditRow,
                    children: [
                        (0, i.jsx)('div', {
                            className: g.iconBackgroundFractional,
                            children: (0, i.jsx)(l.NitroWheelIcon, {
                                size: 'md',
                                color: c.JX.PREMIUM_GUILD_BADGE_V2_BACKGROUND,
                                className: g.iconFractional
                            })
                        }),
                        (0, i.jsx)('div', {
                            className: g.rowDetails,
                            children: (0, i.jsx)(l.Heading, {
                                variant: 'heading-md/semibold',
                                children: h.intl.string(h.t.DFMPWV)
                            })
                        }),
                        (0, i.jsx)(l.Text, {
                            className: g.rowCreditCount,
                            variant: 'text-md/semibold',
                            children: t.length > 0 ? t : h.intl.string(h.t['B66Z+f'])
                        })
                    ]
                })),
                (0, i.jsx)(p, {
                    showChargingUpState: E,
                    rowValueText: N,
                    endsAt: T,
                    fractionalState: S,
                    activationDate: x
                })
            ]
        })
    });
};
