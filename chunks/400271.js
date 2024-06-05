"use strict";
n.r(t), n("47120");
var a, s, l, i, r = n("442837"),
  o = n("433517"),
  u = n("570140"),
  d = n("650774"),
  c = n("430824"),
  f = n("496675"),
  E = n("135899"),
  h = n("981631");
let C = "publicUpsellChannelNoticeGuilds",
  _ = new Set;
class m extends(a = r.default.Store) {
  initialize() {
    var e;
    this.waitFor(f.default, c.default, d.default), this.syncWith([f.default, c.default, d.default], h.NOOP), _ = (e = new Set(o.Storage.get(C)), e)
  }
  isVisible(e) {
    if (null == e) return;
    let t = d.default.getMemberCount(e.id);
    return !_.has(e.id) && null != t && t >= E.COMMUNITY_UPSELL_MINIMUM_GUILD_SIZE && f.default.can(h.Permissions.ADMINISTRATOR, e) && !e.hasFeature(h.GuildFeatures.COMMUNITY)
  }
}
i = "EnablePublicGuildUpsellNoticeStore", (l = "displayName") in(s = m) ? Object.defineProperty(s, l, {
  value: i,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : s[l] = i, t.default = new m(u.default, {
  PUBLIC_UPSELL_NOTICE_DISMISS: function(e) {
    let t = e.guildId;
    if (!_.has(t)) return _.add(t), o.Storage.set(C, _), !0
  }
})