"use strict";
a.r(t);
var n, s, l, i, r = a("442837"),
  o = a("570140"),
  u = a("496675"),
  d = a("981631");

function c() {
  return !0
}
class f extends(i = r.default.Store) {
  initialize() {
    this.waitFor(u.default), this.syncWith([u.default], c)
  }
  channelNoticePredicate(e, t) {
    return Date.now() - t >= d.CHANNEL_NOTICE_SHOW_DELAY && u.default.can(d.Permissions.ADMINISTRATOR, e)
  }
}
l = "InviteNoticeStore", (s = "displayName") in(n = f) ? Object.defineProperty(n, s, {
  value: l,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : n[s] = l, t.default = new f(o.default)