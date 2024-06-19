var s, i, l, a, r = n(442837),
  o = n(433517),
  c = n(570140),
  u = n(205355);
let d = "MaintenanceStore",
  E = null,
  _ = null,
  I = null;
class T extends(a = r.ZP.Store) {
  initialize() {
    I = o.K.get(d)
  }
  getIncident() {
    return E
  }
  getScheduledMaintenance() {
    return null != _ && _.id !== I ? _ : null
  }
}
l = "MaintenanceStore", (i = "displayName") in(s = T) ? Object.defineProperty(s, i, {
  value: l,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : s[i] = l, t.Z = new T(c.Z, {
  CONNECTION_OPEN: function() {
    E = null;
    u.Z.checkScheduledMaintenances()
  },
  STATUS_PAGE_INCIDENT: function(e) {
    E = e.incident
  },
  STATUS_PAGE_SCHEDULED_MAINTENANCE: function(e) {
    _ = e.maintenance
  },
  STATUS_PAGE_SCHEDULED_MAINTENANCE_ACK: function() {
    if (null == _) return !1;
    I = _.id, o.K.set(d, I)
  }
})