"use strict";
n.r(t);
var a, s, i, l, r = n("442837"),
  o = n("570140");
let u = {},
  d = null;

function c() {
  u = {}, d = null
}
class f extends(l = r.default.Store) {
  getEmailSettings() {
    return {
      categories: u,
      initialized: d
    }
  }
}
i = "EmailSettingsStore", (s = "displayName") in(a = f) ? Object.defineProperty(a, s, {
  value: i,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : a[s] = i, t.default = new f(o.default, {
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