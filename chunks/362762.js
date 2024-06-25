var s, r, i, l, a = n(442837),
  o = n(570140),
  u = n(981631);
let c = {};
class d extends(l = a.ZP.Store) {
  getState(e) {
    return c[e]
  }
}
i = "CodedLinkNativeAppStateStore", (r = "displayName") in(s = d) ? Object.defineProperty(s, r, {
  value: i,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : s[r] = i, t.Z = new d(o.Z, {
  NATIVE_APP_MODAL_OPENING: function(e) {
    let {
      code: t
    } = e;
    c[t] = u.kEZ.OPENING
  },
  NATIVE_APP_MODAL_OPENED: function(e) {
    let {
      code: t
    } = e;
    c[t] = u.kEZ.OPEN
  },
  NATIVE_APP_MODAL_OPEN_FAILED: function(e) {
    let {
      code: t
    } = e;
    c[t] = u.kEZ.OPEN_FAIL
  }
})