n.d(_, {
    TB: function () {
        return m;
    },
    VY: function () {
        return A;
    },
    ZP: function () {
        return L;
    }
}),
    n(47120),
    n(411104);
var o = n(735250),
    a = n(470079),
    s = n(512722),
    r = n.n(s),
    t = n(442837),
    I = n(481060),
    i = n(16084),
    l = n(987209),
    N = n(179118),
    u = n(912788),
    T = n(509545),
    c = n(55563),
    E = n(74538),
    C = n(741245),
    d = n(474936),
    M = n(981631),
    R = n(689938),
    O = n(977885);
function f(e) {
    var _, n;
    let a,
        { planId: s, startingPremiumSubscriptionPlanId: I, paymentSourceType: i } = e,
        [l, N] = (0, t.Wu)([T.Z], () => [T.Z.get(I), T.Z.get(s)]);
    if ((r()(null != l && null != N, 'Missing startingPlan or newPlan'), (_ = I), (n = s), d.Y1.indexOf(_) < d.Y1.indexOf(n)))
        switch (s) {
            case d.Xh.PREMIUM_MONTH_TIER_1:
                (a = R.Z.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_1), M.X7u.has(null != i ? i : M.HeQ.UNKNOWN) && (a = R.Z.Messages.BILLING_SWITCH_PLAN_DELAYED_CONFIRMATION_TIER_1.format());
                break;
            case d.Xh.PREMIUM_MONTH_TIER_2:
                (a = R.Z.Messages.BILLING_SWITCH_PLAN_CONFIRM_UPGRADE_TIER_2_MONTH), M.X7u.has(null != i ? i : M.HeQ.UNKNOWN) && (a = R.Z.Messages.BILLING_SWITCH_PLAN_DELAYED_CONFIRMATION_TIER_2.format());
                break;
            case d.Xh.PREMIUM_YEAR_TIER_1:
                (a = R.Z.Messages.BILLING_SWITCH_PLAN_CONFIRM_UPGRADE_TIER_1_YEAR), M.X7u.has(null != i ? i : M.HeQ.UNKNOWN) && (a = R.Z.Messages.BILLING_SWITCH_PLAN_DELAYED_CONFIRMATION_UPGRADE_TIER_1_YEAR.format());
                break;
            case d.Xh.PREMIUM_YEAR_TIER_2:
                (a = R.Z.Messages.BILLING_SWITCH_PLAN_CONFIRM_UPGRADE_TIER_2_YEAR.format({ numFreeGuildSubscriptions: d.cb })), M.X7u.has(null != i ? i : M.HeQ.UNKNOWN) && (a = R.Z.Messages.BILLING_SWITCH_PLAN_DELAYED_CONFIRMATION_UPGRADE_TIER_2_YEAR.format({ numFreeGuildSubscriptions: d.cb }));
                break;
            case d.Xh.PREMIUM_3_MONTH_TIER_2:
            case d.Xh.PREMIUM_6_MONTH_TIER_2:
                a = R.Z.Messages.BILLING_SWITCH_PLAN_CONFIRM_UPGRADE_TIER_2_MULTI_MONTH;
                break;
            case d.Xh.PREMIUM_MONTH_TIER_0:
            case d.Xh.PREMIUM_YEAR_TIER_0:
                a = R.Z.Messages.BILLING_SWITCH_PLAN_CONFIRM_TO_TIER_0;
                break;
            default:
                throw Error('Unexpected planId: '.concat(s));
        }
    else if (l.skuId === d.Si.TIER_2 && N.skuId === d.Si.TIER_1) a = R.Z.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_2_TO_TIER_1;
    else
        switch (N.skuId) {
            case d.Si.TIER_0:
                a = R.Z.Messages.BILLING_SWITCH_PLAN_CONFIRM_TO_TIER_0;
                break;
            case d.Si.TIER_1:
                a = R.Z.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_1_YEAR_TO_MONTH;
                break;
            case d.Si.TIER_2:
                a = 1 !== l.intervalCount ? R.Z.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_2_GENERIC_TO_MONTH : R.Z.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_2_YEAR_TO_MONTH;
                break;
            default:
                throw Error('Unexpected skuId: '.concat(N.skuId));
        }
    return (0, o.jsx)('div', {
        className: O.text,
        children: a
    });
}
function L(e) {
    let _,
        n,
        { planId: s, enableNoPaymentTrial: l, startingPremiumSubscriptionPlanId: N, onClose: u, followupSKUInfo: L, isDowngrade: m, hideClose: A, postSuccessGuild: P, paymentSourceType: S } = e,
        { theme: U } = (0, I.useThemeContext)(),
        p = (0, t.e7)([c.Z], () => (null != L ? c.Z.get(L.id) : null));
    a.useEffect(() => {
        if (null == L || null != p) return;
        let { applicationId: e, id: _ } = L;
        (0, i.$N)(e, _).catch(M.VqG);
    }, [L, p]);
    let h = (e) => {
        if (e.skuId === d.Si.TIER_0) return M.X7u.has(null != S ? S : M.HeQ.UNKNOWN) ? R.Z.Messages.BILLING_SWITCH_PLAN_DELAYED_CONFIRMATION_TIER_1.format() : R.Z.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_0;
        if (e.skuId === d.Si.TIER_1) return M.X7u.has(null != S ? S : M.HeQ.UNKNOWN) ? R.Z.Messages.BILLING_SWITCH_PLAN_DELAYED_CONFIRMATION_TIER_1.format() : R.Z.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_1;
        return M.X7u.has(null != S ? S : M.HeQ.UNKNOWN) ? R.Z.Messages.BILLING_SWITCH_PLAN_DELAYED_CONFIRMATION_TIER_2.format() : l ? R.Z.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_2_NO_PAYMENT_TRIAL : R.Z.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_2;
    };
    if (null != p)
        _ = (0, o.jsx)('div', {
            className: O.text,
            children: R.Z.Messages.PREMIUM_PAYMENT_CONFIRMATION_BLURB_IAP.format({ skuName: p.name })
        });
    else if (null != N)
        _ = (0, o.jsx)(f, {
            planId: s,
            startingPremiumSubscriptionPlanId: N
        });
    else if (null != P) {
        let e = T.Z.get(s);
        r()(null != e, 'Missing plan'),
            (_ = (0, o.jsxs)(o.Fragment, {
                children: [
                    (0, o.jsx)('div', {
                        className: O.text,
                        children: h(e)
                    }),
                    (0, o.jsx)('div', {
                        className: O.text,
                        children: R.Z.Messages.BILLING_POST_PURCHASE_JOIN_GUILD_FOR_EMOJI.format({ guildName: P.name })
                    })
                ]
            }));
    } else {
        let e = T.Z.get(s);
        r()(null != e, 'Missing plan'),
            (_ = (0, o.jsx)('div', {
                className: O.text,
                children: h(e)
            }));
    }
    let g = E.ZP.getPremiumType(s);
    return (
        r()(null != g, 'premium type should not be null in purchase confirmation'),
        (n = null != p ? R.Z.Messages.PREMIUM_PAYMENT_CONFIRMATION_BUTTON_IAP.format({ skuName: p.name }) : m ? R.Z.Messages.PREMIUM_DOWNGRADE_DONE_BUTTON : null != P ? R.Z.Messages.BILLING_POST_PURCHASE_JOIN_GUILD_FOR_EMOJI_CTA : R.Z.Messages.PREMIUM_UPGRADE_DONE_BUTTON),
        (0, o.jsxs)('div', {
            className: O.confirmation,
            children: [
                (0, o.jsx)(C.C, {
                    className: O.banner,
                    theme: U,
                    premiumType: g,
                    type: M.X7u.has(null != S ? S : M.HeQ.UNKNOWN) ? C.C.Types.PREMIUM_PAYMENT_STARTED : null != N ? C.C.Types.PREMIUM_UPDATED : C.C.Types.PREMIUM_ACTIVATED
                }),
                _,
                A
                    ? null
                    : (0, o.jsx)(I.Button, {
                          onClick: u,
                          children: n
                      })
            ]
        })
    );
}
function m(e) {
    let { planId: _, onClose: n, halloweenDecoPurchase: a } = e,
        { giftRecipient: s, selectedGiftStyle: I, hasSentMessage: i, giftMessageError: c, isSendingMessage: E } = (0, l.wD)(),
        C = (0, t.e7)([T.Z], () => T.Z.get(_));
    r()(null != C, 'Missing plan');
    let d = (0, t.e7)([u.Z], () => u.Z.getGiftCode(C.skuId));
    return (0, o.jsx)(N.Z, {
        giftCode: d,
        subscriptionPlan: C,
        onClose: n,
        selectedGiftStyle: I,
        hasSentMessage: i,
        giftRecipient: s,
        giftMessageError: c,
        isSendingMessage: E,
        halloweenDecoPurchase: a
    });
}
function A() {
    return (0, o.jsxs)('div', {
        className: O.redirectConfirmation,
        children: [
            (0, o.jsx)(I.Heading, {
                variant: 'heading-xl/bold',
                children: R.Z.Messages.PAYMENT_WAITING_FOR_BROWSER_CHECKOUT_CONFIRM_MODAL_HEADER
            }),
            (0, o.jsxs)('div', {
                className: O.redirectBody,
                children: [
                    (0, o.jsx)(I.Text, {
                        variant: 'text-md/normal',
                        children: R.Z.Messages.PAYMENT_WAITING_FOR_BROWSER_CHECKOUT_CONFIRM_MODAL_BODY
                    }),
                    (0, o.jsx)('br', {}),
                    (0, o.jsx)(I.Text, {
                        variant: 'text-md/normal',
                        children: R.Z.Messages.PAYMENT_WAITING_FOR_BROWSER_CHECKOUT_CONFIRM_MODAL_INSTRUCTIONS
                    })
                ]
            })
        ]
    });
}
