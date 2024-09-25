var r = n(735250);
n(470079);
var i = n(120356),
    a = n.n(i),
    o = n(442837),
    s = n(481060),
    l = n(230711),
    u = n(906732),
    c = n(543241),
    d = n(963249),
    _ = n(703656),
    E = n(301766),
    f = n(594174),
    h = n(78839),
    p = n(451478),
    m = n(74538),
    I = n(639119),
    T = n(474936),
    g = n(981631),
    S = n(689938),
    A = n(186903);
function v(e) {
    let { isClaimed: t, isVerified: i, isGift: a, subscriptionTier: o, trialId: l, postSuccessGuild: u, onSubscribeModalClose: c, analyticsLocations: _, premiumModalAnalyticsLocation: E, applicationId: f, giftMessage: h } = e;
    if (!t) {
        (0, s.openModalLazy)(async () => {
            let { default: e } = await n.e('69417').then(n.bind(n, 918995));
            return (t) => {
                let { onClose: n, ...i } = t;
                return (0, r.jsx)(e, {
                    ...i,
                    onClose: n
                });
            };
        });
        return;
    }
    if (!i) {
        (0, s.openModalLazy)(async () => {
            let { default: e } = await n.e('20102').then(n.bind(n, 444688));
            return (t) => {
                let { onClose: n, ...i } = t;
                return (0, r.jsx)(e, {
                    ...i,
                    onClose: n
                });
            };
        });
        return;
    }
    let p = g.Qqv.BUY;
    null != l ? (p = g.Qqv.TRIAL) : a && (p = g.Qqv.GIFT),
        (0, d.Z)({
            isGift: a,
            initialPlanId: null,
            subscriptionTier: o,
            analyticsLocations: _,
            analyticsObject: {
                object: g.qAy.BUTTON_CTA,
                objectType: p,
                ...E
            },
            trialId: l,
            postSuccessGuild: u,
            onClose: c,
            applicationId: f,
            giftMessage: h
        });
}
function N(e) {
    let { ctaSubscriptionSkuId: t, currentPremiumType: n, isSwitchingDisabled: r, subscription: i } = e,
        a = null,
        o = null;
    if (null != t && t !== T.Si.LEGACY && t !== T.Si.TIER_0 && t !== T.Si.TIER_1 && t !== T.Si.TIER_2)
        return {
            disabledButtonText: a,
            disabledButtonTooltipText: o
        };
    let s = null != t ? T.y7[(0, m.Wz)(t)] : null,
        l = null != s ? T.$e[s] : null,
        u = null != n ? T.$e[n] : null;
    return (
        r ? (o = m.ZP.getSwitchingPlansDisabledMessage(i)) : null != u && null != l && l < u ? ((a = S.Z.Messages.APPLICATION_STORE_GET_PREMIUM), (o = S.Z.Messages.PREMIUM_SUBSCRIPTION_BUTTON_DISABLED_MANAGE_PLAN_TOOLTIP)) : null != s && null != n && s === n ? ((a = S.Z.Messages.BILLING_SWITCH_PLAN_CURRENT_PLAN), (o = S.Z.Messages.PREMIUM_SUBSCRIPTION_BUTTON_DISABLED_MANAGE_PLAN_TOOLTIP)) : null == s && null != n && n === T.p9.TIER_2 && (o = S.Z.Messages.PREMIUM_SUBSCRIPTION_BUTTON_DISABLED_MANAGE_PLAN_TOOLTIP),
        {
            disabledButtonText: a,
            disabledButtonTooltipText: o
        }
    );
}
function O(e) {
    let { isGift: t, subscriptionTier: n, onClick: i, size: d, className: O, isTrialCTA: R, buttonText: C, buttonTextClassName: y, iconClassName: b, postSuccessGuild: L, onSubscribeModalClose: D, premiumModalAnalyticsLocation: M, showIcon: P = !0, disableShine: U, applicationId: w, giftMessage: x, overrideDisabledButtonText: G, shinyButtonClassName: k, showGradient: B = !1, ...F } = e,
        Z = (0, o.e7)([f.default], () => f.default.getCurrentUser()),
        V = (0, o.e7)([p.Z], () => p.Z.isFocused()),
        H = (0, o.e7)([h.ZP], () => h.ZP.getPremiumTypeSubscription()),
        { analyticsLocations: Y } = (0, u.ZP)(),
        j = (0, I.N)(),
        W = !t && null != j && null != n && T.nG[j.trial_id].skus.includes(n),
        K = (e) => {
            var r;
            if ((e.preventDefault(), null == Z)) {
                (0, _.uL)(g.Z5c.LOGIN);
                return;
            }
            if ((null == i || i(e), (null == H ? void 0 : H.status) === g.O0b.ACCOUNT_HOLD)) {
                (0, c.A3)(), l.Z.open(g.oAB.PREMIUM), null == D || D(!1);
                return;
            }
            v({
                isClaimed: Z.isClaimed(),
                isVerified: Z.verified,
                isGift: t,
                subscriptionTier: n,
                trialId: W ? (null === (r = j.subscription_trial) || void 0 === r ? void 0 : r.id) : null,
                postSuccessGuild: L,
                onSubscribeModalClose: D,
                analyticsLocations: Y,
                premiumModalAnalyticsLocation: M,
                applicationId: w,
                giftMessage: x
            });
        };
    if (R)
        return (0, r.jsxs)(s.Button, {
            size: d,
            className: O,
            innerClassName: A.premiumSubscribeButton,
            color: s.Button.Colors.BRAND_INVERTED,
            onClick: K,
            ...F,
            children: [
                P &&
                    (0, r.jsx)(s.NitroWheelIcon, {
                        size: 'md',
                        color: 'currentColor',
                        className: A.premiumIcon
                    }),
                (0, r.jsx)('span', {
                    className: a()(A.buttonText, y),
                    children: null != C ? C : S.Z.Messages.PREMIUM_TRIAL_CTA_BUTTON_VARIANT
                })
            ]
        });
    if (t)
        return (0, r.jsxs)(s.Button, {
            size: d,
            className: O,
            innerClassName: A.giftButton,
            color: s.Button.Colors.PRIMARY,
            onClick: K,
            ...F,
            children: [
                (0, r.jsx)(s.GiftIcon, {
                    size: 'md',
                    color: 'currentColor',
                    className: A.giftIcon
                }),
                (0, r.jsx)('span', {
                    className: a()(A.buttonText, y),
                    children: null != C ? C : S.Z.Messages.PREMIUM_GIFTING_BUTTON
                })
            ]
        });
    let z = S.Z.Messages.APPLICATION_STORE_GET_PREMIUM,
        q = null != H ? (0, m.Af)(H) : null,
        Q = null != q ? m.ZP.getPremiumType(q.planId) : null == Z ? void 0 : Z.premiumType,
        X = n === T.Si.TIER_2 && null != Q && [T.p9.TIER_0, T.p9.TIER_1].includes(Q);
    X && (z = S.Z.Messages.BILLING_SWITCH_PLAN_UPGRADE);
    let $ = null != H && m.ZP.isSwitchingPlansDisabled(H),
        J = (null != H && H.status !== g.O0b.ACCOUNT_HOLD && !(0, E.Q0)(H.planId) && !X) || $,
        ee = J
            ? null != G
                ? G
                : N({
                      ctaSubscriptionSkuId: n,
                      currentPremiumType: Q,
                      isSwitchingDisabled: $,
                      subscription: H
                  })
            : null;
    function et(e) {
        var t, i;
        return (0, r.jsxs)(s.ShinyButton, {
            disabled: J,
            onClick: K,
            innerClassName: A.premiumSubscribeButton,
            color: n === T.Si.TIER_1 ? s.Button.Colors.PRIMARY : s.Button.Colors.GREEN,
            size: d,
            className: k,
            wrapperClassName: a()(
                {
                    [A.tier2Gradient]: B && n === T.Si.TIER_2,
                    [A.tier1Gradient]: B && n === T.Si.TIER_1
                },
                O
            ),
            pauseAnimation: !V || U,
            ...F,
            ...e,
            children: [
                P &&
                    (0, r.jsx)(s.NitroWheelIcon, {
                        size: 'md',
                        color: 'currentColor',
                        className: a()(A.premiumIcon, b)
                    }),
                (0, r.jsx)('span', {
                    className: a()(A.buttonText, y),
                    children: null !== (i = null !== (t = null == ee ? void 0 : ee.disabledButtonText) && void 0 !== t ? t : C) && void 0 !== i ? i : z
                })
            ]
        });
    }
    return (null == ee ? void 0 : ee.disabledButtonTooltipText) != null
        ? (0, r.jsx)(s.Tooltip, {
              text: ee.disabledButtonTooltipText,
              children: et
          })
        : et();
}
t.Z = O;
