"use strict";
s.r(t);
var a, n, l, i, r = s("442837"),
  u = s("570140");
let o = {},
  d = null;

function c() {
  o = {}, d = null
}
class E extends(i = r.default.Store) {
  getEmailSettings() {
    return {
      categories: o,
      initialized: d
    }
  }
}
l = "EmailSettingsStore", (n = "displayName") in(a = E) ? Object.defineProperty(a, n, {
  value: l,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : a[n] = l, t.default = new E(u.default, {
  CONNECTION_OPEN: c,
  LOGOUT: c,
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