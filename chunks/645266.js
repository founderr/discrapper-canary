"use strict";
n.r(t), n.d(t, {
  initializeMemberSafetyStore: function() {
    return d
  },
  refreshMemberSafetyTimestamp: function() {
    return c
  },
  updateMemberSafetyTablePagination: function() {
    return f
  },
  updateSearchState: function() {
    return S
  },
  getMemberSupplemental: function() {
    return E
  },
  goToMemberSafetyDashboard: function() {
    return h
  }
});
var i = n("592407"),
  r = n("393414"),
  l = n("305961"),
  u = n("466818"),
  s = n("447038"),
  o = n("49111"),
  a = n("724210");
async function d(e) {
  return await (0, s.initializeMemberSafetyStoreV2)(e)
}

function c(e) {
  return (0, s.refreshMemberSafetyTimestampV2)(e)
}

function f(e, t) {
  return (0, s.updateMemberSafetyTablePaginationV2)(e, t)
}

function S(e, t) {
  return (0, s.updateSearchStateV2)(e, t)
}

function E(e, t) {
  return (0, s.getMemberSupplementalV2)(e, t)
}

function h(e) {
  let t = (0, u.canAccessMemberSafetyPage)(e),
    n = l.default.getGuild(e);
  return !!t && null != n && (n.hasFeature(o.GuildFeatures.COMMUNITY) || n.hasFeature(o.GuildFeatures.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY) ? ((0, r.transitionTo)(o.Routes.CHANNEL(e, a.StaticChannelRoute.MEMBER_SAFETY)), !0) : (i.default.open(n.id, o.GuildSettingsSections.MEMBERS), !0))
}