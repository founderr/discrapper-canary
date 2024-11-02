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
    h = n(74538),
    p = n(543241),
    m = n(981631),
    g = n(474936),
    E = n(388032),
    v = n(595499);
let I = 'premiumRetentionEmojiPickerNotice',
    S = l.K.get(I);
t.Z = (e) => {
    let { closePopout: t, channel: n } = e,
        [a, T] = i.useState(!1),
        { subscription: b, hasFetchedSubscriptions: y } = (0, o.cj)([_.ZP], () => ({
            subscription: _.ZP.getPremiumSubscription(),
            hasFetchedSubscriptions: _.ZP.hasFetchedSubscriptions()
        }));
    if (
        (i.useEffect(() => {
            !y && (0, c.jg)();
        }, [y]),
        null == b || !(0, h.zV)(b.status) || a)
    )
        return null;
    let A = b.status === m.O0b.PAST_DUE ? (0, h.lY)(b).expiresDate : s()(b.currentPeriodStart).add(g.gh),
        N = ''.concat(b.id, ':').concat(A.toISOString());
    if (S === N) return null;
    let C = h.ZP.getPremiumType(b.planId) === g.p9.TIER_0 ? f.JX.PREMIUM_TIER_0 : h.ZP.getPremiumType(b.planId) === g.p9.TIER_1 ? f.JX.PREMIUM_TIER_1 : f.JX.PREMIUM_TIER_2;
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
                            planName: h.ZP.getDisplayPremiumType(b.planId),
                            endsAt: A.toDate()
                        })
                    }),
                    (0, r.jsx)('div', {
                        children: (0, r.jsx)(u.Anchor, {
                            onClick: () => {
                                (0, p.A3)(n), t(), d.Z.open(m.oAB.PREMIUM);
                            },
                            children: E.intl.string(E.t.W3aavr)
                        })
                    })
                ]
            }),
            (0, r.jsx)(u.Clickable, {
                onClick: () => {
                    l.K.set(I, N), (S = N), T(!0);
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
