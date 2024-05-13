"use strict";
n.r(t);
var a, s, i, l, r = n("442837"),
  o = n("570140"),
  u = n("430824"),
  d = n("981631");
class c extends(l = r.default.Store) {
  initialize() {
    this.waitFor(u.default), this.syncWith([u.default], d.NOOP)
  }
  channelNoticePredicate(e, t) {
    return !e.hasFeature(d.GuildFeatures.BANNER) && Date.now() - t >= d.CHANNEL_NOTICE_SHOW_DELAY
  }
}
i = "GuildBoostingNoticeStore", (s = "displayName") in(a = c) ? Object.defineProperty(a, s, {
  value: i,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : a[s] = i, t.default = new c(o.default)