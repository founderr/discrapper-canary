var s, i, l, a, r = n(442837),
  o = n(570140);
let c = "UPDATE_NOT_AVAILABLE";

function u(e) {
  c = e.type
}
class d extends(a = r.ZP.Store) {
  getState() {
    return c
  }
}
l = "AutoUpdateStore", (i = "displayName") in(s = d) ? Object.defineProperty(s, i, {
  value: l,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : s[i] = l, t.Z = new d(o.Z, {
  CHECKING_FOR_UPDATES: u,
  UPDATE_NOT_AVAILABLE: u,
  UPDATE_AVAILABLE: u,
  UPDATE_MANUALLY: u,
  UPDATE_ERROR: u,
  UPDATE_DOWNLOADED: u
})