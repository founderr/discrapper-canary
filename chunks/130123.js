"use strict";
s.r(t);
var a, n = s("442837"),
  i = s("570140");

function l(e, t, s) {
  return t in e ? Object.defineProperty(e, t, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = s, e
}
let r = !1;
class o extends(a = n.default.PersistedStore) {
  initialize(e) {
    null != e && (r = e.persistentCodesEnabled)
  }
  getState() {
    return {
      persistentCodesEnabled: r
    }
  }
  getPersistentCodesEnabled() {
    return r
  }
}
l(o, "displayName", "SecureFramesSettingsStore"), l(o, "persistKey", "SecureFramesSettingsStore"), t.default = new o(i.default, {
  SECURE_FRAMES_SETTINGS_UPDATE: function(e) {
    r = e.persistentCodesEnabled
  }
})