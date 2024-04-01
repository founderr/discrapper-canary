"use strict";
n.r(t), n.d(t, {
  getMemberSupplemental: function() {
    return g
  },
  goToMemberSafetyDashboard: function() {
    return _
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
    return E
  }
});
var i = n("570140"),
  r = n("434404"),
  l = n("703656"),
  s = n("430824"),
  u = n("241559"),
  o = n("327999"),
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
async function E(e, t) {
  await i.default.dispatch({
    type: "MEMBER_SAFETY_SEARCH_STATE_UPDATE",
    guildId: e,
    searchState: t
  })
}

function _(e) {
  let t = (0, u.canAccessMemberSafetyPage)(e),
    n = s.default.getGuild(e);
  return !!t && null != n && (n.hasFeature(a.GuildFeatures.COMMUNITY) || n.hasFeature(a.GuildFeatures.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY) ? ((0, l.transitionTo)(a.Routes.CHANNEL(e, d.StaticChannelRoute.MEMBER_SAFETY)), !0) : (r.default.open(n.id, a.GuildSettingsSections.MEMBERS), !0))
}
async function g(e, t) {
  let n = await (0, o.fetchMemberSupplemental)(e, t);
  return 0 === n.length ? [] : (await i.default.dispatch({
    type: "FETCH_GUILD_MEMBER_SUPPLEMENTAL_SUCCESS",
    guildId: e,
    memberSupplementals: n
  }), n)
}