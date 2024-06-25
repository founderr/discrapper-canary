n(47120);
var s = n(570140),
  i = n(317770),
  l = n(430824),
  a = n(594174),
  r = n(358085),
  o = n(53365),
  c = n(981631);
class u extends i.Z {
  _initialize() {
    s.Z.subscribe("CONNECTION_OPEN", this.maybeFetchEligiblity)
  }
  _terminate() {
    s.Z.unsubscribe("CONNECTION_OPEN", this.maybeFetchEligiblity)
  }
  constructor(...e) {
    var t, n, s;
    super(...e), t = this, n = "maybeFetchEligiblity", s = async () => {
      if ((0, r.isDesktop)() || (0, r.isWeb)()) {
        let e = Object.values(l.Z.getGuilds()),
          t = a.default.getCurrentUser(),
          n = e.filter(e => e.isOwner(t) && !e.hasFeature(c.oNc.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE) && !e.hasFeature(c.oNc.CREATOR_MONETIZABLE_RESTRICTED) && !e.hasFeature(c.oNc.CREATOR_MONETIZABLE_DISABLED) && (e.hasFeature(c.oNc.CREATOR_MONETIZABLE) || e.hasFeature(c.oNc.CREATOR_MONETIZABLE_PROVISIONAL)));
        n.length > 0 && await (0, o.av)(n.map(e => e.id))
      }
    }, n in t ? Object.defineProperty(t, n, {
      value: s,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[n] = s
  }
}
t.Z = new u