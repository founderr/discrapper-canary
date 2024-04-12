"use strict";
n.r(t);
var s, a, l, i, r = n("442837"),
  o = n("570140"),
  u = n("186901");
let d = null,
  c = [u.DispatchErrorCodes.REDISTRIBUTABLE_INSTALL_FAILED, u.DispatchErrorCodes.POST_INSTALL_FAILED, u.DispatchErrorCodes.POST_INSTALL_CANCELLED],
  E = [u.DispatchErrorCodes.APPLICATION_NOT_FOUND, u.DispatchErrorCodes.APPLICATION_LOAD_FAILED, u.DispatchErrorCodes.INTERRUPTED, u.DispatchErrorCodes.DESERIALIZATION_FAILED];
class f extends(i = r.default.Store) {
  getLastError() {
    return d
  }
}
l = "DispatchApplicationErrorStore", (a = "displayName") in(s = f) ? Object.defineProperty(s, a, {
  value: l,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : s[a] = l, t.default = new f(o.default, {
  DISPATCH_APPLICATION_LAUNCH_SETUP_START: function() {
    null != d && null != d.code && c.includes(d.code) && (d = null)
  },
  DISPATCH_APPLICATION_ERROR: function(e) {
    let {
      error: t
    } = e;
    d = null != t.code && E.includes(t.code) ? null : t
  }
})