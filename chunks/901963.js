n(47120);
var r = n(735250),
    i = n(470079),
    a = n(913527),
    s = n.n(a),
    o = n(442837),
    l = n(433517),
    u = n(481060),
    c = n(355467),
    d = n(230711),
    _ = n(436774),
    E = n(78839),
    f = n(74538),
    h = n(543241),
    p = n(981631),
    I = n(474936),
    m = n(689938),
    T = n(595499);
let S = 'premiumRetentionEmojiPickerNotice',
    g = l.K.get(S);
t.Z = (e) => {
    let { closePopout: t, channel: n } = e,
        [a, A] = i.useState(!1),
        { subscription: N, hasFetchedSubscriptions: R } = (0, o.cj)([E.ZP], () => ({
            subscription: E.ZP.getPremiumSubscription(),
            hasFetchedSubscriptions: E.ZP.hasFetchedSubscriptions()
        }));
    if (
        (i.useEffect(() => {
            !R && (0, c.jg)();
        }, [R]),
        null == N || !(0, f.zV)(N.status) || a)
    )
        return null;
    let O = N.status === p.O0b.PAST_DUE ? (0, f.lY)(N).expiresDate : s()(N.currentPeriodStart).add(I.gh),
        v = ''.concat(N.id, ':').concat(O.toISOString());
    if (g === v) return null;
    let C = f.ZP.getPremiumType(N.planId) === I.p9.TIER_0 ? _.JX.PREMIUM_TIER_0 : f.ZP.getPremiumType(N.planId) === I.p9.TIER_1 ? _.JX.PREMIUM_TIER_1 : _.JX.PREMIUM_TIER_2;
    return (0, r.jsxs)('div', {
        className: T.premiumRetentionNotice,
        children: [
            (0, r.jsx)(u.NitroWheelIcon, {
                size: 'md',
                className: T.premiumRetentionNoticeIcon,
                color: C
            }),
            (0, r.jsxs)('div', {
                className: T.premiumRetentionNoticeContent,
                children: [
                    (0, r.jsx)(u.Text, {
                        variant: 'text-xs/normal',
                        children: m.Z.Messages.PREMIUM_RETENTION_EMOJI_PICKER_DESCRIPTION.format({
                            planName: f.ZP.getDisplayPremiumType(N.planId),
                            endsAt: O.toDate()
                        })
                    }),
                    (0, r.jsx)('div', {
                        children: (0, r.jsx)(u.Anchor, {
                            onClick: () => {
                                (0, h.A3)(n), t(), d.Z.open(p.oAB.PREMIUM);
                            },
                            children: m.Z.Messages.PREMIUM_RETENTION_EMOJI_PICKER_UPDATE_PAYMENT_INFORMATION
                        })
                    })
                ]
            }),
            (0, r.jsx)(u.Clickable, {
                onClick: () => {
                    l.K.set(S, v), (g = v), A(!0);
                },
                children: (0, r.jsx)(u.XSmallIcon, {
                    size: 'md',
                    color: 'currentColor',
                    className: T.premiumRetentionNoticeClose
                })
            })
        ]
    });
};
