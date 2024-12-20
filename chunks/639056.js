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
    h = n(580130),
    g = n(74538),
    p = n(393411),
    x = n(474936),
    S = n(981631),
    T = n(388032),
    E = n(461538);
function C(e) {
    let t,
        { user: n, planId: s, count: l, userPremiumSubscription: a, unconsumedFractionalPremiumUnits: d = [] } = e,
        [m, h] = (0, o.Wu)([u.Z], () => [u.Z.get(s), null != a ? u.Z.get(a.planId) : null]);
    if (null == m || g.ZP.getInterval(s).intervalType !== x.rV.MONTH) return null;
    let p = null != h ? h.skuId : null,
        C = m.skuId === p,
        _ = g.ZP.getDisplayName(s);
    if (null != a) {
        let e;
        (e = a.status === S.O0b.PAUSED && null != a.pauseEndsAt ? new Date(a.pauseEndsAt) : new Date(a.currentPeriodEnd)), (t = (0, g.N1)(e, d));
    }
    return (0, i.jsxs)('div', {
        className: E.accountCreditRow,
        children: [
            (0, i.jsx)('div', {
                className: r()({
                    [E.iconBackgroundTier0]: m.skuId === x.Si.TIER_0,
                    [E.iconBackgroundTier1]: m.skuId === x.Si.TIER_1,
                    [E.iconBackgroundTier2]: m.skuId === x.Si.TIER_2
                }),
                children: (0, i.jsx)(c.NitroWheelIcon, {
                    size: 'md',
                    color: 'currentColor',
                    className: E.icon
                })
            }),
            (0, i.jsxs)('div', {
                className: E.rowDetails,
                children: [
                    (0, i.jsx)(c.Heading, {
                        variant: 'heading-md/semibold',
                        children: T.intl.format(T.t.LzobT0, { planName: _ })
                    }),
                    n.hasFreePremium() || (null != a && a.isPurchasedExternally)
                        ? null
                        : (0, i.jsx)(c.Heading, {
                              className: E.rowApplied,
                              variant: 'heading-sm/semibold',
                              color: 'header-secondary',
                              children: C && null != a ? T.intl.formatToPlainString(T.t['5CNRRE'], { date: null != t ? t : 0 }) : T.intl.formatToPlainString(T.t.eNXZ5O, { planName: _ })
                          })
                ]
            }),
            (0, i.jsx)(c.Text, {
                className: E.rowCreditCount,
                variant: 'text-md/semibold',
                children: T.intl.format(T.t['ess/xs'], { count: l })
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
        l = (0, o.Wu)([h.Z], () => h.Z.getUnactivatedFractionalPremiumUnits()),
        u = (0, o.e7)([m.ZP], () => m.ZP.getPremiumSubscription()),
        g = (0, o.e7)([m.ZP], () => null == m.ZP.getPremiumTypeSubscription()),
        S = Object.keys(s).some((e) => e === x.Xh.PREMIUM_MONTH_TIER_1),
        _ = (0, o.e7)([d.default], () => d.default.getCurrentUser());
    return null == _
        ? null
        : (0, i.jsxs)('div', {
              children: [
                  (0, i.jsx)('div', {
                      className: r()(t, E.premiumSubscriptionAccountCredit, E.accountCreditsContainer),
                      children: Object.keys(s).map((e) =>
                          (0, i.jsx)(
                              C,
                              {
                                  planId: e,
                                  count: s[e].length,
                                  userPremiumSubscription: u,
                                  user: _,
                                  unconsumedFractionalPremiumUnits: l
                              },
                              e
                          )
                      )
                  }),
                  S &&
                      g &&
                      (0, i.jsxs)('div', {
                          children: [
                              (0, i.jsx)(c.Text, {
                                  className: E.tier1AccountCreditHeader,
                                  variant: 'text-md/normal',
                                  children: T.intl.string(T.t['VNr4+P'])
                              }),
                              (0, i.jsx)(p.R, {})
                          ]
                      })
              ]
          });
};
