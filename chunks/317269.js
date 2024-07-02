a.d(n, {
    TB: function () {
        return m;
    },
    VY: function () {
        return p;
    },
    ZP: function () {
        return L;
    }
}), a(47120), a(411104);
var t = a(735250), r = a(470079), o = a(512722), i = a.n(o), _ = a(442837), s = a(481060), I = a(16084), l = a(987209), c = a(179118), u = a(912788), d = a(509545), f = a(55563), N = a(74538), T = a(741245), E = a(474936), C = a(981631), R = a(689938), M = a(308445);
function O(e) {
    var n, a;
    let r, {
            planId: o,
            startingPremiumSubscriptionPlanId: s,
            paymentSourceType: I
        } = e, [l, c] = (0, _.Wu)([d.Z], () => [
            d.Z.get(s),
            d.Z.get(o)
        ]);
    if (i()(null != l && null != c, 'Missing startingPlan or newPlan'), n = s, a = o, E.Y1.indexOf(n) < E.Y1.indexOf(a))
        switch (o) {
        case E.Xh.PREMIUM_MONTH_TIER_1:
            r = R.Z.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_1, C.X7u.has(null != I ? I : C.HeQ.UNKNOWN) && (r = R.Z.Messages.BILLING_SWITCH_PLAN_DELAYED_CONFIRMATION_TIER_1.format());
            break;
        case E.Xh.PREMIUM_MONTH_TIER_2:
            r = R.Z.Messages.BILLING_SWITCH_PLAN_CONFIRM_UPGRADE_TIER_2_MONTH, C.X7u.has(null != I ? I : C.HeQ.UNKNOWN) && (r = R.Z.Messages.BILLING_SWITCH_PLAN_DELAYED_CONFIRMATION_TIER_2.format());
            break;
        case E.Xh.PREMIUM_YEAR_TIER_1:
            r = R.Z.Messages.BILLING_SWITCH_PLAN_CONFIRM_UPGRADE_TIER_1_YEAR, C.X7u.has(null != I ? I : C.HeQ.UNKNOWN) && (r = R.Z.Messages.BILLING_SWITCH_PLAN_DELAYED_CONFIRMATION_UPGRADE_TIER_1_YEAR.format());
            break;
        case E.Xh.PREMIUM_YEAR_TIER_2:
            r = R.Z.Messages.BILLING_SWITCH_PLAN_CONFIRM_UPGRADE_TIER_2_YEAR.format({ numFreeGuildSubscriptions: E.cb }), C.X7u.has(null != I ? I : C.HeQ.UNKNOWN) && (r = R.Z.Messages.BILLING_SWITCH_PLAN_DELAYED_CONFIRMATION_UPGRADE_TIER_2_YEAR.format({ numFreeGuildSubscriptions: E.cb }));
            break;
        case E.Xh.PREMIUM_3_MONTH_TIER_2:
        case E.Xh.PREMIUM_6_MONTH_TIER_2:
            r = R.Z.Messages.BILLING_SWITCH_PLAN_CONFIRM_UPGRADE_TIER_2_MULTI_MONTH;
            break;
        case E.Xh.PREMIUM_MONTH_TIER_0:
        case E.Xh.PREMIUM_YEAR_TIER_0:
            r = R.Z.Messages.BILLING_SWITCH_PLAN_CONFIRM_TO_TIER_0;
            break;
        default:
            throw Error('Unexpected planId: '.concat(o));
        }
    else if (l.skuId === E.Si.TIER_2 && c.skuId === E.Si.TIER_1)
        r = R.Z.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_2_TO_TIER_1;
    else
        switch (c.skuId) {
        case E.Si.TIER_0:
            r = R.Z.Messages.BILLING_SWITCH_PLAN_CONFIRM_TO_TIER_0;
            break;
        case E.Si.TIER_1:
            r = R.Z.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_1_YEAR_TO_MONTH;
            break;
        case E.Si.TIER_2:
            r = 1 !== l.intervalCount ? R.Z.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_2_GENERIC_TO_MONTH : R.Z.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_2_YEAR_TO_MONTH;
            break;
        default:
            throw Error('Unexpected skuId: '.concat(c.skuId));
        }
    return (0, t.jsx)('div', {
        className: M.text,
        children: r
    });
}
function L(e) {
    let n, a, {
            planId: o,
            enableNoPaymentTrial: l,
            startingPremiumSubscriptionPlanId: c,
            onClose: u,
            followupSKUInfo: L,
            isDowngrade: m,
            hideClose: p,
            postSuccessGuild: A,
            paymentSourceType: g
        } = e, {theme: P} = (0, s.useThemeContext)(), S = (0, _.e7)([f.Z], () => null != L ? f.Z.get(L.id) : null);
    r.useEffect(() => {
        if (null == L || null != S)
            return;
        let {
            applicationId: e,
            id: n
        } = L;
        (0, I.$N)(e, n).catch(C.VqG);
    }, [
        L,
        S
    ]);
    let h = e => {
        if (e.skuId === E.Si.TIER_0)
            return C.X7u.has(null != g ? g : C.HeQ.UNKNOWN) ? R.Z.Messages.BILLING_SWITCH_PLAN_DELAYED_CONFIRMATION_TIER_1.format() : R.Z.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_0;
        if (e.skuId === E.Si.TIER_1)
            return C.X7u.has(null != g ? g : C.HeQ.UNKNOWN) ? R.Z.Messages.BILLING_SWITCH_PLAN_DELAYED_CONFIRMATION_TIER_1.format() : R.Z.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_1;
        return C.X7u.has(null != g ? g : C.HeQ.UNKNOWN) ? R.Z.Messages.BILLING_SWITCH_PLAN_DELAYED_CONFIRMATION_TIER_2.format() : l ? R.Z.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_2_NO_PAYMENT_TRIAL : R.Z.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_2;
    };
    if (null != S)
        n = (0, t.jsx)('div', {
            className: M.text,
            children: R.Z.Messages.PREMIUM_PAYMENT_CONFIRMATION_BLURB_IAP.format({ skuName: S.name })
        });
    else if (null != c)
        n = (0, t.jsx)(O, {
            planId: o,
            startingPremiumSubscriptionPlanId: c
        });
    else if (null != A) {
        let e = d.Z.get(o);
        i()(null != e, 'Missing plan'), n = (0, t.jsxs)(t.Fragment, {
            children: [
                (0, t.jsx)('div', {
                    className: M.text,
                    children: h(e)
                }),
                (0, t.jsx)('div', {
                    className: M.text,
                    children: R.Z.Messages.BILLING_POST_PURCHASE_JOIN_GUILD_FOR_EMOJI.format({ guildName: A.name })
                })
            ]
        });
    } else {
        let e = d.Z.get(o);
        i()(null != e, 'Missing plan'), n = (0, t.jsx)('div', {
            className: M.text,
            children: h(e)
        });
    }
    let b = N.ZP.getPremiumType(o);
    return i()(null != b, 'premium type should not be null in purchase confirmation'), a = null != S ? R.Z.Messages.PREMIUM_PAYMENT_CONFIRMATION_BUTTON_IAP.format({ skuName: S.name }) : m ? R.Z.Messages.PREMIUM_DOWNGRADE_DONE_BUTTON : null != A ? R.Z.Messages.BILLING_POST_PURCHASE_JOIN_GUILD_FOR_EMOJI_CTA : R.Z.Messages.PREMIUM_UPGRADE_DONE_BUTTON, (0, t.jsxs)('div', {
        className: M.confirmation,
        children: [
            (0, t.jsx)(T.C, {
                className: M.banner,
                theme: P,
                premiumType: b,
                type: C.X7u.has(null != g ? g : C.HeQ.UNKNOWN) ? T.C.Types.PREMIUM_PAYMENT_STARTED : null != c ? T.C.Types.PREMIUM_UPDATED : T.C.Types.PREMIUM_ACTIVATED
            }),
            n,
            p ? null : (0, t.jsx)(s.Button, {
                onClick: u,
                children: a
            })
        ]
    });
}
function m(e) {
    let {
            planId: n,
            onClose: a
        } = e, {
            giftRecipient: r,
            selectedGiftStyle: o,
            hasSentMessage: s,
            giftMessageError: I,
            isSendingMessage: f
        } = (0, l.wD)(), N = (0, _.e7)([d.Z], () => d.Z.get(n));
    i()(null != N, 'Missing plan');
    let T = (0, _.e7)([u.Z], () => u.Z.getGiftCode(N.skuId));
    return (0, t.jsx)(c.Z, {
        giftCode: T,
        subscriptionPlan: N,
        onClose: a,
        selectedGiftStyle: o,
        hasSentMessage: s,
        giftRecipient: r,
        giftMessageError: I,
        isSendingMessage: f
    });
}
function p() {
    return (0, t.jsxs)('div', {
        className: M.redirectConfirmation,
        children: [
            (0, t.jsx)(s.Heading, {
                variant: 'heading-xl/bold',
                children: R.Z.Messages.PAYMENT_WAITING_FOR_BROWSER_CHECKOUT_CONFIRM_MODAL_HEADER
            }),
            (0, t.jsxs)('div', {
                className: M.redirectBody,
                children: [
                    (0, t.jsx)(s.Text, {
                        variant: 'text-md/normal',
                        children: R.Z.Messages.PAYMENT_WAITING_FOR_BROWSER_CHECKOUT_CONFIRM_MODAL_BODY
                    }),
                    (0, t.jsx)('br', {}),
                    (0, t.jsx)(s.Text, {
                        variant: 'text-md/normal',
                        children: R.Z.Messages.PAYMENT_WAITING_FOR_BROWSER_CHECKOUT_CONFIRM_MODAL_INSTRUCTIONS
                    })
                ]
            })
        ]
    });
}
