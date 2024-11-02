var i,
    r,
    l,
    a,
    o = n(442837),
    s = n(433517),
    c = n(570140),
    u = n(205355);
let d = 'MaintenanceStore',
    m = null,
    f = null,
    h = null;
class p extends (a = o.ZP.Store) {
    initialize() {
        h = s.K.get(d);
    }
    getIncident() {
        return m;
    }
    getScheduledMaintenance() {
        return null != f && f.id !== h ? f : null;
    }
}
(l = 'MaintenanceStore'),
    (r = 'displayName') in (i = p)
        ? Object.defineProperty(i, r, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[r] = l),
    (t.Z = new p(c.Z, {
        CONNECTION_OPEN: function () {
            m = null;
            u.Z.checkScheduledMaintenances();
        },
        STATUS_PAGE_INCIDENT: function (e) {
            m = e.incident;
        },
        STATUS_PAGE_SCHEDULED_MAINTENANCE: function (e) {
            f = e.maintenance;
        },
        STATUS_PAGE_SCHEDULED_MAINTENANCE_ACK: function () {
            if (null == f) return !1;
            (h = f.id), s.K.set(d, h);
        }
    }));
