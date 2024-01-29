"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
}), n("222007");
var s = n("446674"),
  r = n("913144"),
  i = n("197881"),
  l = n("492397");
let a = new Set,
  u = {};
class o extends s.default.PersistedStore {
  initialize(e) {
    null != e && (Array.isArray(e.hiddenHotspots) && (a = new Set(e.hiddenHotspots)), null != e.hotspotOverrides && (u = e.hotspotOverrides))
  }
  hasHotspot(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
      n = !t && u[e];
    return !(l.CONFERENCE_MODE_ENABLED || i.ProcessArgs.isDisallowPopupsSet()) && (n || !a.has(e))
  }
  hasHiddenHotspot(e) {
    return a.has(e)
  }
  getHotspotOverride(e) {
    return u[e]
  }
  getState() {
    return {
      hiddenHotspots: a,
      hotspotOverrides: u
    }
  }
}
o.displayName = "HotspotStore", o.persistKey = "hotspots", o.migrations = [e => ({
  hiddenHotspots: null != e ? e : [],
  hotspotOverrides: {}
})];
var d = new o(r.default, {
  OVERLAY_INITIALIZE: function(e) {
    let {
      hiddenHotspots: t
    } = e;
    a = new Set(t)
  },
  HOTSPOT_HIDE: function(e) {
    let {
      location: t
    } = e;
    if (a.has(t)) return !1;
    a.add(t)
  },
  HOTSPOT_OVERRIDE_SET: function(e) {
    let {
      location: t,
      enabled: n
    } = e;
    u[t] = n
  },
  HOTSPOT_OVERRIDE_CLEAR: function(e) {
    let {
      location: t
    } = e;
    if (null == u[t]) return !1;
    delete u[t]
  }
})