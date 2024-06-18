"use strict";
n.d(t, {
  $D: function() {
    return T
  },
  H2: function() {
    return h
  },
  MO: function() {
    return I
  },
  X$: function() {
    return E
  },
  d5: function() {
    return r
  }
});
var i, r, s = n(442837),
  o = n(223892),
  a = n(674180),
  l = n(496675),
  u = n(594174),
  _ = n(923726),
  c = n(981631);
(i = r || (r = {}))[i.NONE = 0] = "NONE", i[i.WAITLIST_ONLY = 1] = "WAITLIST_ONLY", i[i.NEEDS_COMMUNITY = 2] = "NEEDS_COMMUNITY", i[i.VISIBLE = 3] = "VISIBLE";

function d(e) {
  if (e.guild.hasFeature(c.oNc.CREATOR_MONETIZABLE_DISABLED)) return 0;
  if (function(e) {
      let {
        guild: t,
        isOwner: n,
        canManageGuildRoleSubscriptions: i,
        isGuildEligibleForRoleSubscriptions: r,
        isExpeditedMonetizationOnboardingGuild: s,
        isUserInCreatorMonetizationEligibleCountry: o,
        shouldRestrictUpdatingRoleSubscriptionSettings: a
      } = e;
      return !!t.hasFeature(c.oNc.COMMUNITY) && !!i && (!a || !!n) && (!!(t.hasFeature(c.oNc.CREATOR_MONETIZABLE) || t.hasFeature(c.oNc.CREATOR_MONETIZABLE_PROVISIONAL)) || (!!r || !!s) && n && o)
    }(e)) return 3;
  let {
    guild: t,
    isOwner: n,
    isUserInCreatorMonetizationEligibleCountry: i,
    isMonetizationWaitlistEnabledForGuild: r,
    isGuildEligibleForRoleSubscriptions: s,
    isExpeditedMonetizationOnboardingGuild: o
  } = e;
  return n && !i && r ? 1 : n && r && (s || o) && !t.hasFeature(c.oNc.COMMUNITY) ? 2 : 0
}

function E(e) {
  return 0 !== d(e)
}

function I(e) {
  let t = (0, _.Bt)(null == e ? void 0 : e.id),
    n = (0, o.Ob)(e),
    i = (0, o.gS)(null == e ? void 0 : e.id),
    r = T(e),
    l = (0, s.e7)([u.default], () => {
      let t = u.default.getCurrentUser();
      return null != t && (null == e ? void 0 : e.isOwner(t)) === !0
    }),
    c = (0, o.Sd)(),
    {
      shouldRestrictUpdatingCreatorMonetizationSettings: E
    } = (0, a.gX)(null == e ? void 0 : e.id);
  return null == e ? 0 : d({
    guild: e,
    isOwner: l,
    canManageGuildRoleSubscriptions: r,
    isGuildEligibleForRoleSubscriptions: t,
    isMonetizationWaitlistEnabledForGuild: i,
    isExpeditedMonetizationOnboardingGuild: n,
    isUserInCreatorMonetizationEligibleCountry: c,
    shouldRestrictUpdatingRoleSubscriptionSettings: E
  })
}

function T(e) {
  return (0, s.e7)([l.Z], () => h(e), [e])
}

function h(e) {
  return null != e && l.Z.can(c.Plq.ADMINISTRATOR, e)
}