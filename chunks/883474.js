"use strict";
r.r(t), r.d(t, {
  GuildVisibility: function() {
    return o
  },
  getGuildTraits: function() {
    return i
  }
}), r("222007");
var o, a, s = r("813006"),
  l = r("49111");

function i(e) {
  let t = new Set(e.features),
    r = t.has(l.GuildFeatures.COMMUNITY) && t.has(l.GuildFeatures.DISCOVERABLE) ? "PUBLIC" : "INVITE_ONLY",
    o = function(e) {
      return null != e && (e instanceof s.default ? e.premiumSubscriberCount > 0 || e.premiumTier > l.BoostedGuildTiers.NONE : null != e.premiumSubscriptionCount && e.premiumSubscriptionCount > 0)
    }(e),
    a = 0;
  if (o) {
    var i;
    a = null !== (i = e instanceof s.default ? e.premiumSubscriberCount : e.premiumSubscriptionCount) && void 0 !== i ? i : 0
  }
  let n = e instanceof s.default ? e.premiumTier : l.BoostedGuildTiers.NONE;
  return {
    verified: t.has(l.GuildFeatures.VERIFIED),
    partnered: t.has(l.GuildFeatures.PARTNERED),
    community: t.has(l.GuildFeatures.COMMUNITY),
    staff: t.has(l.GuildFeatures.INTERNAL_EMPLOYEE_ONLY),
    visibility: r,
    premium: o,
    premiumSubscriberCount: a,
    premiumTier: n
  }
}(a = o || (o = {})).PUBLIC = "PUBLIC", a.INVITE_ONLY = "INVITE_ONLY"