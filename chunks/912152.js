var n = t(735250);
t(470079);
var i = t(481060),
  a = t(230711),
  l = t(63063),
  r = t(74538),
  o = t(937615),
  c = t(981631),
  E = t(474936),
  d = t(689938),
  _ = t(202354);
s.Z = function(e) {
  let {
    hasAppliedGuildBoosts: s,
    isUserPremiumTier2: t,
    hasGuildAffinitiesOrInGuild: T,
    subscriptionIsPausedOrPausePending: S
  } = e, {
    subtitle: u,
    flavor: I
  } = function(e) {
    let {
      hasAppliedGuildBoosts: s,
      isUserPremiumTier2: t,
      hasGuildAffinitiesOrInGuild: n,
      subscriptionIsPausedOrPausePending: i
    } = e;
    if (i) return {
      flavor: d.Z.Messages.GUILD_BOOSTING_DISABLED_FOR_PAUSED_SUBSCRIPTION_WITH_LINK.format({
        onClick: () => a.Z.open(c.oAB.SUBSCRIPTIONS)
      })
    };
    if (!n) return {
      subtitle: d.Z.Messages.GUILD_BOOSTING_USER_SETTINGS_NO_JOINED_SERVER_SUBTITLE
    };
    if (s) return {
      subtitle: d.Z.Messages.GUILD_BOOSTING_USER_SETTINGS_SUBTITLE_ACTIVE_BOOSTS,
      flavor: d.Z.Messages.GUILD_BOOSTING_USER_SETTINGS_SUBTITLE_ACTIVE_BOOSTS_FLAVOR.format({
        helpdeskArticle: l.Z.getArticleURL(c.BhN.GUILD_SUBSCRIPTIONS)
      })
    };
    let _ = E.GP[E.Xh.PREMIUM_MONTH_GUILD],
      T = r.ZP.getDefaultPrice(_.id, t),
      S = (0, o.og)((0, o.T4)(T.amount, T.currency), _.interval, _.intervalCount);
    return {
      subtitle: t ? d.Z.Messages.GUILD_BOOSTING_USER_SETTINGS_SUBTITLE_SUBBED_NO_ACTIVE_BOOSTS : d.Z.Messages.GUILD_BOOSTING_USER_SETTINGS_SUBTITLE_NO_SUB_NO_ACTIVE_BOOSTS,
      flavor: d.Z.Messages.GUILD_BOOSTING_USER_SETTINGS_SUBTITLE_NO_ACTIVE_BOOSTS_FLAVOR.format({
        monthlyGuildBoostPrice: S
      })
    }
  }({
    hasAppliedGuildBoosts: s,
    isUserPremiumTier2: t,
    hasGuildAffinitiesOrInGuild: T,
    subscriptionIsPausedOrPausePending: S
  });
  return (0, n.jsxs)("div", {
    className: _.wrapper,
    children: [(0, n.jsx)(i.Heading, {
      variant: "heading-lg/bold",
      className: _.subtitle,
      children: u
    }), null != I && (0, n.jsx)(i.Text, {
      variant: "text-sm/normal",
      children: I
    })]
  })
}