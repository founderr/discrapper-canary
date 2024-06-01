"use strict";
n.r(t), n.d(t, {
  getMemberSupplemental: function() {
    return E
  },
  goToMemberSafetyDashboard: function() {
    return p
  },
  initializeMemberSafetyStore: function() {
    return c
  },
  refreshMemberSafetyTimestamp: function() {
    return f
  },
  updateMemberSafetyTablePagination: function() {
    return S
  },
  updateSearchState: function() {
    return _
  }
});
var i = n("570140"),
  r = n("434404"),
  s = n("703656"),
  l = n("430824"),
  o = n("241559"),
  u = n("327999"),
  a = n("981631"),
  d = n("176505");
async function c(e) {
  await i.default.dispatch({
    type: "INITIALIZE_MEMBER_SAFETY_STORE",
    guildId: e
  })
}

function f(e) {
  i.default.dispatch({
    type: "MEMBER_SAFETY_NEW_MEMBER_TIMESTAMP_REFRESH",
    guildId: e
  })
}

function S(e, t) {
  let {
    continuationToken: n,
    ...r
  } = t;
  i.default.dispatch({
    type: "MEMBER_SAFETY_PAGINATION_UPDATE",
    guildId: e,
    pagination: r
  })
}
async function _(e, t) {
  await i.default.dispatch({
    type: "MEMBER_SAFETY_SEARCH_STATE_UPDATE",
    guildId: e,
    searchState: t
  })
}

function p(e) {
  let t = (0, o.canAccessMemberSafetyPage)(e),
    n = l.default.getGuild(e);
  return !!t && null != n && (n.hasFeature(a.GuildFeatures.COMMUNITY) || n.hasFeature(a.GuildFeatures.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY) ? ((0, s.transitionTo)(a.Routes.CHANNEL(e, d.StaticChannelRoute.MEMBER_SAFETY)), !0) : (r.default.open(n.id, a.GuildSettingsSections.MEMBERS), !0))
}
async function E(e, t) {
  let n = await (0, u.fetchMemberSupplemental)(e, t);
  return 0 === n.length ? [] : (await i.default.dispatch({
    type: "FETCH_GUILD_MEMBER_SUPPLEMENTAL_SUCCESS",
    guildId: e,
    memberSupplementals: n
  }), n)
}