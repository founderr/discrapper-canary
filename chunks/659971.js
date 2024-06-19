var i, s, l, a, r = n(873546),
  o = n(442837),
  c = n(570140);
let u = !1;
class d extends(a = o.ZP.Store) {
  getIsOpen() {
    return !r.tq || u
  }
}
l = "MobileWebSidebarStore", (s = "displayName") in(i = d) ? Object.defineProperty(i, s, {
  value: l,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : i[s] = l, t.Z = new d(c.Z, {
  MOBILE_WEB_SIDEBAR_OPEN: function() {
    u = !0
  },
  MOBILE_WEB_SIDEBAR_CLOSE: function() {
    u = !1
  }
})