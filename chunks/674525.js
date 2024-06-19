var s, i, l, a, r = n(442837),
  o = n(570140);
let c = [];
class u extends(a = r.ZP.Store) {
  getEligibleGuildsForNagActivate() {
    return c
  }
}
l = "CreatorMonetizationMarketingStore", (i = "displayName") in(s = u) ? Object.defineProperty(s, i, {
  value: l,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : s[i] = l, t.Z = new u(o.Z, {
  CREATOR_MONETIZATION_NAG_ACTIVATE_ELIGIBLITY_FETCH_SUCCESS: function(e) {
    let {
      eligibleGuilds: t
    } = e;
    c = t
  }
})