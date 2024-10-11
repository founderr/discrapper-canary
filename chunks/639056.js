t(47120);
var n = t(735250);
t(470079);
var a = t(120356),
    i = t.n(a),
    r = t(392711),
    o = t.n(r),
    l = t(442837),
    c = t(481060),
    d = t(594174),
    _ = t(509545),
    u = t(78839),
    E = t(74538),
    T = t(393411),
    S = t(474936),
    I = t(689938),
    N = t(574587);
function m(e) {
    let { user: s, planId: t, count: a, userPremiumSubscription: r } = e,
        [o, d] = (0, l.Wu)([_.Z], () => [_.Z.get(t), null != r ? _.Z.get(r.planId) : null]),
        u = E.ZP.getInterval(t).intervalType;
    if (null == o || ![S.rV.YEAR, S.rV.MONTH].includes(u)) return null;
    E.ZP.getInterval(t).intervalType === S.rV.YEAR && (a = E.ZP.getIntervalMonths(u, a));
    let T = null != d ? d.skuId : null,
        m = o.skuId === T,
        C = E.ZP.getDisplayName(t);
    return (0, n.jsxs)('div', {
        className: N.accountCreditRow,
        children: [
            (0, n.jsx)('div', {
                className: i()({
                    [N.iconBackgroundTier0]: o.skuId === S.Si.TIER_0,
                    [N.iconBackgroundTier1]: o.skuId === S.Si.TIER_1,
                    [N.iconBackgroundTier2]: o.skuId === S.Si.TIER_2
                }),
                children: (0, n.jsx)(c.NitroWheelIcon, {
                    size: 'md',
                    color: 'currentColor',
                    className: N.icon
                })
            }),
            (0, n.jsxs)('div', {
                className: N.rowDetails,
                children: [
                    (0, n.jsx)(c.Heading, {
                        variant: 'heading-md/semibold',
                        children: I.Z.Messages.PREMIUM_SUBSCRIPTION_CREDIT.format({ planName: C })
                    }),
                    s.hasFreePremium() || (null != r && r.isPurchasedExternally)
                        ? null
                        : (0, n.jsx)(c.Heading, {
                              className: N.rowApplied,
                              variant: 'heading-sm/semibold',
                              color: 'header-secondary',
                              children: m && null != r ? I.Z.Messages.PREMIUM_SUBSCRIPTION_CREDIT_APPLIED_ON.format({ date: r.currentPeriodEnd }) : I.Z.Messages.PREMIUM_SUBSCRIPTION_CREDIT_APPLIED_MISMATCHED_PLAN.format({ planName: C })
                          })
                ]
            }),
            (0, n.jsx)(c.Text, {
                className: N.rowCreditCount,
                variant: 'text-md/semibold',
                children: I.Z.Messages.PREMIUM_SUBSCRIPTION_CREDIT_COUNT_MONTHS.format({ count: a })
            })
        ]
    });
}
s.Z = function (e) {
    let { className: s, entitlements: t } = e,
        a = o()(Array.from(t))
            .filter((e) => {
                let { subscriptionPlanId: s, gifterId: t, consumed: n } = e;
                return null != s && null != t && !n;
            })
            .groupBy((e) => e.subscriptionPlanId)
            .value(),
        r = (0, l.e7)([u.ZP], () => u.ZP.getPremiumSubscription()),
        _ = (0, l.e7)([u.ZP], () => null == u.ZP.getPremiumTypeSubscription()),
        E = Object.keys(a).some((e) => e === S.Xh.PREMIUM_MONTH_TIER_1),
        C = (0, l.e7)([d.default], () => d.default.getCurrentUser());
    return null == C
        ? null
        : (0, n.jsxs)('div', {
              children: [
                  (0, n.jsx)('div', {
                      className: i()(s, N.premiumSubscriptionAccountCredit),
                      children: Object.keys(a).map((e) =>
                          (0, n.jsx)(
                              m,
                              {
                                  planId: e,
                                  count: a[e].length,
                                  userPremiumSubscription: r,
                                  user: C
                              },
                              e
                          )
                      )
                  }),
                  E &&
                      _ &&
                      (0, n.jsxs)('div', {
                          children: [
                              (0, n.jsx)(c.Text, {
                                  className: N.tier1AccountCreditHeader,
                                  variant: 'text-md/normal',
                                  children: I.Z.Messages.PREMIUM_TIER_1_ACCOUNT_CREDIT_HEADER
                              }),
                              (0, n.jsx)(T.R, {})
                          ]
                      })
              ]
          });
};
