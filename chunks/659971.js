"use strict";
a.r(t);
var n, s, l, i, r = a("873546"),
  o = a("442837"),
  u = a("570140");
let d = !1;
class c extends(i = o.default.Store) {
  getIsOpen() {
    return !r.isMobile || d
  }
}
l = "MobileWebSidebarStore", (s = "displayName") in(n = c) ? Object.defineProperty(n, s, {
  value: l,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : n[s] = l, t.default = new c(u.default, {
  MOBILE_WEB_SIDEBAR_OPEN: function() {
    d = !0
  },
  MOBILE_WEB_SIDEBAR_CLOSE: function() {
    d = !1
  }
})