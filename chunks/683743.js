var s, i, l, a, r = n(442837),
  o = n(570140),
  c = n(496675),
  u = n(981631);

function d() {
  return !0
}
class E extends(a = r.ZP.Store) {
  initialize() {
    this.waitFor(c.Z), this.syncWith([c.Z], d)
  }
  channelNoticePredicate(e, t) {
    return Date.now() - t >= u.Hqc && c.Z.can(u.Plq.ADMINISTRATOR, e)
  }
}
l = "InviteNoticeStore", (i = "displayName") in(s = E) ? Object.defineProperty(s, i, {
  value: l,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : s[i] = l, t.Z = new E(o.Z)