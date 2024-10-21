var r = n(200651);
n(192379);
var i = n(120356),
    a = n.n(i),
    s = n(442837),
    o = n(481060),
    l = n(230711),
    u = n(906732),
    c = n(975298),
    d = n(543241),
    _ = n(963249),
    E = n(703656),
    f = n(301766),
    h = n(594174),
    p = n(78839),
    I = n(451478),
    m = n(74538),
    T = n(639119),
    S = n(474936),
    g = n(981631),
    A = n(689938),
    N = n(186903);
t.Z = function (e) {
    let { isGift: t, subscriptionTier: i, onClick: R, size: O, className: v, isTrialCTA: C, buttonText: L, buttonTextClassName: D, iconClassName: y, postSuccessGuild: b, onSubscribeModalClose: M, premiumModalAnalyticsLocation: P, showIcon: U = !0, disableShine: w, applicationId: x, giftMessage: G, overrideDisabledButtonText: k, shinyButtonClassName: B, showGradient: F = !1, ...V } = e,
        H = (0, s.e7)([h.default], () => h.default.getCurrentUser()),
        Z = (0, s.e7)([I.Z], () => I.Z.isFocused()),
        Y = (0, s.e7)([p.ZP], () => p.ZP.getPremiumTypeSubscription()),
        { fractionalState: j } = (0, c.Z)(),
        { analyticsLocations: W } = (0, u.ZP)(),
        K = (0, T.N)(),
        z = !t && null != K && null != i && S.nG[K.trial_id].skus.includes(i),
        q = (e) => {
            var a;
            if ((e.preventDefault(), null == H)) {
                (0, E.uL)(g.Z5c.LOGIN);
                return;
            }
            if ((null == R || R(e), (null == Y ? void 0 : Y.status) === g.O0b.ACCOUNT_HOLD)) {
                (0, d.A3)(), l.Z.open(g.oAB.PREMIUM), null == M || M(!1);
                return;
            }
            !(function (e) {
                let { isClaimed: t, isVerified: i, isGift: a, subscriptionTier: s, trialId: l, postSuccessGuild: u, onSubscribeModalClose: c, analyticsLocations: d, premiumModalAnalyticsLocation: E, applicationId: f, giftMessage: h } = e;
                if (!t) {
                    (0, o.openModalLazy)(async () => {
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
                    (0, o.openModalLazy)(async () => {
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
                    (0, _.Z)({
                        isGift: a,
                        initialPlanId: null,
                        subscriptionTier: s,
                        analyticsLocations: d,
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
            })({
                isClaimed: H.isClaimed(),
                isVerified: H.verified,
                isGift: t,
                subscriptionTier: i,
                trialId: z ? (null === (a = K.subscription_trial) || void 0 === a ? void 0 : a.id) : null,
                postSuccessGuild: b,
                onSubscribeModalClose: M,
                analyticsLocations: W,
                premiumModalAnalyticsLocation: P,
                applicationId: x,
                giftMessage: G
            });
        };
    if (C)
        return (0, r.jsxs)(o.Button, {
            size: O,
            className: v,
            innerClassName: N.premiumSubscribeButton,
            color: o.Button.Colors.BRAND_INVERTED,
            onClick: q,
            ...V,
            children: [
                U &&
                    (0, r.jsx)(o.NitroWheelIcon, {
                        size: 'md',
                        color: 'currentColor',
                        className: N.premiumIcon
                    }),
                (0, r.jsx)('span', {
                    className: a()(N.buttonText, D),
                    children: null != L ? L : A.Z.Messages.PREMIUM_TRIAL_CTA_BUTTON_VARIANT
                })
            ]
        });
    if (t)
        return (0, r.jsxs)(o.Button, {
            size: O,
            className: v,
            innerClassName: N.giftButton,
            color: o.Button.Colors.PRIMARY,
            onClick: q,
            ...V,
            children: [
                (0, r.jsx)(o.GiftIcon, {
                    size: 'md',
                    color: 'currentColor',
                    className: N.giftIcon
                }),
                (0, r.jsx)('span', {
                    className: a()(N.buttonText, D),
                    children: null != L ? L : A.Z.Messages.PREMIUM_GIFTING_BUTTON
                })
            ]
        });
    let Q = A.Z.Messages.APPLICATION_STORE_GET_PREMIUM,
        X = null != Y ? (0, m.Af)(Y) : null,
        $ = null != X ? m.ZP.getPremiumType(X.planId) : null == H ? void 0 : H.premiumType,
        J = i === S.Si.TIER_2 && null != $ && [S.p9.TIER_0, S.p9.TIER_1].includes($);
    J && (Q = A.Z.Messages.BILLING_SWITCH_PLAN_UPGRADE);
    let ee = null != Y && m.ZP.isSwitchingPlansDisabled(Y, j),
        et = (null != Y && Y.status !== g.O0b.ACCOUNT_HOLD && !(0, f.Q0)(Y.planId) && !J) || ee,
        en = et
            ? null != k
                ? k
                : (function (e) {
                      let { ctaSubscriptionSkuId: t, currentPremiumType: n, isSwitchingDisabled: r, subscription: i } = e,
                          a = null,
                          s = null;
                      if (null != t && t !== S.Si.LEGACY && t !== S.Si.TIER_0 && t !== S.Si.TIER_1 && t !== S.Si.TIER_2)
                          return {
                              disabledButtonText: a,
                              disabledButtonTooltipText: s
                          };
                      let o = null != t ? S.y7[(0, m.Wz)(t)] : null,
                          l = null != o ? S.$e[o] : null,
                          u = null != n ? S.$e[n] : null;
                      return (
                          r ? (s = m.ZP.getSwitchingPlansDisabledMessage(i)) : null != u && null != l && l < u ? ((a = A.Z.Messages.APPLICATION_STORE_GET_PREMIUM), (s = A.Z.Messages.PREMIUM_SUBSCRIPTION_BUTTON_DISABLED_MANAGE_PLAN_TOOLTIP)) : null != o && null != n && o === n ? ((a = A.Z.Messages.BILLING_SWITCH_PLAN_CURRENT_PLAN), (s = A.Z.Messages.PREMIUM_SUBSCRIPTION_BUTTON_DISABLED_MANAGE_PLAN_TOOLTIP)) : null == o && null != n && n === S.p9.TIER_2 && (s = A.Z.Messages.PREMIUM_SUBSCRIPTION_BUTTON_DISABLED_MANAGE_PLAN_TOOLTIP),
                          {
                              disabledButtonText: a,
                              disabledButtonTooltipText: s
                          }
                      );
                  })({
                      ctaSubscriptionSkuId: i,
                      currentPremiumType: $,
                      isSwitchingDisabled: ee,
                      subscription: Y
                  })
            : null;
    function er(e) {
        var t, n;
        return (0, r.jsxs)(o.ShinyButton, {
            disabled: et,
            onClick: q,
            innerClassName: N.premiumSubscribeButton,
            color: i === S.Si.TIER_1 ? o.Button.Colors.PRIMARY : o.Button.Colors.GREEN,
            size: O,
            className: B,
            wrapperClassName: a()(
                {
                    [N.tier2Gradient]: F && i === S.Si.TIER_2,
                    [N.tier1Gradient]: F && i === S.Si.TIER_1
                },
                v
            ),
            pauseAnimation: !Z || w,
            ...V,
            ...e,
            children: [
                U &&
                    (0, r.jsx)(o.NitroWheelIcon, {
                        size: 'md',
                        color: 'currentColor',
                        className: a()(N.premiumIcon, y)
                    }),
                (0, r.jsx)('span', {
                    className: a()(N.buttonText, D),
                    children: null !== (n = null !== (t = null == en ? void 0 : en.disabledButtonText) && void 0 !== t ? t : L) && void 0 !== n ? n : Q
                })
            ]
        });
    }
    return (null == en ? void 0 : en.disabledButtonTooltipText) != null
        ? (0, r.jsx)(o.Tooltip, {
              text: en.disabledButtonTooltipText,
              children: er
          })
        : er();
};
