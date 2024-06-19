var s, a, i, l, r = n(442837),
  o = n(570140);
let c = {},
  d = null;

function u() {
  c = {}, d = null
}
class E extends(l = r.ZP.Store) {
  getEmailSettings() {
    return {
      categories: c,
      initialized: d
    }
  }
}
i = "EmailSettingsStore", (a = "displayName") in(s = E) ? Object.defineProperty(s, a, {
  value: i,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : s[a] = i, t.Z = new E(o.Z, {
  CONNECTION_OPEN: u,
  LOGOUT: u,
  EMAIL_SETTINGS_FETCH_SUCCESS: function(e) {
    let {
      settings: t
    } = e;
    c = t.categories, d = t.initialized
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