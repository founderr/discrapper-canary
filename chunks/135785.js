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
    E = n(981631),
    u = n(689938),
    T = n(47821);
t.Z = (e) => {
    let t,
        n,
        { premiumSubscription: a, className: I, isFullscreen: R = !1, textColor: g } = e,
        N = (0, d.Nx)();
    if (null == a) return null;
    let C = null != a ? c.ZP.getPremiumPlanItem(a) : null;
    if ((c.ZP.isBoostOnlySubscription(a) ? (t = u.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION) : null != C && (t = c.ZP.getDisplayPremiumType(C.planId)), null == t)) return null;
    let m = () => l.Z.open(E.oAB.SUBSCRIPTIONS),
        f = (null != C ? c.ZP.getSkuIdForPlan(C.planId) : null) === _.Si.TIER_1;
    return (
        (n = null != g ? g : N || R ? 'always-white' : 'text-normal'),
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
                    children: f
                        ? u.Z.Messages.PREMIUM_SUBSCRIPTION_TIER_1_DEPRECATION.format({
                              helpdeskArticle: o.Z.getArticleURL(E.BhN.PREMIUM_DETAILS),
                              onSubscriptionsClick: m
                          })
                        : u.Z.Messages.PREMIUM_SUBSCRIPTION_MANAGE_YOURS_LINK.format({
                              subscriptionName: t,
                              onSubscriptionsClick: m
                          })
                })
            ]
        })
    );
};
