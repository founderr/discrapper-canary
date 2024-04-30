"use strict";
a.r(t), a.d(t, {
  default: function() {
    return o
  }
});
var n = a("442837"),
  s = a("223892"),
  l = a("430824"),
  i = a("594174"),
  r = a("981631");

function o(e) {
  var t;
  let a = (0, n.useStateFromStores)([l.default], () => l.default.getGuild(e)),
    o = (0, n.useStateFromStores)([i.default], () => i.default.getCurrentUser()),
    u = (null == a ? void 0 : a.ownerId) === (null == o ? void 0 : o.id),
    d = (0, s.useIsUserInCreatorMonetizationEligibleCountry)();
  return u && null !== (t = null == a ? void 0 : a.hasFeature(r.GuildFeatures.COMMUNITY)) && void 0 !== t && t && d && !((null == a ? void 0 : a.hasFeature(r.GuildFeatures.CREATOR_MONETIZABLE)) || (null == a ? void 0 : a.hasFeature(r.GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL)) || (null == a ? void 0 : a.hasFeature(r.GuildFeatures.CREATOR_MONETIZABLE_DISABLED)))
}