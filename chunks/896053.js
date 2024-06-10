"use strict";
n.r(t), n.d(t, {
  default: function() {
    return m
  }
}), n("653041");
var l = n("399606"),
  a = n("897345"),
  s = n("697379"),
  i = n("241559"),
  r = n("563534"),
  o = n("931261"),
  u = n("460347"),
  d = n("994592"),
  c = n("265418"),
  f = n("443063"),
  h = n("981631");

function m(e) {
  let t = (0, c.default)(e.id),
    n = (0, s.useCanReviewGuildMemberApplications)(e.id),
    m = (0, d.useShowRoleSubscriptionsInChannelList)(e.id),
    C = (0, a.useGuildShopVisibleInGuild)(e),
    p = (0, o.useCanSeeOnboardingHome)(e.id),
    g = (0, l.useStateFromStores)([r.default], () => r.default.getNewMemberActions(e.id), [e.id]),
    E = (0, u.default)(e.id),
    S = (0, i.useCanAccessMemberSafetyPage)(e.id),
    _ = [],
    I = e.hasFeature(h.GuildFeatures.HUB),
    N = e.hasFeature(h.GuildFeatures.COMMUNITY),
    T = e.hasFeature(h.GuildFeatures.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY);
  return I && _.push(f.ChannelListCommunityRow.GUILD_HUB_HEADER_OPTIONS), p && E && null != g && g.length > 0 ? _.push(f.ChannelListCommunityRow.GUILD_NEW_MEMBER_ACTIONS_PROGRESS_BAR) : e.premiumProgressBarEnabled && _.push(f.ChannelListCommunityRow.GUILD_PREMIUM_PROGRESS_BAR), !I && p && _.push(f.ChannelListCommunityRow.GUILD_HOME), t && _.push(f.ChannelListCommunityRow.GUILD_SCHEDULED_EVENTS), !I && N && _.push(f.ChannelListCommunityRow.CHANNELS_AND_ROLES), m && _.push(f.ChannelListCommunityRow.GUILD_ROLE_SUBSCRIPTIONS), C && _.push(f.ChannelListCommunityRow.GUILD_SHOP), n && _.push(f.ChannelListCommunityRow.GUILD_MEMBER_APPLICATIONS), S && (N || T) && _.push(f.ChannelListCommunityRow.GUILD_MOD_DASH_MEMBER_SAFETY), _
}