n(47120);
var i = n(200651);
n(192379);
var s = n(120356),
    r = n.n(s),
    l = n(392711),
    a = n.n(l),
    o = n(442837),
    c = n(481060),
    d = n(594174),
    u = n(509545),
    m = n(78839),
    h = n(74538),
    g = n(393411),
    p = n(474936),
    x = n(388032),
    S = n(461538);
function T(e) {
    let { user: t, planId: n, count: s, userPremiumSubscription: l } = e,
        [a, d] = (0, o.Wu)([u.Z], () => [u.Z.get(n), null != l ? u.Z.get(l.planId) : null]);
    if (null == a || h.ZP.getInterval(n).intervalType !== p.rV.MONTH) return null;
    let m = null != d ? d.skuId : null,
        g = a.skuId === m,
        T = h.ZP.getDisplayName(n);
    return (0, i.jsxs)('div', {
        className: S.accountCreditRow,
        children: [
            (0, i.jsx)('div', {
                className: r()({
                    [S.iconBackgroundTier0]: a.skuId === p.Si.TIER_0,
                    [S.iconBackgroundTier1]: a.skuId === p.Si.TIER_1,
                    [S.iconBackgroundTier2]: a.skuId === p.Si.TIER_2
                }),
                children: (0, i.jsx)(c.NitroWheelIcon, {
                    size: 'md',
                    color: 'currentColor',
                    className: S.icon
                })
            }),
            (0, i.jsxs)('div', {
                className: S.rowDetails,
                children: [
                    (0, i.jsx)(c.Heading, {
                        variant: 'heading-md/semibold',
                        children: x.intl.format(x.t.LzobT0, { planName: T })
                    }),
                    t.hasFreePremium() || (null != l && l.isPurchasedExternally)
                        ? null
                        : (0, i.jsx)(c.Heading, {
                              className: S.rowApplied,
                              variant: 'heading-sm/semibold',
                              color: 'header-secondary',
                              children: g && null != l ? x.intl.formatToPlainString(x.t['5CNRRE'], { date: l.currentPeriodEnd }) : x.intl.formatToPlainString(x.t.eNXZ5O, { planName: T })
                          })
                ]
            }),
            (0, i.jsx)(c.Text, {
                className: S.rowCreditCount,
                variant: 'text-md/semibold',
                children: x.intl.format(x.t['ess/xs'], { count: s })
            })
        ]
    });
}
t.Z = function (e) {
    let { className: t, entitlements: n } = e,
        s = a()(Array.from(n))
            .filter((e) => {
                let { subscriptionPlanId: t, parentId: n, consumed: i } = e;
                return null != t && null != n && !i;
            })
            .groupBy((e) => e.subscriptionPlanId)
            .value(),
        l = (0, o.e7)([m.ZP], () => m.ZP.getPremiumSubscription()),
        u = (0, o.e7)([m.ZP], () => null == m.ZP.getPremiumTypeSubscription()),
        h = Object.keys(s).some((e) => e === p.Xh.PREMIUM_MONTH_TIER_1),
        E = (0, o.e7)([d.default], () => d.default.getCurrentUser());
    return null == E
        ? null
        : (0, i.jsxs)('div', {
              children: [
                  (0, i.jsx)('div', {
                      className: r()(t, S.premiumSubscriptionAccountCredit, S.accountCreditsContainer),
                      children: Object.keys(s).map((e) =>
                          (0, i.jsx)(
                              T,
                              {
                                  planId: e,
                                  count: s[e].length,
                                  userPremiumSubscription: l,
                                  user: E
                              },
                              e
                          )
                      )
                  }),
                  h &&
                      u &&
                      (0, i.jsxs)('div', {
                          children: [
                              (0, i.jsx)(c.Text, {
                                  className: S.tier1AccountCreditHeader,
                                  variant: 'text-md/normal',
                                  children: x.intl.string(x.t['VNr4+P'])
                              }),
                              (0, i.jsx)(g.R, {})
                          ]
                      })
              ]
          });
};
