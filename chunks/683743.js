"use strict";
n.r(t);
var a, s, i, l, r = n("442837"),
  o = n("570140"),
  u = n("496675"),
  d = n("981631");

function c() {
  return !0
}
class f extends(l = r.default.Store) {
  initialize() {
    this.waitFor(u.default), this.syncWith([u.default], c)
  }
  channelNoticePredicate(e, t) {
    return Date.now() - t >= d.CHANNEL_NOTICE_SHOW_DELAY && u.default.can(d.Permissions.ADMINISTRATOR, e)
  }
}
i = "InviteNoticeStore", (s = "displayName") in(a = f) ? Object.defineProperty(a, s, {
  value: i,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : a[s] = i, t.default = new f(o.default)