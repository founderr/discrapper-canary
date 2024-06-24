var n, a, r, l, i = s(442837),
  o = s(570140),
  c = s(981631);
let u = {};
class d extends(l = i.ZP.Store) {
  getState(e) {
    return u[e]
  }
}
r = "CodedLinkNativeAppStateStore", (a = "displayName") in(n = d) ? Object.defineProperty(n, a, {
  value: r,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : n[a] = r, t.Z = new d(o.Z, {
  NATIVE_APP_MODAL_OPENING: function(e) {
    let {
      code: t
    } = e;
    u[t] = c.kEZ.OPENING
  },
  NATIVE_APP_MODAL_OPENED: function(e) {
    let {
      code: t
    } = e;
    u[t] = c.kEZ.OPEN
  },
  NATIVE_APP_MODAL_OPEN_FAILED: function(e) {
    let {
      code: t
    } = e;
    u[t] = c.kEZ.OPEN_FAIL
  }
})