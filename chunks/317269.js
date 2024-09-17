t.d(n, {
    TB: function () {
        return M;
    },
    VY: function () {
        return T;
    },
    ZP: function () {
        return m;
    }
}),
    t(47120),
    t(411104);
var r = t(735250),
    a = t(470079),
    i = t(512722),
    s = t.n(i),
    o = t(442837),
    l = t(481060),
    C = t(16084),
    d = t(987209),
    c = t(179118),
    u = t(912788),
    _ = t(509545),
    p = t(55563),
    f = t(74538),
    h = t(741245),
    x = t(474936),
    L = t(981631),
    I = t(689938),
    g = t(977885);
function E(e) {
    var n, t;
    let a,
        { planId: i, startingPremiumSubscriptionPlanId: l, paymentSourceType: C } = e,
        [d, c] = (0, o.Wu)([_.Z], () => [_.Z.get(l), _.Z.get(i)]);
    if ((s()(null != d && null != c, 'Missing startingPlan or newPlan'), (n = l), (t = i), x.Y1.indexOf(n) < x.Y1.indexOf(t)))
        switch (i) {
            case x.Xh.PREMIUM_MONTH_TIER_1:
                (a = I.Z.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_1), L.X7u.has(null != C ? C : L.HeQ.UNKNOWN) && (a = I.Z.Messages.BILLING_SWITCH_PLAN_DELAYED_CONFIRMATION_TIER_1.format());
                break;
            case x.Xh.PREMIUM_MONTH_TIER_2:
                (a = I.Z.Messages.BILLING_SWITCH_PLAN_CONFIRM_UPGRADE_TIER_2_MONTH), L.X7u.has(null != C ? C : L.HeQ.UNKNOWN) && (a = I.Z.Messages.BILLING_SWITCH_PLAN_DELAYED_CONFIRMATION_TIER_2.format());
                break;
            case x.Xh.PREMIUM_YEAR_TIER_1:
                (a = I.Z.Messages.BILLING_SWITCH_PLAN_CONFIRM_UPGRADE_TIER_1_YEAR), L.X7u.has(null != C ? C : L.HeQ.UNKNOWN) && (a = I.Z.Messages.BILLING_SWITCH_PLAN_DELAYED_CONFIRMATION_UPGRADE_TIER_1_YEAR.format());
                break;
            case x.Xh.PREMIUM_YEAR_TIER_2:
                (a = I.Z.Messages.BILLING_SWITCH_PLAN_CONFIRM_UPGRADE_TIER_2_YEAR.format({ numFreeGuildSubscriptions: x.cb })), L.X7u.has(null != C ? C : L.HeQ.UNKNOWN) && (a = I.Z.Messages.BILLING_SWITCH_PLAN_DELAYED_CONFIRMATION_UPGRADE_TIER_2_YEAR.format({ numFreeGuildSubscriptions: x.cb }));
                break;
            case x.Xh.PREMIUM_3_MONTH_TIER_2:
            case x.Xh.PREMIUM_6_MONTH_TIER_2:
                a = I.Z.Messages.BILLING_SWITCH_PLAN_CONFIRM_UPGRADE_TIER_2_MULTI_MONTH;
                break;
            case x.Xh.PREMIUM_MONTH_TIER_0:
            case x.Xh.PREMIUM_YEAR_TIER_0:
                a = I.Z.Messages.BILLING_SWITCH_PLAN_CONFIRM_TO_TIER_0;
                break;
            default:
                throw Error('Unexpected planId: '.concat(i));
        }
    else if (d.skuId === x.Si.TIER_2 && c.skuId === x.Si.TIER_1) a = I.Z.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_2_TO_TIER_1;
    else
        switch (c.skuId) {
            case x.Si.TIER_0:
                a = I.Z.Messages.BILLING_SWITCH_PLAN_CONFIRM_TO_TIER_0;
                break;
            case x.Si.TIER_1:
                a = I.Z.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_1_YEAR_TO_MONTH;
                break;
            case x.Si.TIER_2:
                a = 1 !== d.intervalCount ? I.Z.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_2_GENERIC_TO_MONTH : I.Z.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_2_YEAR_TO_MONTH;
                break;
            default:
                throw Error('Unexpected skuId: '.concat(c.skuId));
        }
    return (0, r.jsx)('div', {
        className: g.text,
        children: a
    });
}
function m(e) {
    let n,
        t,
        { planId: i, enableNoPaymentTrial: d, startingPremiumSubscriptionPlanId: c, onClose: u, followupSKUInfo: m, isDowngrade: M, hideClose: T, postSuccessGuild: N, paymentSourceType: b } = e,
        { theme: j } = (0, l.useThemeContext)(),
        S = (0, o.e7)([p.Z], () => (null != m ? p.Z.get(m.id) : null));
    a.useEffect(() => {
        if (null == m || null != S) return;
        let { applicationId: e, id: n } = m;
        (0, C.$N)(e, n).catch(L.VqG);
    }, [m, S]);
    let A = (e) => {
        if (e.skuId === x.Si.TIER_0) return L.X7u.has(null != b ? b : L.HeQ.UNKNOWN) ? I.Z.Messages.BILLING_SWITCH_PLAN_DELAYED_CONFIRMATION_TIER_1.format() : I.Z.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_0;
        if (e.skuId === x.Si.TIER_1) return L.X7u.has(null != b ? b : L.HeQ.UNKNOWN) ? I.Z.Messages.BILLING_SWITCH_PLAN_DELAYED_CONFIRMATION_TIER_1.format() : I.Z.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_1;
        return L.X7u.has(null != b ? b : L.HeQ.UNKNOWN) ? I.Z.Messages.BILLING_SWITCH_PLAN_DELAYED_CONFIRMATION_TIER_2.format() : d ? I.Z.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_2_NO_PAYMENT_TRIAL : I.Z.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_2;
    };
    if (null != S)
        n = (0, r.jsx)('div', {
            className: g.text,
            children: I.Z.Messages.PREMIUM_PAYMENT_CONFIRMATION_BLURB_IAP.format({ skuName: S.name })
        });
    else if (null != c)
        n = (0, r.jsx)(E, {
            planId: i,
            startingPremiumSubscriptionPlanId: c
        });
    else if (null != N) {
        let e = _.Z.get(i);
        s()(null != e, 'Missing plan'),
            (n = (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)('div', {
                        className: g.text,
                        children: A(e)
                    }),
                    (0, r.jsx)('div', {
                        className: g.text,
                        children: I.Z.Messages.BILLING_POST_PURCHASE_JOIN_GUILD_FOR_EMOJI.format({ guildName: N.name })
                    })
                ]
            }));
    } else {
        let e = _.Z.get(i);
        s()(null != e, 'Missing plan'),
            (n = (0, r.jsx)('div', {
                className: g.text,
                children: A(e)
            }));
    }
    let R = f.ZP.getPremiumType(i);
    return (
        s()(null != R, 'premium type should not be null in purchase confirmation'),
        (t = null != S ? I.Z.Messages.PREMIUM_PAYMENT_CONFIRMATION_BUTTON_IAP.format({ skuName: S.name }) : M ? I.Z.Messages.PREMIUM_DOWNGRADE_DONE_BUTTON : null != N ? I.Z.Messages.BILLING_POST_PURCHASE_JOIN_GUILD_FOR_EMOJI_CTA : I.Z.Messages.PREMIUM_UPGRADE_DONE_BUTTON),
        (0, r.jsxs)('div', {
            className: g.confirmation,
            children: [
                (0, r.jsx)(h.C, {
                    className: g.banner,
                    theme: j,
                    premiumType: R,
                    type: L.X7u.has(null != b ? b : L.HeQ.UNKNOWN) ? h.C.Types.PREMIUM_PAYMENT_STARTED : null != c ? h.C.Types.PREMIUM_UPDATED : h.C.Types.PREMIUM_ACTIVATED
                }),
                n,
                T
                    ? null
                    : (0, r.jsx)(l.Button, {
                          onClick: u,
                          children: t
                      })
            ]
        })
    );
}
function M(e) {
    let { planId: n, onClose: t } = e,
        { giftRecipient: a, selectedGiftStyle: i, hasSentMessage: l, giftMessageError: C, isSendingMessage: p } = (0, d.wD)(),
        f = (0, o.e7)([_.Z], () => _.Z.get(n));
    s()(null != f, 'Missing plan');
    let h = (0, o.e7)([u.Z], () => u.Z.getGiftCode(f.skuId));
    return (0, r.jsx)(c.Z, {
        giftCode: h,
        subscriptionPlan: f,
        onClose: t,
        selectedGiftStyle: i,
        hasSentMessage: l,
        giftRecipient: a,
        giftMessageError: C,
        isSendingMessage: p
    });
}
function T() {
    return (0, r.jsxs)('div', {
        className: g.redirectConfirmation,
        children: [
            (0, r.jsx)(l.Heading, {
                variant: 'heading-xl/bold',
                children: I.Z.Messages.PAYMENT_WAITING_FOR_BROWSER_CHECKOUT_CONFIRM_MODAL_HEADER
            }),
            (0, r.jsxs)('div', {
                className: g.redirectBody,
                children: [
                    (0, r.jsx)(l.Text, {
                        variant: 'text-md/normal',
                        children: I.Z.Messages.PAYMENT_WAITING_FOR_BROWSER_CHECKOUT_CONFIRM_MODAL_BODY
                    }),
                    (0, r.jsx)('br', {}),
                    (0, r.jsx)(l.Text, {
                        variant: 'text-md/normal',
                        children: I.Z.Messages.PAYMENT_WAITING_FOR_BROWSER_CHECKOUT_CONFIRM_MODAL_INSTRUCTIONS
                    })
                ]
            })
        ]
    });
}
