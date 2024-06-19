var i, s, l, a, r = n(442837),
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
l = "InviteNoticeStore", (s = "displayName") in(i = E) ? Object.defineProperty(i, s, {
  value: l,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : i[s] = l, t.Z = new E(o.Z)