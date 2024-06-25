var n, a, i, r, l = s(442837),
  o = s(570140);
let c = {},
  E = null;

function _() {
  c = {}, E = null
}
class u extends(r = l.ZP.Store) {
  getEmailSettings() {
    return {
      categories: c,
      initialized: E
    }
  }
}
i = "EmailSettingsStore", (a = "displayName") in(n = u) ? Object.defineProperty(n, a, {
  value: i,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : n[a] = i, t.Z = new u(o.Z, {
  CONNECTION_OPEN: _,
  LOGOUT: _,
  EMAIL_SETTINGS_FETCH_SUCCESS: function(e) {
    let {
      settings: t
    } = e;
    c = t.categories, E = t.initialized
  },
  EMAIL_SETTINGS_UPDATE_SUCCESS: function(e) {
    let {
      settings: t
    } = e;
    c = t.categories
  },
  EMAIL_SETTINGS_UPDATE: function(e) {
    let {
      updates: t
    } = e;
    c = {
      ...c,
      ...t
    }
  }
})