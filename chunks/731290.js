"use strict";
var i, r, s, o, a = n(442837),
  l = n(433517),
  u = n(570140);
let _ = "GuildNSFWAgreeStore",
  c = {};
class d extends(o = a.ZP.Store) {
  initialize() {
    var e;
    c = null !== (e = l.K.get(_)) && void 0 !== e ? e : c
  }
  didAgree(e) {
    return null != e && (c[e] || !1)
  }
}
s = "GuildNSFWAgreeStore", (r = "displayName") in(i = d) ? Object.defineProperty(i, r, {
  value: s,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : i[r] = s, t.Z = new d(u.Z, {
  GUILD_NSFW_AGREE: function(e) {
    let {
      guildId: t
    } = e;
    c[t] = !0, l.K.set(_, c)
  }
})