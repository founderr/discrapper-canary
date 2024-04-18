"use strict";
a.r(t);
var n, s, l, i, r = a("442837"),
  o = a("570140");
let u = {},
  d = null;

function c() {
  u = {}, d = null
}
class f extends(i = r.default.Store) {
  getEmailSettings() {
    return {
      categories: u,
      initialized: d
    }
  }
}
l = "EmailSettingsStore", (s = "displayName") in(n = f) ? Object.defineProperty(n, s, {
  value: l,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : n[s] = l, t.default = new f(o.default, {
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