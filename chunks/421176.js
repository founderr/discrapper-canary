var s, i, l, a, r = n(442837),
  o = n(570140),
  c = n(496675),
  u = n(981631);
class d extends(a = r.ZP.Store) {
  initialize() {
    this.waitFor(c.Z), this.syncWith([c.Z], u.dG4)
  }
  channelNoticePredicate(e, t) {
    return Date.now() - t >= u.Hqc && c.Z.can(u.Plq.MANAGE_GUILD, e)
  }
}
l = "GuildBoostingNoticeStore", (i = "displayName") in(s = d) ? Object.defineProperty(s, i, {
  value: l,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : s[i] = l, t.Z = new d(o.Z)