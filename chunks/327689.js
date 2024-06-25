var s, i, l, a, r = n(442837),
  o = n(570140),
  c = n(430824),
  u = n(981631);
class d extends(a = r.ZP.Store) {
  initialize() {
    this.waitFor(c.Z), this.syncWith([c.Z], u.dG4)
  }
  channelNoticePredicate(e, t) {
    return !e.hasFeature(u.oNc.BANNER) && Date.now() - t >= u.Hqc
  }
}
l = "GuildBoostingNoticeStore", (i = "displayName") in(s = d) ? Object.defineProperty(s, i, {
  value: l,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : s[i] = l, t.Z = new d(o.Z)