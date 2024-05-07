"use strict";
n.r(t);
var a, s, i, l, r = n("442837"),
  o = n("570140"),
  u = n("984933"),
  d = n("594174"),
  c = n("981631");
let f = null;

function E() {
  let e = d.default.getCurrentUser();
  if (null == e || e.mfaEnabled === f) return !1;
  f = e.mfaEnabled
}
class h extends(l = r.default.Store) {
  initialize() {
    this.waitFor(d.default, u.default), this.syncWith([d.default, u.default], E)
  }
  isVisible(e) {
    return null != e && e.mfaLevel === c.MFALevels.ELEVATED && !1 === f && u.default.hasElevatedPermissions(e.id)
  }
}
i = "GuildMFAWarningStore", (s = "displayName") in(a = h) ? Object.defineProperty(a, s, {
  value: i,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : a[s] = i, t.default = new h(o.default, {
  CONNECTION_OPEN: E,
  GUILD_UPDATE: function() {
    return !0
  }
})