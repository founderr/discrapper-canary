var s, a, i, l, r = n(442837),
  c = n(570140);
let o = {},
  d = null;

function u() {
  o = {}, d = null
}
class E extends(l = r.ZP.Store) {
  getEmailSettings() {
    return {
      categories: o,
      initialized: d
    }
  }
}
i = "EmailSettingsStore", (a = "displayName") in(s = E) ? Object.defineProperty(s, a, {
  value: i,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : s[a] = i, t.Z = new E(c.Z, {
  CONNECTION_OPEN: u,
  LOGOUT: u,
  EMAIL_SETTINGS_FETCH_SUCCESS: function(e) {
    let {
      settings: t
    } = e;
    o = t.categories, d = t.initialized
  },
  EMAIL_SETTINGS_UPDATE_SUCCESS: function(e) {
    let {
      settings: t
    } = e;
    o = t.categories
  },
  EMAIL_SETTINGS_UPDATE: function(e) {
    let {
      updates: t
    } = e;
    o = {
      ...o,
      ...t
    }
  }
})