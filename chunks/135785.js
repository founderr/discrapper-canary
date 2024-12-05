var i = n(200651);
n(192379);
var r = n(120356),
    a = n.n(r),
    s = n(481060),
    l = n(230711),
    o = n(63063),
    c = n(74538),
    d = n(140465),
    u = n(474936),
    g = n(981631),
    m = n(388032),
    p = n(521671);
t.Z = (e) => {
    let t,
        n,
        { premiumSubscription: r, className: f, isFullscreen: _ = !1, textColor: h } = e,
        E = (0, d.Nx)();
    if (null == r) return null;
    let b = null != r ? c.ZP.getPremiumPlanItem(r) : null;
    if ((c.ZP.isBoostOnlySubscription(r) ? (t = m.intl.string(m.t.Uj0md3)) : null != b && (t = c.ZP.getDisplayPremiumType(b.planId)), null == t)) return null;
    let x = () => l.Z.open(g.oAB.SUBSCRIPTIONS),
        C = (null != b ? c.ZP.getSkuIdForPlan(b.planId) : null) === u.Si.TIER_1;
    return (
        (n = null != h ? h : E || _ ? 'always-white' : 'text-normal'),
        (0, i.jsxs)(s.Card, {
            className: a()(p.container, f, {
                [p.lightTextLink]: _,
                [p.centerText]: E
            }),
            type: s.Card.Types.CUSTOM,
            children: [
                (0, i.jsx)(s.CircleWarningIcon, {
                    size: 'custom',
                    width: 20,
                    height: 20,
                    color: 'currentColor',
                    className: a()(p.icon, { [p.lightThemeColorOnly]: E || _ })
                }),
                (0, i.jsx)(s.Text, {
                    variant: 'text-sm/medium',
                    color: n,
                    children: C
                        ? m.intl.format(m.t['tYuv+f'], {
                              helpdeskArticle: o.Z.getArticleURL(g.BhN.PREMIUM_DETAILS),
                              onSubscriptionsClick: x
                          })
                        : m.intl.format(m.t.xHRgU1, {
                              subscriptionName: t,
                              onSubscriptionsClick: x
                          })
                })
            ]
        })
    );
};
