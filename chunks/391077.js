var n = t(200651);
t(192379);
var a = t(120356),
    i = t.n(a),
    r = t(481060),
    o = t(927359),
    l = t(975298),
    c = t(436774),
    d = t(55935),
    _ = t(74538),
    u = t(474936),
    E = t(689938),
    T = t(153457);
function S(e) {
    let { hasUnactivatedUnits: s, durationText: t, endsAt: a, fractionalState: o, unactivatedHoursString: l, activationDate: c } = e,
        d = s ? E.Z.Messages.FRACTIONAL_PREMIUM_CREDITS_UNACTIVATED : E.Z.Messages.FRACTIONAL_PREMIUM_TIME_REMAINING,
        _ = s ? (void 0 === c ? E.Z.Messages.FRACTIONAL_PREMIUM_CREDITS_UNACTIVATED_INFO.format({ activateDate: c }) : '') : o === u.a$.FP_SUB ? E.Z.Messages.FRACTIONAL_CREDITS_SUBSCRIPTION_RESUME_INFO.format({ resumeDate: a }) : '',
        S = s ? l : t,
        I = i()({
            [T.fractionalUnactivatedPill]: s,
            [T.fractionalTimeRemainingPill]: !s
        }),
        N = i()({
            [T.fractionalUnactivatedPillText]: s,
            [T.fractionalTimeRemainingPillText]: !s
        }),
        m = i()({ [T.fractionalTimeRemainingRowHeader]: !s });
    return (0, n.jsxs)('div', {
        className: T.fractionalTimeRemainingRow,
        children: [
            (0, n.jsxs)('div', {
                className: T.fractionalTimeRemainingRowDetails,
                children: [
                    (0, n.jsx)(r.Heading, {
                        variant: 'heading-md/semibold',
                        className: m,
                        children: d
                    }),
                    _.length > 0 &&
                        (0, n.jsx)(r.Text, {
                            variant: 'text-sm/normal',
                            children: _
                        })
                ]
            }),
            (0, n.jsx)('div', {
                className: T.fractionalTimeRemainingPillWrapper,
                children: (0, n.jsx)('div', {
                    className: I,
                    children: (0, n.jsx)(r.Text, {
                        variant: 'text-sm/semibold',
                        className: N,
                        children: S
                    })
                })
            })
        ]
    });
}
s.Z = function (e) {
    var s;
    let { className: t, unactivatedUnits: a, activationDate: u } = e,
        { fractionalState: I, endsAt: N } = (0, l.Z)({ forceFetch: !0 }),
        m = (0, o.Z)(N, o.a.SHORT_TIME),
        C = (0, _.sk)(a),
        A = C > 0,
        g = {
            days: E.Z.Messages.FRACTIONAL_PREMIUM_DURATION_DAYS_SHORT,
            hours: E.Z.Messages.FRACTIONAL_PREMIUM_DURATION_HOURS_SHORT,
            minutes: E.Z.Messages.FRACTIONAL_PREMIUM_DURATION_MINUTES_SHORT
        },
        h = A
            ? (0, d.QX)(
                  {
                      days: 0,
                      hours: C,
                      minutes: 0,
                      seconds: 0
                  },
                  g
              )
            : '';
    return (0, n.jsx)('div', {
        children: (0, n.jsxs)('div', {
            className: i()(t, T.fractionalPremiumAccountCredit),
            children: [
                ((s = h),
                (0, n.jsxs)('div', {
                    className: T.accountCreditRow,
                    children: [
                        (0, n.jsx)('div', {
                            className: T.iconBackgroundFractional,
                            children: (0, n.jsx)(r.NitroWheelIcon, {
                                size: 'md',
                                color: c.JX.PREMIUM_GUILD_BADGE_V2_BACKGROUND,
                                className: T.iconFractional
                            })
                        }),
                        (0, n.jsx)('div', {
                            className: T.rowDetails,
                            children: (0, n.jsx)(r.Heading, {
                                variant: 'heading-md/semibold',
                                children: E.Z.Messages.FRACTIONAL_PREMIUM_CREDIT
                            })
                        }),
                        (0, n.jsx)(r.Text, {
                            className: T.rowCreditCount,
                            variant: 'text-md/semibold',
                            children: s.length > 0 ? s : E.Z.Messages.FRACTIONAL_PREMIUM_ACTIVE
                        })
                    ]
                })),
                (0, n.jsx)(S, {
                    hasUnactivatedUnits: A,
                    durationText: m,
                    endsAt: N,
                    fractionalState: I,
                    unactivatedHoursString: h,
                    activationDate: u
                })
            ]
        })
    });
};
