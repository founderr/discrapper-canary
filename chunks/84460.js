"use strict";
n.r(t), n.d(t, {
  default: function() {
    return h
  }
}), n("702976");
var i = n("446674"),
  s = n("913144"),
  r = n("845579"),
  a = n("568734"),
  o = n("655151"),
  l = n("49111");

function u() {
  return {
    isEnabled: !1,
    lastUsedObject: {},
    useActivityUrlOverride: !1,
    activityUrlOverride: null,
    filter: ""
  }
}
let d = u(),
  c = null,
  f = [];
class _ extends i.default.PersistedStore {
  initialize(e) {
    d = {
      ...u(),
      ...null != e ? e : {}
    }
  }
  getState() {
    return d
  }
  getIsEnabled() {
    return o.ExperimentDevelopersGetDeveloperShelf.getCurrentConfig({
      location: "DeveloperActivityShelfStore"
    }).enabled ? r.DeveloperMode.getSetting() : d.isEnabled
  }
  getLastUsedObject() {
    return d.lastUsedObject
  }
  getUseActivityUrlOverride() {
    return d.useActivityUrlOverride
  }
  getActivityUrlOverride() {
    return d.activityUrlOverride
  }
  getFetchState() {
    return c
  }
  getFilter() {
    return d.filter
  }
  getDeveloperShelfItems() {
    return f
  }
  isApplicationInDevShelf(e) {
    return null != f.find(t => t.id === e)
  }
  inDevModeForApplication(e) {
    return d.isEnabled && this.isApplicationInDevShelf(e)
  }
}
_.displayName = "DeveloperActivityShelfStore", _.persistKey = "DeveloperActivityShelfStore";
var h = new _(s.default, {
  LOGOUT: function() {
    d = u(), c = null, f = []
  },
  DEVELOPER_ACTIVITY_SHELF_TOGGLE_ENABLED: function() {
    d.isEnabled = !d.isEnabled
  },
  DEVELOPER_ACTIVITY_SHELF_TOGGLE_USE_ACTIVITY_URL_OVERRIDE: function() {
    d.useActivityUrlOverride = !d.useActivityUrlOverride
  },
  DEVELOPER_ACTIVITY_SHELF_SET_ACTIVITY_URL_OVERRIDE: function(e) {
    let {
      activityUrlOverride: t
    } = e;
    d.activityUrlOverride = t
  },
  DEVELOPER_ACTIVITY_SHELF_MARK_ACTIVITY_USED: function(e) {
    let {
      applicationId: t,
      timestamp: n
    } = e;
    if (null == f.find(e => e.id === t)) return !1;
    d.lastUsedObject[t] = n
  },
  DEVELOPER_ACTIVITY_SHELF_FETCH_START() {
    c = "loading"
  },
  DEVELOPER_ACTIVITY_SHELF_FETCH_SUCCESS: function(e) {
    let {
      items: t
    } = e;
    c = "loaded", f = t.filter(e => null != e.flags && (0, a.hasFlag)(e.flags, l.ApplicationFlags.EMBEDDED))
  },
  DEVELOPER_ACTIVITY_SHELF_FETCH_FAIL: function(e) {
    let {
      type: t
    } = e;
    c = "errored"
  },
  DEVELOPER_ACTIVITY_SHELF_UPDATE_FILTER: function(e) {
    let {
      filter: t
    } = e;
    d.filter = t
  },
  USER_SETTINGS_PROTO_UPDATE() {}
})