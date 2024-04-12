"use strict";
a.r(t);
var n, s, l, i, r = a("442837"),
  o = a("570140"),
  u = a("984933"),
  d = a("594174"),
  c = a("981631");
let f = null;

function E() {
  let e = d.default.getCurrentUser();
  if (null == e || e.mfaEnabled === f) return !1;
  f = e.mfaEnabled
}
class h extends(i = r.default.Store) {
  initialize() {
    this.waitFor(d.default, u.default), this.syncWith([d.default, u.default], E)
  }
  isVisible(e) {
    return null != e && e.mfaLevel === c.MFALevels.ELEVATED && !1 === f && u.default.hasElevatedPermissions(e.id)
  }
}
l = "GuildMFAWarningStore", (s = "displayName") in(n = h) ? Object.defineProperty(n, s, {
  value: l,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : n[s] = l, t.default = new h(o.default, {
  CONNECTION_OPEN: E,
  GUILD_UPDATE: function() {
    return !0
  }
})