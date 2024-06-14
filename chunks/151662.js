"use strict";
s.r(t);
var n, a, l, i, r = s("442837"),
  o = s("570140");
let u = {},
  d = null;

function c() {
  u = {}, d = null
}
class E extends(i = r.default.Store) {
  getEmailSettings() {
    return {
      categories: u,
      initialized: d
    }
  }
}
l = "EmailSettingsStore", (a = "displayName") in(n = E) ? Object.defineProperty(n, a, {
  value: l,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : n[a] = l, t.default = new E(o.default, {
  CONNECTION_OPEN: c,
  LOGOUT: c,
  EMAIL_SETTINGS_FETCH_SUCCESS: function(e) {
    let {
      settings: t
    } = e;
    u = t.categories, d = t.initialized
  },
  EMAIL_SETTINGS_UPDATE_SUCCESS: function(e) {
    let {
      settings: t
    } = e;
    u = t.categories
  },
  EMAIL_SETTINGS_UPDATE: function(e) {
    let {
      updates: t
    } = e;
    u = {
      ...u,
      ...t
    }
  }
})