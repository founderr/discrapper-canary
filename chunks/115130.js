"use strict";
n(789020);
var i, r = n(442837),
  s = n(570140),
  o = n(695346),
  a = n(630388),
  l = n(981631);

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function _() {
  return {
    lastUsedObject: {},
    useActivityUrlOverride: !1,
    activityUrlOverride: null,
    filter: ""
  }
}
let c = _(),
  d = null,
  E = [];
class I extends(i = r.ZP.PersistedStore) {
  initialize(e) {
    c = {
      ..._(),
      ...null != e ? e : {}
    }
  }
  getState() {
    return c
  }
  getIsEnabled() {
    return o.Sb.getSetting() && E.length > 0
  }
  getLastUsedObject() {
    return c.lastUsedObject
  }
  getUseActivityUrlOverride() {
    return this.getIsEnabled() && c.useActivityUrlOverride
  }
  getActivityUrlOverride() {
    return this.getIsEnabled() ? c.activityUrlOverride : null
  }
  getFetchState() {
    return d
  }
  getFilter() {
    return this.getIsEnabled() ? c.filter : ""
  }
  getDeveloperShelfItems() {
    return this.getIsEnabled() ? E : []
  }
  inDevModeForApplication(e) {
    return this.getIsEnabled() && null != E.find(t => t.id === e)
  }
}
u(I, "displayName", "DeveloperActivityShelfStore"), u(I, "persistKey", "DeveloperActivityShelfStore"), u(I, "migrations", [e => (delete e.isEnabled, {
  ...e
})]), t.Z = new I(s.Z, {
  LOGOUT: function() {
    c = _(), d = null, E = []
  },
  DEVELOPER_ACTIVITY_SHELF_TOGGLE_USE_ACTIVITY_URL_OVERRIDE: function() {
    c.useActivityUrlOverride = !c.useActivityUrlOverride
  },
  DEVELOPER_ACTIVITY_SHELF_SET_ACTIVITY_URL_OVERRIDE: function(e) {
    let {
      activityUrlOverride: t
    } = e;
    c.activityUrlOverride = t
  },
  DEVELOPER_ACTIVITY_SHELF_MARK_ACTIVITY_USED: function(e) {
    let {
      applicationId: t,
      timestamp: n
    } = e;
    if (null == E.find(e => e.id === t)) return !1;
    c.lastUsedObject[t] = n
  },
  DEVELOPER_ACTIVITY_SHELF_FETCH_START() {
    d = "loading"
  },
  DEVELOPER_ACTIVITY_SHELF_FETCH_SUCCESS: function(e) {
    let {
      applications: t
    } = e;
    d = "loaded", E = t.filter(e => null != e.flags && (0, a.yE)(e.flags, l.udG.EMBEDDED))
  },
  DEVELOPER_ACTIVITY_SHELF_FETCH_FAIL: function(e) {
    let {
      type: t
    } = e;
    d = "errored"
  },
  DEVELOPER_ACTIVITY_SHELF_UPDATE_FILTER: function(e) {
    let {
      filter: t
    } = e;
    c.filter = t
  },
  USER_SETTINGS_PROTO_UPDATE() {}
})