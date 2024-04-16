"use strict";
a.r(t), a.d(t, {
  default: function() {
    return u
  }
});
var n = a("442837"),
  s = a("430824"),
  l = a("644542"),
  i = a("923726"),
  r = a("144507"),
  o = a("981631");

function u(e) {
  let t = (0, n.useStateFromStores)([s.default], () => s.default.getGuild(e)),
    a = (0, i.useGuildEligibleForTierTemplates)(e),
    u = (0, i.useUserEligibleForTierTemplates)(),
    d = (null == t ? void 0 : t.hasFeature(o.GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED)) === !0 && (null == t ? void 0 : t.hasFeature(o.GuildFeatures.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE)) === !1,
    c = (0, r.canManageGuildRoleSubscriptions)(t);
  return d && u && c && l.GuildRoleSubscriptionsTierTemplatesExperiment.trackExposure({
    guildId: e,
    location: "ca30d9_1"
  }), d && u && c && a
}