"use strict";
n.r(t);
var s, a, l, i, r = n("442837"),
  o = n("433517"),
  u = n("570140"),
  d = n("205355");
let c = "MaintenanceStore",
  E = null,
  f = null,
  _ = null;
class T extends(i = r.default.Store) {
  initialize() {
    _ = o.Storage.get(c)
  }
  getIncident() {
    return E
  }
  getScheduledMaintenance() {
    return null != f && f.id !== _ ? f : null
  }
}
l = "MaintenanceStore", (a = "displayName") in(s = T) ? Object.defineProperty(s, a, {
  value: l,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : s[a] = l, t.default = new T(u.default, {
  CONNECTION_OPEN: function() {
    E = null, d.default.checkScheduledMaintenances()
  },
  STATUS_PAGE_INCIDENT: function(e) {
    E = e.incident
  },
  STATUS_PAGE_SCHEDULED_MAINTENANCE: function(e) {
    f = e.maintenance
  },
  STATUS_PAGE_SCHEDULED_MAINTENANCE_ACK: function() {
    if (null == f) return !1;
    _ = f.id, o.Storage.set(c, _)
  }
})