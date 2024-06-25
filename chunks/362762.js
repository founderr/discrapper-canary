var s, i, r, a, l = n(442837),
  o = n(570140),
  c = n(981631);
let u = {};
class d extends(a = l.ZP.Store) {
  getState(e) {
    return u[e]
  }
}
r = "CodedLinkNativeAppStateStore", (i = "displayName") in(s = d) ? Object.defineProperty(s, i, {
  value: r,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : s[i] = r, t.Z = new d(o.Z, {
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