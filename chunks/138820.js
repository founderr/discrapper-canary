var n, i = t(442837),
  a = t(570140);

function l(e, s, t) {
  return s in e ? Object.defineProperty(e, s, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[s] = t, e
}
let r = !1;
class o extends(n = i.ZP.PersistedStore) {
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
l(o, "displayName", "SecureFramesSettingsStore"), l(o, "persistKey", "SecureFramesSettingsStore"), s.Z = new o(a.Z, {
  SECURE_FRAMES_SETTINGS_UPDATE: function(e) {
    r = e.persistentCodesEnabled
  }
})