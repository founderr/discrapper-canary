"use strict";
n.r(t);
var a, l, s, i, r = n("442837"),
  o = n("570140");
let u = "UPDATE_NOT_AVAILABLE";

function d(e) {
  u = e.type
}
class c extends(i = r.default.Store) {
  getState() {
    return u
  }
}
s = "AutoUpdateStore", (l = "displayName") in(a = c) ? Object.defineProperty(a, l, {
  value: s,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : a[l] = s, t.default = new c(o.default, {
  CHECKING_FOR_UPDATES: d,
  UPDATE_NOT_AVAILABLE: d,
  UPDATE_AVAILABLE: d,
  UPDATE_MANUALLY: d,
  UPDATE_ERROR: d,
  UPDATE_DOWNLOADED: d
})