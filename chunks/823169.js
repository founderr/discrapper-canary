"use strict";
a.r(t), a("47120");
var n = a("570140"),
  s = a("317770"),
  l = a("430824"),
  i = a("594174"),
  r = a("358085"),
  o = a("53365"),
  u = a("981631");
class d extends s.default {
  _initialize() {
    n.default.subscribe("CONNECTION_OPEN", this.maybeFetchEligiblity)
  }
  _terminate() {
    n.default.unsubscribe("CONNECTION_OPEN", this.maybeFetchEligiblity)
  }
  constructor(...e) {
    var t, a, n;
    super(...e), t = this, a = "maybeFetchEligiblity", n = async () => {
      if ((0, r.isDesktop)() || (0, r.isWeb)()) {
        let e = Object.values(l.default.getGuilds()),
          t = i.default.getCurrentUser(),
          a = e.filter(e => e.isOwner(t) && !e.hasFeature(u.GuildFeatures.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE) && !e.hasFeature(u.GuildFeatures.CREATOR_MONETIZABLE_RESTRICTED) && !e.hasFeature(u.GuildFeatures.CREATOR_MONETIZABLE_DISABLED) && (e.hasFeature(u.GuildFeatures.CREATOR_MONETIZABLE) || e.hasFeature(u.GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL)));
        a.length > 0 && await (0, o.fetchCreatorMonetizationNagActivateEligibility)(a.map(e => e.id))
      }
    }, a in t ? Object.defineProperty(t, a, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[a] = n
  }
}
t.default = new d