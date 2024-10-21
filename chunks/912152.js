var n = t(200651);
t(192379);
var a = t(481060),
    i = t(230711),
    r = t(63063),
    o = t(74538),
    l = t(937615),
    c = t(981631),
    d = t(474936),
    _ = t(689938),
    u = t(68964);
s.Z = function (e) {
    let { hasAppliedGuildBoosts: s, isUserPremiumTier2: t, hasGuildAffinitiesOrInGuild: E, subscriptionIsPausedOrPausePending: T } = e,
        { subtitle: S, flavor: I } = (function (e) {
            let { hasAppliedGuildBoosts: s, isUserPremiumTier2: t, hasGuildAffinitiesOrInGuild: n, subscriptionIsPausedOrPausePending: a } = e;
            if (a) return { flavor: _.Z.Messages.GUILD_BOOSTING_DISABLED_FOR_PAUSED_SUBSCRIPTION_WITH_LINK.format({ onClick: () => i.Z.open(c.oAB.SUBSCRIPTIONS) }) };
            if (!n) return { subtitle: _.Z.Messages.GUILD_BOOSTING_USER_SETTINGS_NO_JOINED_SERVER_SUBTITLE };
            if (s)
                return {
                    subtitle: _.Z.Messages.GUILD_BOOSTING_USER_SETTINGS_SUBTITLE_ACTIVE_BOOSTS,
                    flavor: _.Z.Messages.GUILD_BOOSTING_USER_SETTINGS_SUBTITLE_ACTIVE_BOOSTS_FLAVOR.format({ helpdeskArticle: r.Z.getArticleURL(c.BhN.GUILD_SUBSCRIPTIONS) })
                };
            let u = d.GP[d.Xh.PREMIUM_MONTH_GUILD],
                E = o.ZP.getDefaultPrice(u.id, t),
                T = (0, l.og)((0, l.T4)(E.amount, E.currency), u.interval, u.intervalCount);
            return {
                subtitle: t ? _.Z.Messages.GUILD_BOOSTING_USER_SETTINGS_SUBTITLE_SUBBED_NO_ACTIVE_BOOSTS : _.Z.Messages.GUILD_BOOSTING_USER_SETTINGS_SUBTITLE_NO_SUB_NO_ACTIVE_BOOSTS,
                flavor: _.Z.Messages.GUILD_BOOSTING_USER_SETTINGS_SUBTITLE_NO_ACTIVE_BOOSTS_FLAVOR.format({ monthlyGuildBoostPrice: T })
            };
        })({
            hasAppliedGuildBoosts: s,
            isUserPremiumTier2: t,
            hasGuildAffinitiesOrInGuild: E,
            subscriptionIsPausedOrPausePending: T
        });
    return (0, n.jsxs)('div', {
        className: u.wrapper,
        children: [
            (0, n.jsx)(a.Heading, {
                variant: 'heading-lg/bold',
                className: u.subtitle,
                children: S
            }),
            null != I &&
                (0, n.jsx)(a.Text, {
                    variant: 'text-sm/normal',
                    children: I
                })
        ]
    });
};
