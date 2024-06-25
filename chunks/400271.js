n(47120);
var s, i, l, a, r = n(442837),
  o = n(433517),
  c = n(570140),
  u = n(650774),
  d = n(430824),
  E = n(496675),
  h = n(135899),
  _ = n(981631);
let I = "publicUpsellChannelNoticeGuilds",
  m = new Set;
class T extends(s = r.ZP.Store) {
  initialize() {
    var e;
    this.waitFor(E.Z, d.Z, u.Z), this.syncWith([E.Z, d.Z, u.Z], _.dG4), m = (e = new Set(o.K.get(I)), e)
  }
  isVisible(e) {
    if (null == e) return;
    let t = u.Z.getMemberCount(e.id);
    return !m.has(e.id) && null != t && t >= h.U3 && E.Z.can(_.Plq.ADMINISTRATOR, e) && !e.hasFeature(_.oNc.COMMUNITY)
  }
}
a = "EnablePublicGuildUpsellNoticeStore", (l = "displayName") in(i = T) ? Object.defineProperty(i, l, {
  value: a,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : i[l] = a, t.Z = new T(c.Z, {
  PUBLIC_UPSELL_NOTICE_DISMISS: function(e) {
    let t = e.guildId;
    if (!m.has(t)) return m.add(t), o.K.set(I, m), !0
  }
})