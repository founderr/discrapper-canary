"use strict";
n.r(t), n("47120");
var a, s, l, i, r = n("442837"),
  o = n("433517"),
  u = n("570140"),
  d = n("650774"),
  c = n("430824"),
  f = n("496675"),
  E = n("135899"),
  _ = n("981631");
let h = "publicUpsellChannelNoticeGuilds",
  C = new Set;
class S extends(a = r.default.Store) {
  initialize() {
    var e;
    this.waitFor(f.default, c.default, d.default), this.syncWith([f.default, c.default, d.default], _.NOOP), C = (e = new Set(o.Storage.get(h)), e)
  }
  isVisible(e) {
    if (null == e) return;
    let t = d.default.getMemberCount(e.id);
    return !C.has(e.id) && null != t && t >= E.COMMUNITY_UPSELL_MINIMUM_GUILD_SIZE && f.default.can(_.Permissions.ADMINISTRATOR, e) && !e.hasFeature(_.GuildFeatures.COMMUNITY)
  }
}
i = "EnablePublicGuildUpsellNoticeStore", (l = "displayName") in(s = S) ? Object.defineProperty(s, l, {
  value: i,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : s[l] = i, t.default = new S(u.default, {
  PUBLIC_UPSELL_NOTICE_DISMISS: function(e) {
    let t = e.guildId;
    if (!C.has(t)) return C.add(t), o.Storage.set(h, C), !0
  }
})