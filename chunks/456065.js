"use strict";
a.r(t), a("47120");
var n, s, l, i, r = a("442837"),
  o = a("570140"),
  u = a("810788"),
  d = a("430824"),
  c = a("981631");
let f = !1;

function E(e) {
  let t = d.default.getGuild(e);
  return !!(null != t && t.hasFeature(c.GuildFeatures.HUB)) && (f = !0, !0)
}

function h() {
  return !0
}
class _ extends(n = r.default.Store) {
  initialize() {
    this.waitFor(d.default, u.default), this.syncWith([u.default], h)
  }
  channelNoticePredicate(e) {
    return !!e.hasFeature(c.GuildFeatures.LINKED_TO_HUB) && !f && !0
  }
}
i = "HubLinkNoticeStore", (l = "displayName") in(s = _) ? Object.defineProperty(s, l, {
  value: i,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : s[l] = i, t.default = new _(o.default, {
  CONNECTION_OPEN: function(e) {
    for (let t of e.guilds)
      if (E(t.id)) return !0;
    return !1
  },
  GUILD_CREATE: function(e) {
    let {
      guild: t
    } = e;
    return E(t.id)
  }
})