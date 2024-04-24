"use strict";
n.r(t);
var s, l, a, i, r = n("442837"),
  o = n("570140");
let u = {
  matureAgree: !1
};
class d extends(i = r.default.Store) {
  get didMatureAgree() {
    return u.matureAgree
  }
}
a = "ApplicationStoreSettingsStore", (l = "displayName") in(s = d) ? Object.defineProperty(s, l, {
  value: a,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : s[l] = a, t.default = new d(o.default, {
  APPLICATION_STORE_MATURE_AGREE: function() {
    u.matureAgree = !0
  }
})