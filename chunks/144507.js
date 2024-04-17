"use strict";
n.r(t), n.d(t, {
  GuildRoleSubscriptionSettingsVisibility: function() {
    return r
  },
  canManageGuildRoleSubscriptions: function() {
    return g
  },
  canSeeGuildRoleSubscriptionSettings: function() {
    return S
  },
  useCanManageGuildRoleSubscriptions: function() {
    return _
  },
  useGuildRoleSubscriptionSettingsVisibility: function() {
    return E
  }
});
var i, r, l = n("442837"),
  s = n("223892"),
  u = n("674180"),
  o = n("496675"),
  a = n("594174"),
  d = n("923726"),
  c = n("981631");
(i = r || (r = {}))[i.NONE = 0] = "NONE", i[i.WAITLIST_ONLY = 1] = "WAITLIST_ONLY", i[i.NEEDS_COMMUNITY = 2] = "NEEDS_COMMUNITY", i[i.VISIBLE = 3] = "VISIBLE";

function f(e) {
  if (e.guild.hasFeature(c.GuildFeatures.CREATOR_MONETIZABLE_DISABLED)) return 0;
  if (function(e) {
      let {
        guild: t,
        isOwner: n,
        canManageGuildRoleSubscriptions: i,
        isGuildEligibleForRoleSubscriptions: r,
        isExpeditedMonetizationOnboardingGuild: l,
        isUserInCreatorMonetizationEligibleCountry: s,
        shouldRestrictUpdatingRoleSubscriptionSettings: u
      } = e;
      return !!t.hasFeature(c.GuildFeatures.COMMUNITY) && !!i && (!u || !!n) && (!!(t.hasFeature(c.GuildFeatures.CREATOR_MONETIZABLE) || t.hasFeature(c.GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL)) || (!!r || !!l) && n && s)
    }(e)) return 3;
  let {
    guild: t,
    isOwner: n,
    isUserInCreatorMonetizationEligibleCountry: i,
    isMonetizationWaitlistEnabledForGuild: r,
    isGuildEligibleForRoleSubscriptions: l,
    isExpeditedMonetizationOnboardingGuild: s
  } = e;
  return n && !i && r ? 1 : n && r && (l || s) && !t.hasFeature(c.GuildFeatures.COMMUNITY) ? 2 : 0
}

function S(e) {
  return 0 !== f(e)
}

function E(e) {
  let t = (0, d.useGuildEligibleForRoleSubscriptions)(null == e ? void 0 : e.id),
    n = (0, s.useIsExpeditedOnboardingGuild)(e),
    i = (0, s.useIsMonetizationWaitlistEnabledForGuild)(null == e ? void 0 : e.id),
    r = _(e),
    o = (0, l.useStateFromStores)([a.default], () => {
      let t = a.default.getCurrentUser();
      return null != t && (null == e ? void 0 : e.isOwner(t)) === !0
    }),
    c = (0, s.useIsUserInCreatorMonetizationEligibleCountry)(),
    {
      shouldRestrictUpdatingCreatorMonetizationSettings: S
    } = (0, u.useShouldRestrictUpdatingCreatorMonetizationSettings)(null == e ? void 0 : e.id);
  return null == e ? 0 : f({
    guild: e,
    isOwner: o,
    canManageGuildRoleSubscriptions: r,
    isGuildEligibleForRoleSubscriptions: t,
    isMonetizationWaitlistEnabledForGuild: i,
    isExpeditedMonetizationOnboardingGuild: n,
    isUserInCreatorMonetizationEligibleCountry: c,
    shouldRestrictUpdatingRoleSubscriptionSettings: S
  })
}

function _(e) {
  return (0, l.useStateFromStores)([o.default], () => g(e), [e])
}

function g(e) {
  return null != e && o.default.can(c.Permissions.ADMINISTRATOR, e)
}