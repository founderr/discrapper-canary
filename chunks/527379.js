"use strict";
n.r(t), n.d(t, {
  getMemberSupplemental: function() {
    return g
  },
  goToMemberSafetyDashboard: function() {
    return E
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
var r = n("570140"),
  i = n("434404"),
  s = n("703656"),
  l = n("430824"),
  u = n("241559"),
  o = n("327999"),
  a = n("981631"),
  d = n("176505");
async function c(e) {
  await r.default.dispatch({
    type: "INITIALIZE_MEMBER_SAFETY_STORE",
    guildId: e
  })
}

function f(e) {
  r.default.dispatch({
    type: "MEMBER_SAFETY_NEW_MEMBER_TIMESTAMP_REFRESH",
    guildId: e
  })
}

function S(e, t) {
  let {
    continuationToken: n,
    ...i
  } = t;
  r.default.dispatch({
    type: "MEMBER_SAFETY_PAGINATION_UPDATE",
    guildId: e,
    pagination: i
  })
}
async function _(e, t) {
  await r.default.dispatch({
    type: "MEMBER_SAFETY_SEARCH_STATE_UPDATE",
    guildId: e,
    searchState: t
  })
}

function E(e) {
  let t = (0, u.canAccessMemberSafetyPage)(e),
    n = l.default.getGuild(e);
  return !!t && null != n && (n.hasFeature(a.GuildFeatures.COMMUNITY) || n.hasFeature(a.GuildFeatures.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY) ? ((0, s.transitionTo)(a.Routes.CHANNEL(e, d.StaticChannelRoute.MEMBER_SAFETY)), !0) : (i.default.open(n.id, a.GuildSettingsSections.MEMBERS), !0))
}
async function g(e, t) {
  let n = await (0, o.fetchMemberSupplemental)(e, t);
  return 0 === n.length ? [] : (await r.default.dispatch({
    type: "FETCH_GUILD_MEMBER_SUPPLEMENTAL_SUCCESS",
    guildId: e,
    memberSupplementals: n
  }), n)
}