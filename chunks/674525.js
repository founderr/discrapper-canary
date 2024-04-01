"use strict";
n.r(t);
var s, l, a, i, r = n("442837"),
  o = n("570140");
let u = [];
class d extends(i = r.default.Store) {
  getEligibleGuildsForNagActivate() {
    return u
  }
}
a = "CreatorMonetizationMarketingStore", (l = "displayName") in(s = d) ? Object.defineProperty(s, l, {
  value: a,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : s[l] = a, t.default = new d(o.default, {
  CREATOR_MONETIZATION_NAG_ACTIVATE_ELIGIBLITY_FETCH_SUCCESS: function(e) {
    let {
      eligibleGuilds: t
    } = e;
    u = t
  }
})