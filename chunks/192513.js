var i, s, l, a, r = n(442837),
  o = n(570140),
  c = n(984933),
  u = n(594174),
  d = n(981631);
let E = null;

function h() {
  let e = u.default.getCurrentUser();
  if (null == e || e.mfaEnabled === E) return !1;
  E = e.mfaEnabled
}
class _ extends(a = r.ZP.Store) {
  initialize() {
    this.waitFor(u.default, c.ZP), this.syncWith([u.default, c.ZP], h)
  }
  isVisible(e) {
    return null != e && e.mfaLevel === d.BpS.ELEVATED && !1 === E && c.ZP.hasElevatedPermissions(e.id)
  }
}
l = "GuildMFAWarningStore", (s = "displayName") in(i = _) ? Object.defineProperty(i, s, {
  value: l,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : i[s] = l, t.Z = new _(o.Z, {
  CONNECTION_OPEN: h,
  GUILD_UPDATE: function() {
    return !0
  }
})