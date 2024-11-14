var i = n(200651);
n(192379);
var s = n(120356),
    r = n.n(s),
    l = n(481060),
    a = n(927359),
    o = n(436774),
    c = n(55935),
    d = n(74538),
    u = n(474936),
    m = n(388032),
    h = n(153457);
function g(e) {
    let { showChargingUpState: t, rowValueText: n, endsAt: s, fractionalState: a, activationDate: o } = e,
        c = t ? m.intl.string(m.t['hT6i//']) : m.intl.string(m.t['3G0CTE']),
        d = t ? (void 0 === o ? '' : m.intl.formatToPlainString(m.t['0Vwb/v'], { activateDate: o })) : a === u.a$.FP_SUB_PAUSED ? m.intl.formatToPlainString(m.t.MMvaIC, { resumeDate: s.toDate() }) : '',
        g = r()({
            [h.fractionalUnactivatedPill]: t,
            [h.fractionalTimeRemainingPill]: !t
        }),
        p = r()({
            [h.fractionalUnactivatedPillText]: t,
            [h.fractionalTimeRemainingPillText]: !t
        }),
        x = r()({ [h.fractionalTimeRemainingRowHeader]: !t });
    return (0, i.jsxs)('div', {
        className: h.fractionalTimeRemainingRow,
        children: [
            (0, i.jsxs)('div', {
                className: h.fractionalTimeRemainingRowDetails,
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
                className: h.fractionalTimeRemainingPillWrapper,
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
    let { fractionalPremiumInfo: n, className: s, unactivatedUnits: p, activationDate: x } = e,
        S = (0, d.sk)(p),
        T = S > 0 && n.fractionalState === u.a$.NONE,
        C = {
            days: m.t.fYmir6,
            hours: m.t['C3RO+v'],
            minutes: m.t.r77oHR
        },
        _ = T
            ? (0, c.QX)(
                  {
                      days: 0,
                      hours: S,
                      minutes: 0,
                      seconds: 0
                  },
                  C
              )
            : '',
        E = (0, a.Z)(n.endsAt, a.a.SHORT_TIME),
        f = T ? _ : E;
    return (0, i.jsx)('div', {
        children: (0, i.jsxs)('div', {
            className: r()(s, h.fractionalPremiumAccountCredit),
            children: [
                ((t = _),
                (0, i.jsxs)('div', {
                    className: h.accountCreditRow,
                    children: [
                        (0, i.jsx)('div', {
                            className: h.iconBackgroundFractional,
                            children: (0, i.jsx)(l.NitroWheelIcon, {
                                size: 'md',
                                color: o.JX.PREMIUM_GUILD_BADGE_V2_BACKGROUND,
                                className: h.iconFractional
                            })
                        }),
                        (0, i.jsx)('div', {
                            className: h.rowDetails,
                            children: (0, i.jsx)(l.Heading, {
                                variant: 'heading-md/semibold',
                                children: m.intl.string(m.t.DFMPWV)
                            })
                        }),
                        (0, i.jsx)(l.Text, {
                            className: h.rowCreditCount,
                            variant: 'text-md/semibold',
                            children: t.length > 0 ? t : m.intl.string(m.t['B66Z+f'])
                        })
                    ]
                })),
                (0, i.jsx)(g, {
                    showChargingUpState: T,
                    rowValueText: f,
                    endsAt: n.endsAt,
                    fractionalState: n.fractionalState,
                    activationDate: x
                })
            ]
        })
    });
};
