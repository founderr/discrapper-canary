n.d(t, {
    V: function () {
        return _;
    }
});
var r = n(735250);
n(470079);
var i = n(481060),
    a = n(594174),
    o = n(78839),
    s = n(585483),
    l = n(74538),
    u = n(138464),
    c = n(474936),
    d = n(981631);
function _(e) {
    let { processedCode: t, channelContext: _, customGiftMessage: E, giftInfo: f } = e,
        h = !1,
        p = null,
        m = a.default.getCurrentUser(),
        I = (0, l.yd)(null == m ? void 0 : m.premiumType, c.p9.TIER_0);
    (0, i.openModalLazy)(
        async () => {
            let { default: e } = await Promise.all([n.e('92446'), n.e('7312')]).then(n.bind(n, 409858));
            return (n) => {
                var i, a;
                return (0, r.jsx)(e, {
                    code: t,
                    channelContext: _,
                    customGiftMessage: E,
                    emojiName: null == f ? void 0 : null === (i = f.emoji) || void 0 === i ? void 0 : i.name,
                    soundId: null == f ? void 0 : null === (a = f.sound) || void 0 === a ? void 0 : a.id,
                    onComplete: (e, t) => {
                        (p = e), t && ((h = t), e.isSubscription && null == o.ZP.getPremiumSubscription(!1) && (0, u.H)(!0));
                    },
                    ...n
                });
            };
        },
        {
            onCloseCallback: () => {
                var e;
                h && null != p && !I && p.isSubscription && (null == p ? void 0 : null === (e = p.subscriptionPlan) || void 0 === e ? void 0 : e.premiumSubscriptionType) === c.p9.TIER_2 && s.S.dispatch(d.CkL.PREMIUM_SUBSCRIPTION_CREATED);
            }
        }
    );
}
