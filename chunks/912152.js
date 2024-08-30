var n = t(735250);
t(470079);
var a = t(481060),
    i = t(230711),
    r = t(63063),
    o = t(74538),
    l = t(937615),
    c = t(981631),
    d = t(474936),
    u = t(689938),
    _ = t(110938);
s.Z = function (e) {
    let { hasAppliedGuildBoosts: s, isUserPremiumTier2: t, hasGuildAffinitiesOrInGuild: E, subscriptionIsPausedOrPausePending: T } = e,
        { subtitle: I, flavor: S } = (function (e) {
            let { hasAppliedGuildBoosts: s, isUserPremiumTier2: t, hasGuildAffinitiesOrInGuild: n, subscriptionIsPausedOrPausePending: a } = e;
            if (a) return { flavor: u.Z.Messages.GUILD_BOOSTING_DISABLED_FOR_PAUSED_SUBSCRIPTION_WITH_LINK.format({ onClick: () => i.Z.open(c.oAB.SUBSCRIPTIONS) }) };
            if (!n) return { subtitle: u.Z.Messages.GUILD_BOOSTING_USER_SETTINGS_NO_JOINED_SERVER_SUBTITLE };
            if (s)
                return {
                    subtitle: u.Z.Messages.GUILD_BOOSTING_USER_SETTINGS_SUBTITLE_ACTIVE_BOOSTS,
                    flavor: u.Z.Messages.GUILD_BOOSTING_USER_SETTINGS_SUBTITLE_ACTIVE_BOOSTS_FLAVOR.format({ helpdeskArticle: r.Z.getArticleURL(c.BhN.GUILD_SUBSCRIPTIONS) })
                };
            let _ = d.GP[d.Xh.PREMIUM_MONTH_GUILD],
                E = o.ZP.getDefaultPrice(_.id, t),
                T = (0, l.og)((0, l.T4)(E.amount, E.currency), _.interval, _.intervalCount);
            return {
                subtitle: t ? u.Z.Messages.GUILD_BOOSTING_USER_SETTINGS_SUBTITLE_SUBBED_NO_ACTIVE_BOOSTS : u.Z.Messages.GUILD_BOOSTING_USER_SETTINGS_SUBTITLE_NO_SUB_NO_ACTIVE_BOOSTS,
                flavor: u.Z.Messages.GUILD_BOOSTING_USER_SETTINGS_SUBTITLE_NO_ACTIVE_BOOSTS_FLAVOR.format({ monthlyGuildBoostPrice: T })
            };
        })({
            hasAppliedGuildBoosts: s,
            isUserPremiumTier2: t,
            hasGuildAffinitiesOrInGuild: E,
            subscriptionIsPausedOrPausePending: T
        });
    return (0, n.jsxs)('div', {
        className: _.wrapper,
        children: [
            (0, n.jsx)(a.Heading, {
                variant: 'heading-lg/bold',
                className: _.subtitle,
                children: I
            }),
            null != S &&
                (0, n.jsx)(a.Text, {
                    variant: 'text-sm/normal',
                    children: S
                })
        ]
    });
};
