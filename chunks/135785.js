var s = n(735250);
n(470079);
var a = n(120356),
    r = n.n(a),
    i = n(481060),
    l = n(230711),
    o = n(63063),
    c = n(74538),
    d = n(140465),
    _ = n(474936),
    u = n(981631),
    E = n(689938),
    T = n(47821);
t.Z = (e) => {
    let t,
        n,
        { premiumSubscription: a, className: I, isFullscreen: R = !1, textColor: m } = e,
        N = (0, d.Nx)();
    if (null == a) return null;
    let g = null != a ? c.ZP.getPremiumPlanItem(a) : null;
    if ((c.ZP.isBoostOnlySubscription(a) ? (t = E.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION) : null != g && (t = c.ZP.getDisplayPremiumType(g.planId)), null == t)) return null;
    let C = () => l.Z.open(u.oAB.SUBSCRIPTIONS),
        p = (null != g ? c.ZP.getSkuIdForPlan(g.planId) : null) === _.Si.TIER_1;
    return (
        (n = null != m ? m : N || R ? 'always-white' : 'text-normal'),
        (0, s.jsxs)(i.Card, {
            className: r()(T.container, I, {
                [T.lightTextLink]: R,
                [T.centerText]: N
            }),
            type: i.Card.Types.CUSTOM,
            children: [
                (0, s.jsx)(i.CircleWarningIcon, {
                    size: 'custom',
                    width: 20,
                    height: 20,
                    color: 'currentColor',
                    className: r()(T.icon, { [T.lightThemeColorOnly]: N || R })
                }),
                (0, s.jsx)(i.Text, {
                    variant: 'text-sm/medium',
                    color: n,
                    children: p
                        ? E.Z.Messages.PREMIUM_SUBSCRIPTION_TIER_1_DEPRECATION.format({
                              helpdeskArticle: o.Z.getArticleURL(u.BhN.PREMIUM_DETAILS),
                              onSubscriptionsClick: C
                          })
                        : E.Z.Messages.PREMIUM_SUBSCRIPTION_MANAGE_YOURS_LINK.format({
                              subscriptionName: t,
                              onSubscriptionsClick: C
                          })
                })
            ]
        })
    );
};
