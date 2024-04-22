"use strict";
a.r(t);
var n, s, l, i, r = a("442837"),
  o = a("570140"),
  u = a("430824"),
  d = a("981631");
class c extends(i = r.default.Store) {
  initialize() {
    this.waitFor(u.default), this.syncWith([u.default], d.NOOP)
  }
  channelNoticePredicate(e, t) {
    return !e.hasFeature(d.GuildFeatures.BANNER) && Date.now() - t >= d.CHANNEL_NOTICE_SHOW_DELAY
  }
}
l = "GuildBoostingNoticeStore", (s = "displayName") in(n = c) ? Object.defineProperty(n, s, {
  value: l,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : n[s] = l, t.default = new c(o.default)