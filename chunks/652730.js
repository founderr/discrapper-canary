var l, i, s, a, r = n(442837),
  o = n(570140),
  c = n(41776);
let u = null,
  d = null;

function h() {
  let e = c.Z.mostRecentLurkedGuildId();
  null != e ? (u = e, d = null) : (null != u ? d = u : d = null, u = null)
}
class m extends(a = r.ZP.Store) {
  initialize() {
    this.syncWith([c.Z], h)
  }
  shouldShowPopout(e) {
    return d === e
  }
}
s = "LurkerModePopoutStore", (i = "displayName") in(l = m) ? Object.defineProperty(l, i, {
  value: s,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : l[i] = s, t.Z = new m(o.Z)