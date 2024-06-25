var n, a = t(442837),
  i = t(570140);

function r(e, s, t) {
  return s in e ? Object.defineProperty(e, s, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[s] = t, e
}
let o = !1;
class l extends(n = a.ZP.PersistedStore) {
  initialize(e) {
    null != e && (o = e.persistentCodesEnabled)
  }
  getState() {
    return {
      persistentCodesEnabled: o
    }
  }
  getPersistentCodesEnabled() {
    return o
  }
}
r(l, "displayName", "SecureFramesSettingsStore"), r(l, "persistKey", "SecureFramesSettingsStore"), s.Z = new l(i.Z, {
  SECURE_FRAMES_SETTINGS_UPDATE: function(e) {
    o = e.persistentCodesEnabled
  }
})