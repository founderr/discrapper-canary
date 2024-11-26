n(47120);
var r = n(200651),
    i = n(192379),
    a = n(913527),
    s = n.n(a),
    o = n(442837),
    l = n(433517),
    u = n(481060),
    c = n(355467),
    d = n(230711),
    f = n(436774),
    _ = n(78839),
    p = n(74538),
    h = n(543241),
    m = n(981631),
    g = n(474936),
    E = n(388032),
    v = n(888084);
let I = 'premiumRetentionEmojiPickerNotice',
    T = l.K.get(I);
t.Z = (e) => {
    let { closePopout: t, channel: n } = e,
        [a, b] = i.useState(!1),
        { subscription: S, hasFetchedSubscriptions: y } = (0, o.cj)([_.ZP], () => ({
            subscription: _.ZP.getPremiumSubscription(),
            hasFetchedSubscriptions: _.ZP.hasFetchedSubscriptions()
        }));
    if (
        (i.useEffect(() => {
            !y && (0, c.jg)();
        }, [y]),
        null == S || !(0, p.zV)(S.status) || a)
    )
        return null;
    let A = S.status === m.O0b.PAST_DUE ? (0, p.lY)(S).expiresDate : s()(S.currentPeriodStart).add(g.gh),
        N = ''.concat(S.id, ':').concat(A.toISOString());
    if (T === N) return null;
    let C = p.ZP.getPremiumType(S.planId) === g.p9.TIER_0 ? f.JX.PREMIUM_TIER_0 : p.ZP.getPremiumType(S.planId) === g.p9.TIER_1 ? f.JX.PREMIUM_TIER_1 : f.JX.PREMIUM_TIER_2;
    return (0, r.jsxs)('div', {
        className: v.premiumRetentionNotice,
        children: [
            (0, r.jsx)(u.NitroWheelIcon, {
                size: 'md',
                className: v.premiumRetentionNoticeIcon,
                color: C
            }),
            (0, r.jsxs)('div', {
                className: v.premiumRetentionNoticeContent,
                children: [
                    (0, r.jsx)(u.Text, {
                        variant: 'text-xs/normal',
                        children: E.intl.format(E.t.bTMjiI, {
                            planName: p.ZP.getDisplayPremiumType(S.planId),
                            endsAt: A.toDate()
                        })
                    }),
                    (0, r.jsx)('div', {
                        children: (0, r.jsx)(u.Anchor, {
                            onClick: () => {
                                (0, h.A3)(n), t(), d.Z.open(m.oAB.PREMIUM);
                            },
                            children: E.intl.string(E.t.W3aavr)
                        })
                    })
                ]
            }),
            (0, r.jsx)(u.Clickable, {
                onClick: () => {
                    l.K.set(I, N), (T = N), b(!0);
                },
                children: (0, r.jsx)(u.XSmallIcon, {
                    size: 'md',
                    color: 'currentColor',
                    className: v.premiumRetentionNoticeClose
                })
            })
        ]
    });
};
