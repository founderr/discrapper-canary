"use strict";
n.r(t), n.d(t, {
  default: function() {
    return S
  }
});
var i = n("430198"),
  r = n("897345"),
  s = n("697379"),
  a = n("241559"),
  o = n("819553"),
  l = n("931261"),
  u = n("994592"),
  d = n("911560"),
  _ = n("592125"),
  c = n("430824"),
  E = n("823379"),
  I = n("754688"),
  T = n("981631"),
  f = n("176505");
async function S(e) {
  let {
    guildId: t,
    channelId: n
  } = e, S = c.default.getGuild(t), h = c.default.getRoles(t);
  if (null == S && t !== T.ME) return !1;
  if (null == n) return !0;
  if ((0, f.isStaticChannelRoute)(n)) switch (n) {
    case f.StaticChannelRoute.ROLE_SUBSCRIPTIONS:
      return (0, u.areRoleSubscriptionsVisibleInGuild)(t, h);
    case f.StaticChannelRoute.GUILD_SHOP:
      return (0, r.isGuildShopVisibleInGuild)(S, h);
    case f.StaticChannelRoute.MEMBER_APPLICATIONS:
      return (0, s.canReviewGuildMemberApplications)(t);
    case f.StaticChannelRoute.GUILD_HOME:
      return (0, l.canSeeOnboardingHome)(t);
    case f.StaticChannelRoute.CHANNEL_BROWSER:
      return null != S && S.hasFeature(T.GuildFeatures.COMMUNITY);
    case f.StaticChannelRoute.GUILD_ONBOARDING:
      return o.default.shouldShowOnboarding(t);
    case f.StaticChannelRoute.CUSTOMIZE_COMMUNITY:
      return null != S && S.hasFeature(T.GuildFeatures.COMMUNITY);
    case f.StaticChannelRoute.MEMBER_SAFETY:
      return (0, a.canAccessMemberSafetyPage)(t);
    default:
      (0, E.assertNever)(n)
  }
  let A = _.default.getChannel(n);
  return (null != A || (await d.default.loadThread(n), null != (A = _.default.getChannel(n)))) && ((0, I.canViewChannel)(A) || i.default.isChannelGatedAndVisible(t, n))
}