var r = n(47120);
var i = n(735250),
    a = n(470079),
    o = n(913527),
    s = n.n(o),
    l = n(442837),
    u = n(433517),
    c = n(481060),
    d = n(355467),
    _ = n(230711),
    E = n(436774),
    f = n(78839),
    h = n(74538),
    p = n(543241),
    m = n(981631),
    I = n(474936),
    T = n(689938),
    g = n(595499);
let S = 'premiumRetentionEmojiPickerNotice',
    A = u.K.get(S),
    v = (e) => {
        let { closePopout: t, channel: n } = e,
            [r, o] = a.useState(!1),
            { subscription: v, hasFetchedSubscriptions: N } = (0, l.cj)([f.ZP], () => ({
                subscription: f.ZP.getPremiumSubscription(),
                hasFetchedSubscriptions: f.ZP.hasFetchedSubscriptions()
            }));
        if (
            (a.useEffect(() => {
                !N && (0, d.jg)();
            }, [N]),
            null == v || !(0, h.zV)(v.status) || r)
        )
            return null;
        let O = v.status === m.O0b.PAST_DUE ? (0, h.lY)(v).expiresDate : s()(v.currentPeriodStart).add(I.gh),
            R = ''.concat(v.id, ':').concat(O.toISOString());
        if (A === R) return null;
        let C = h.ZP.getPremiumType(v.planId) === I.p9.TIER_0 ? E.JX.PREMIUM_TIER_0 : h.ZP.getPremiumType(v.planId) === I.p9.TIER_1 ? E.JX.PREMIUM_TIER_1 : E.JX.PREMIUM_TIER_2;
        return (0, i.jsxs)('div', {
            className: g.premiumRetentionNotice,
            children: [
                (0, i.jsx)(c.NitroWheelIcon, {
                    size: 'md',
                    className: g.premiumRetentionNoticeIcon,
                    color: C
                }),
                (0, i.jsxs)('div', {
                    className: g.premiumRetentionNoticeContent,
                    children: [
                        (0, i.jsx)(c.Text, {
                            variant: 'text-xs/normal',
                            children: T.Z.Messages.PREMIUM_RETENTION_EMOJI_PICKER_DESCRIPTION.format({
                                planName: h.ZP.getDisplayPremiumType(v.planId),
                                endsAt: O
                            })
                        }),
                        (0, i.jsx)('div', {
                            children: (0, i.jsx)(c.Anchor, {
                                onClick: () => {
                                    (0, p.A3)(n), t(), _.Z.open(m.oAB.PREMIUM);
                                },
                                children: T.Z.Messages.PREMIUM_RETENTION_EMOJI_PICKER_UPDATE_PAYMENT_INFORMATION
                            })
                        })
                    ]
                }),
                (0, i.jsx)(c.Clickable, {
                    onClick: () => {
                        u.K.set(S, R), (A = R), o(!0);
                    },
                    children: (0, i.jsx)(c.XSmallIcon, {
                        size: 'md',
                        color: 'currentColor',
                        className: g.premiumRetentionNoticeClose
                    })
                })
            ]
        });
    };
t.Z = v;
